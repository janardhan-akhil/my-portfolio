import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from "@angular/core";

const paths: Record<string, string> = {
  arrow: "M7 17 17 7M7 7h10v10",
  down: "M12 5v14m-7-7 7 7 7-7",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m6 6 12 12M6 18 18 6",
  code: "m8 6-6 6 6 6m8-12 6 6-6 6m-3-14-2 16",
  mail: "M3 4h18v16H3zM3 5l9 7 9-7",
  location:
    "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  server: "M3 3h18v7H3zM3 14h18v7H3zM7 6.5h.01M7 17.5h.01",
  database:
    "M20 6c0 2.2-3.6 4-8 4s-8-1.8-8-4 3.6-4 8-4 8 1.8 8 4Zm0 0v12c0 2.2-3.6 4-8 4s-8-1.8-8-4V6m0 6c0 2.2 3.6 4 8 4s8-1.8 8-4",
  zap: "m13 2-3 8H4l7 12 3-8h6L13 2Z",
  briefcase: "M3 7h18v14H3zM8 7V3h8v4M3 12c6 3 12 3 18 0M12 11v4",
  check: "M22 11v1a10 10 0 1 1-5.9-9.1M22 4 12 14l-3-3",
  upload: "M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5",
  download: "M12 3v13m-5-5 5 5 5-5M4 16v5h16v-5",
  user: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2",
  document: "M14 2H4v20h16V8l-6-6Zm0 0v6h6M8 13h8M8 17h6",
  sparkles:
    "m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3ZM20 2v4m-2-2h4",
  github:
    "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.7c.85 0 1.71.12 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
  linkedin:
    "M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3zm6 0h4v1.7c.7-1.2 1.8-2 3.5-2 3.4 0 4.5 2.1 4.5 5.5V21h-4v-6c0-1.8-.4-2.8-1.8-2.8S13 13.3 13 15v6H9Z",
};

@Component({
  selector: "app-icon",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg
    [attr.width]="size()"
    [attr.height]="size()"
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    [attr.fill]="filled() ? 'currentColor' : 'none'"
    [attr.stroke]="filled() ? 'none' : 'currentColor'"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path [attr.d]="path()" />
  </svg>`,
  styles: [
    ":host { display:inline-flex; vertical-align:middle; flex-shrink:0; } svg { display:block; }",
  ],
})
export class IconComponent {
  readonly name = input("code");
  readonly size = input(20);
  readonly filled = computed(() =>
    ["github", "linkedin"].includes(this.name()),
  );
  readonly path = computed(() => paths[this.name()] ?? paths["code"]);
}
