import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appRemoveElement]'
})
export class RemoveElementDirective implements OnInit {
  @Input() visible: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
      if(this.visible){
        this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
      }
  }
}

