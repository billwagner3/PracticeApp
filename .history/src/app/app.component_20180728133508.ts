import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loadedFeature = 'key-certainty-drill'; 

  constructor(private elementRef: ElementRef) {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  colorEntireDom() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#000000';
  }
}
