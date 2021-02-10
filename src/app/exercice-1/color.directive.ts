import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    if ($event.key === "ArrowUp") {
      this.changeColor("orange");
    } else if ($event.key === "ArrowDown") {
      this.changeColor("green");
    } else if ($event.key === "ArrowLeft") {
      this.changeColor("blue");
    } else if ($event.key === "ArrowRight") {
      this.changeColor("yellow");
    }
  }

  constructor(private el: ElementRef) {}

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
