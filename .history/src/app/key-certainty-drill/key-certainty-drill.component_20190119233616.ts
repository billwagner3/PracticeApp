import { Component, OnInit } from '@angular/core';
import { KeysService } from '../keys.service';
import 'rxjs/Rx';
import * as $ from 'jquery';

import * as jsonQuery from 'json-query';

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

  bounce = 'animated bounceInDown';
  animate = {
  animations: [
    { id: "1", class: "animated bounceInDown" }
  ]
}

  getKeyClass(typeKey) {
    console.log(jsonQuery('animations.class', {data: this.animate}));
    // let x = () => {json.find(item => item.id == 1)};
    // console.log(x);
    this.keysService.getAllKeys(typeKey)
    .subscribe(test => {
    this.test = test;
    let isRightKey = document.getElementById("drillKey").innerHTML;
    console.log(test);
    // let audioPlayer = <HTMLVideoElement> document.getElementById('correctSound');
    // audioPlayer.addEventListener;
    if (test == isRightKey) {
    // audioPlayer.play()
    //   .then(function() {
      //  alert("You got it right!");
      
      let check = $('#log').addClass(this.bounce).text('You got it right! ' + test);
      console.log(check);
      //  })
    } else {       
        // let audioPlayer2 = <HTMLVideoElement> document.getElementById('wrongSound');
        // audioPlayer2.play()
        // .then(function() 
        // {
          $('#log').addClass('animated bounceInDown').text('Wrong Answer! ' + test);
        }        
  }   
    )};

  printSpelling()  {
    return this.typeKey;
  }

  ngOnInit() {
  }
}
