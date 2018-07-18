import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { KeyPickComponent } from '../key-pick/key-pick.component';

import 'rxjs/Rx';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-certainty-drill',
  templateUrl: './key-certainty-drill.component.html',
  styleUrls: ['./key-certainty-drill.component.scss']
})
export class KeyCertaintyDrillComponent implements OnInit {

  title = 'The Scale Certainty Application';
  @Output() makeUpperCase = new EventEmitter<string>();
  @Input() keyPick: KeyPickComponent;
  
  constructor(private keysService: KeysService) {
  }

  typeKey: string = '';
  dataPassed = false;
  test = '';
  error: string = 'You got it wrong, try again';
  errors = false;

  getKeyClass(typeKey) {
    const audio = new Audio('assets/ding.wav');
    this.keysService.getAllKeys(typeKey)
    .subscribe(test => {
    this.test = test;
    console.log(test);
    // let x = this.keyPick.checkAnswer(typeKey);
    // console.log(x);
    let isRightKey = document.getElementById("drillKey").innerHTML;
    console.log(isRightKey)
    const hasError = false;
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          document.getElementById('correctSound').play()
          .then(function(disAlert) {
            alert("You got it right!");
          })
          if (hasError) {
            reject()
          } else {
          resolve();
          }
        }, 500);
    })   
}); 
    return promise;
    }

  // runKey() {
  //   this.keyPick.checkAnswer
  // }

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
