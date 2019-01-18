import { Component, OnInit } from '@angular/core';

import { KeysService } from '../keys.service';

import 'rxjs/Rx';


@Component({
  selector: 'app-key-certainty-drill',
  templateUrl: './key-certainty-drill.component.html',
  styleUrls: ['./key-certainty-drill.component.scss']
})
export class KeyCertaintyDrillComponent implements OnInit {

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
    // console.log(test);
    let isRightKey = document.getElementById("drillKey").innerHTML;
    let dump = console.log(test);
    // let write = document.getElementById('dump').innerHTML = console.log('test');
    
    
    let audioPlayer = <HTMLVideoElement> document.getElementById('correctSound');
    audioPlayer.addEventListener;
    if (test == isRightKey) {
    audioPlayer.play()
    .then(function() {
      alert("You got it right!");
      
      })
    } else{       
        let audioPlayer2 = <HTMLVideoElement> document.getElementById('wrongSound');
        audioPlayer2.play()
        .then(function() {
          alert("Incorrect answer, please try again.");
        })        
  }   
} 
    )};

  consoleDump() {
    console.log(this.getKeyClass(this.typeKey))
  }

  printSpelling()  {
    return this.typeKey;
  }

  function () {
    var old = console.log;
    var logger = document.getElementById('dump');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
};

  // loadedFeature = 'drill';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }

  ngOnInit() {
  }
}
