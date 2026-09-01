import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from "@angular/core";
import { IconComponent } from "./icon.component";

@Component({
  selector: "app-profile-photo",
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./profile-photo.component.html",
})
export class ProfilePhotoComponent {
  readonly permanentUrl = input("");
  readonly name = input.required<string>();
  readonly initials = input("BJ");
  readonly allowPicker = input(true);
  readonly preview = signal("");
  readonly failedUrl = signal("");
  readonly busy = signal(false);
  readonly message = signal("");
  readonly photo = computed(() => {
    const candidate = this.preview() || this.permanentUrl();
    return candidate === this.failedUrl() ? "" : candidate;
  });
  private readonly storageKey = "janardhan-profile-photo";

  constructor() {
    afterNextRender(() => {
      // A permanent configured photo takes precedence over older browser previews.
      if (this.permanentUrl()) return;
      try {
        const stored = localStorage.getItem(this.storageKey);
        if (stored?.startsWith("data:image/")) this.preview.set(stored);
      } catch {
        /* Browser storage is optional. */
      }
    });
  }

  async selectPhoto(event: Event): Promise<void> {
    const field = event.target as HTMLInputElement;
    const file = field.files?.[0];
    field.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      this.message.set("Choose a JPG, PNG or WebP image.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.message.set("Choose an image smaller than 5 MB.");
      return;
    }
    this.busy.set(true);
    const temporaryUrl = URL.createObjectURL(file);
    try {
      const image = new Image();
      image.src = temporaryUrl;
      await image.decode();
      const scale = Math.min(
        1,
        1200 / Math.max(image.naturalWidth, image.naturalHeight),
      );
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.naturalWidth * scale);
      canvas.height = Math.round(image.naturalHeight * scale);
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Image preview is unavailable.");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const result = canvas.toDataURL("image/webp", 0.86);
      this.failedUrl.set("");
      this.preview.set(result);
      try {
        localStorage.setItem(this.storageKey, result);
        this.message.set("Photo preview saved on this device only.");
      } catch {
        this.message.set("Photo added for this session only.");
      }
    } catch {
      this.message.set(
        "That image could not be opened. Try another JPG or PNG.",
      );
    } finally {
      URL.revokeObjectURL(temporaryUrl);
      this.busy.set(false);
    }
  }

  clearPreview(): void {
    this.preview.set("");
    this.failedUrl.set("");
    try {
      localStorage.removeItem(this.storageKey);
    } catch {
      /* Optional storage. */
    }
    this.message.set("Local photo preview removed.");
  }

  onImageError(): void {
    this.failedUrl.set(this.photo());
    this.message.set("Photo unavailable. Check the configured image path.");
  }
}
