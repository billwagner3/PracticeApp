import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss']
})
export class KeyPickComponent implements OnInit {
  form: FormGroup;
  
theKeys = {  
  keyNames: [
    { name: 'C'}, { name: 'G'}, { name: 'D'},
    { name: 'A'}, { name: 'E'}, { name: 'B'},
    { name: 'F#'}, { name: 'C#'}, { name: 'F'},
    { name: 'Bb'}, { name: 'Eb'}, { name: 'Ab'},
    { name: 'Db'}, { name: 'Gb'}, { name: 'Cb'},
    { name: 'a'}, { name: 'e'}, { name: 'b'},
    { name: 'f#'}, { name: 'c#'}, { name: 'g#'},
    { name: 'd#'}, { name: 'a#'}, { name: 'd'},
    { name: 'g'}, { name: 'c'}, { name: 'f'},
    { name: 'bb'}, { name: 'eb'}, { name: 'ab'}
  ]
}
  constructor(private keysService: KeysService, private fb: FormBuilder) {
    this.form = this.fb.group({
      keyNames: this.buildKeyNames()
    });
   }

   buildKeyNames() {
     const arr = this.theKeys.keyNames.map(keyName => {
      return this.fb.control(this.theKeys.keyNames.selected);
     });
     return this.fb.array(arr);
   }

   get keysPicked() {
     return this.form.get('keyNames');
   }

  //Capital letters alone are major keys. b means flat. Lower case letters are minor.
  C = 1; G = 2; D = 3; A = 4; E = 5; B = 6; FSharp = 7; CSharp = 8; F = 9; Bb = 10; Eb = 11; Ab = 12; Db = 13;
  Gb = 14; Cb = 15; a = 16; e = 17; b = 18; fSharp = 19; cSharp = 20; gSharp = 21; dSharp = 22; aSharp = 23;
  d = 24; g = 25; c = 26; f = 27; bb = 28; eb = 29; ab = 30;
  
  errors = false;
  dataPassed = false;
  tyepKey: string = '';

  thisKey = this.keysService.getScale(this.tyepKey)
  ngOnInit() {
  }
  keys = 0;
  getRandomKey(){
    switch (this.keys) {
    case this.C:
    this.keys = 1;
    break;
    case this.C, this.G:
    this.keys = 2;
    break;
    case this.C, this.G, this.D:
    const randomKey = Math.floor(Math.random() * this.keys) + 1;
    return randomKey;
    }
  }
  

  startKeyDrill() {
    console.log(this.getRandomKey());
    switch (this.getRandomKey()) {
    case 1:
    this.keysService.getScale('C Major');
    break;
    case 2:
    this.keysService.getScale('G Major');
    break;
    case 3:
    this.keysService.getScale('D Major');
    break;
    case 4:
    this.keysService.getMinorScale('A minor');
    break;
    case 5:
    this.keysService.getMinorScale('E Minor');
    break;
    case 6:
    this.keysService.getMinorScale('B Minor');
    break;
    }    
  }

  submit(form) {
    const formValue = Object.assign({}, value, {
      keyNames: form.keyNames.map((selected, i) => {
        return {
          name: this.theKeys.keyNames[i].name,
          selected
        }
      })
    });
  }
}
