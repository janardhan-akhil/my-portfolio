import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
  selector: "app-section-heading",
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="section-heading" [class.centered]="centered()">
    <p>{{ label() }}</p>
    <h2>
      {{ title() }} <span>{{ accent() }}</span>
    </h2>
  </div>`,
})
export class SectionHeadingComponent {
 // readonly number = input.required<string>();
  readonly label = input.required<string>();
  readonly title = input.required<string>();
  readonly accent = input.required<string>();
  readonly centered = input(false);
}
