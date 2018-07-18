import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-key-certainty-drill',
  templateUrl: './key-certainty-drill.component.html',
  styleUrls: ['./key-certainty-drill.component.css']
})
export class KeyCertaintyDrillComponent implements OnInit {

  title = 'The Scale Certainty Application';
  @Output() makeUpperCase = new EventEmitter<string>();
  
  constructor(private keysService: KeysService) {
  }

  typeKey: string = '';
  dataPassed = false;
  test = '';
  error: string = 'You got it wrong, try again';
  errors = false;

  getKeyClass(typeKey) {
   
    this.keysService.getScale(typeKey)
    .subscribe(test => {
    this.test = test;

}) 
  if (this.test != null) {
    this.dataPassed = true;
    this.errors = false;
  
  }else { 
      this.dataPassed = false;
      this.errors = true;
      
      console.log(this.test);
    
   
      };
      
    }

  allUpperCase()  {
    return this.typeKey.toUpperCase();
  }

  loadedFeature = 'drill';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
  }

}
