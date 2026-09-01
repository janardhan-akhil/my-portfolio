import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  inject,
  signal,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { portfolio, navigation } from "./data/portfolio.data";
import { IconComponent } from "./shared/icon.component";
import { SectionHeadingComponent } from "./shared/section-heading.component";
import { ProfilePhotoComponent } from "./shared/profile-photo.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [IconComponent, SectionHeadingComponent, ProfilePhotoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./app.component.html",
})
export class AppComponent {
  readonly profile = portfolio;
  readonly nav = navigation;
  readonly year = new Date().getFullYear();
  readonly menuOpen = signal(false);
  readonly activeSection = signal("home");
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (typeof IntersectionObserver === "undefined") return;
      const observer = new IntersectionObserver(
        (entries) => {
          const current = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (current) this.activeSection.set(current.target.id);
        },
        { rootMargin: "-20% 0px -55%", threshold: [0, 0.2, 0.5] },
      );
      ["home", ...this.nav.map((item) => item.id)].forEach((id) => {
        const element = this.document.getElementById(id);
        if (element) observer.observe(element);
      });
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  @HostListener("document:keydown.escape") closeMenu(): void {
    this.menuOpen.set(false);
  }
}
