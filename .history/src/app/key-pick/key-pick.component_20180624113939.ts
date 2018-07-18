import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, FormControl, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss']
})
export class KeyPickComponent implements OnInit {
  form: FormGroup;
  

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

  constructor(private keysService: KeysService, private fb: FormBuilder) {
const controls = this.keyNames.map(c => new FormControl(false));
controls[0].setValue(true);

    this.form = this.fb.group({
      keyNames: new FormArray(controls)
    });
   }

  //  buildKeyNames() {
  //    const arr = this.keyNames.map(keyName => {
  //     return this.fb.control(this.keyNames);
  //    });
  //    return this.fb.array(arr);
  //  }

  //  get keysPicked() {
  //    return this.form.get('keyNames');
  //  }

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
  keys = 6;
  getRandomKey(){
    switch (this.keys) {
    case this.C:
    this.keys = this.C;
    break;
    case this.C, this.G:
    this.keys = 2;
    break;
    case this.C, this.G, this.D:
    const randomKey = Math.floor(Math.random() * this.keys) + 1;
    return randomKey;
    }
  }
  

  startKeyDrill(tyepKey) {
    console.log(tyepKey);
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

  submit() {
    let keyNames = [];
    const keysPicked = this.form.value.keyNames
    .map((v, i) => v ? this.keyNames[i].name : null)
    .filter(v => v !== null);
    console.log(keysPicked);
  }

  // submit(form) {
  //   const formValue = Object.assign({}, form.value, {
  //     keyNames: form.keyNames.map((selected, i) => {
  //       return {
  //         name: this.theKeys.keyNames[i].name
          
  //       }
  //     })
  //   });
  // }
}
