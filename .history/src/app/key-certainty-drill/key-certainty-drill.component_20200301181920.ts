import { Component, OnInit, Injectable } from '@angular/core';
import { KeysService } from '../keys.service';
import 'rxjs/Rx';
import * as $ from 'jquery';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { map } from 'rxjs/operators/map';
import { Subscription } from 'rxjs';
import * as jsonQuery from 'json-query';

@Injectable()

@Component({
  selector: 'app-key-certainty-drill',
  templateUrl: './key-certainty-drill.component.html',
  styleUrls: ['./key-certainty-drill.component.scss']
})
export class KeyCertaintyDrillComponent implements OnInit {

  // keys: allKeys[] = []; 
  // private keySub: Subscription;
  
  constructor(private keysService: KeysService) {
  }
  
  typeKey: string = '';
  spacey: string = '';
  dataPassed = false;
  test = '';
  errors = false;
  hasError = false;
  keyNames = '';
  
 

  bounce = 'animated bounceInDown';
  animate = {
  animations: [
    { id: "1", class: "animated bounceInDown" }
  ]
}

  /*
  Added a couple of improvements--no spaces are needed to be typed, nor are
  */

  getKeyClass(typeKey) {
    console.log('spellcheck', typeKey)
    console.log(jsonQuery('animations.class', {data: this.animate}));
    // let x = () => {json.find(item => item.id == 1)};
    // console.log(x);
    this.keysService.getAllKeys(typeKey.toUpperCase().split('').join(' '))
    .subscribe(test => {
    this.test = test;

    /*
    Originally, the app had sounds for getting the right answer or getting a wrong answer, but they wouldn't work
    with iOS devices, so they have been disabled below for the time being.
    */
    let isRightKey = document.getElementById("drillKey").innerHTML;
    console.log('test-check', test);
    // let audioPlayer = <HTMLVideoElement> document.getElementById('correctSound');
    // audioPlayer.addEventListener;
    if (test == isRightKey) {
    // audioPlayer.play()
    //   .then(function() {
      //  alert("You got it right!");
      
      
      let check = $('#log').addClass('animated bounceInDown').text('You got it right! ' + test);
      setTimeout(function(){
        $("#log").removeClass('animated bounceInDown');
      }, 1000)
      console.log(check);
      //  })
    } else {       
        // let audioPlayer2 = <HTMLVideoElement> document.getElementById('wrongSound');
        // audioPlayer2.play()
        // .then(function() 
        // {
          $('#log').addClass(this.bounce).text('Wrong Answer! Please try again.' + test);
          setTimeout(function(){
            $("#log").removeClass('animated bounceInDown');   
          }, 1000)
        }        
  }   
    )};

    printSpelling()  {
      let upCase = this.typeKey.toUpperCase();
      let spacey = upCase.split('').join(' ');
      return spacey;
    }

  ngOnInit() {
  } 
}



