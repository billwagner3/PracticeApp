import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { KeyPickComponent } from '../key-pick/key-pick.component';

import 'rxjs/Rx';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-certainty-drill',
  templateUrl: './key-certainty-drill.component.html',
  styleUrls: ['./key-certainty-drill.component.scss']
})
export class KeyCertaintyDrillComponent implements OnInit {

  @Input() keyPick: KeyPickComponent;
  
  constructor(private keysService: KeysService) {
  }

  typeKey: string = '';
  dataPassed = false;
  test = '';
  errors = false;
  hasError = false;

  getKeyClass(typeKey) {
    
    this.keysService.getAllKeys(typeKey)
    .subscribe(test => {
    this.test = test;
    console.log(test);
    let isRightKey = document.getElementById("drillKey").innerHTML;
    console.log(isRightKey)
    let audioPlayer = <HTMLVideoElement> document.getElementById('correctSound');
    audioPlayer.addEventListener;
    if (test == isRightKey) {
    audioPlayer.play()
    .then(function() {
      alert("You got it right!");
      })
    } else{         
        alert("Incorrect answer, please try again");
  }   
} 
    )};

  printSpelling()  {
    return this.typeKey;
  }

  loadedFeature = 'drill';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
  }

}
