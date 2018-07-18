import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators/map';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss']
})
export class KeyPickComponent implements OnInit {
  form: FormGroup;
  

  keyNames = [
    { id: '1', name: 'C Major'}, { id: '2', name: 'G Major'}, { id: '3', name: 'D Major'},
    { id: '4', name: 'A Major'}, { id: '5', name: 'E Major'}, { id: '6', name: 'B Major'},
    { id: '7', name: 'F# Major'}, { id: '8', name: 'C# Major'}, { id: '9', name: 'F Major'},
    { id: '10', name: 'Bb Major'}, { id: '11', name: 'Eb Major'}, { id: '12', name: 'Ab Major'},
    { id: '13', name: 'Db Major'}, { id: '14', name: 'Gb Major'}, { id: '15', name: 'Cb Major'},
    { id: '16', name: 'A Minor'}, { id: '17', name: 'E Minor'}, { id: '18', name: 'B Minor'},
    { id: '19', name: 'F# Minor'}, { id: '20', name: 'C# Minor'}, { id: '21', name: 'G# Minor'},
    { id: '22', name: 'D# Minor'}, { id: '23', name: 'A# Minor'}, { id: '24', name: 'D Minor'},
    { id: '25', name: 'G Minor'}, { id: '26', name: 'C Minor'}, { id: '27', name: 'F Minor'},
    { id: '28', name: 'Bb Minor'}, { id: '29', name: 'Eb Minor'}, { id: '30', name: 'Ab Minor'}
  ]

  

  constructor(private keysService: KeysService, private fb: FormBuilder, private router: Router) {
    const controls = this.keyNames.map(c => new FormControl(false));
    controls[0].setValue(true);

    this.form = this.fb.group({
      keyNames: new FormArray(controls, this.minSelectedCheckboxes(1))
    });
   }

   buildKeyNames() {
     const arr = this.keyNames.map(keyName => {
      return this.fb.control(this.keyNames);
     });
     return this.fb.array(arr);
   }

  //Capital letters alone are major keys. b means flat. Lower case letters are minor.
  C = 1; G = 2; D = 3; A = 4; E = 5; B = 6; FSharp = 7; CSharp = 8; F = 9; Bb = 10; Eb = 11; Ab = 12; Db = 13;
  Gb = 14; Cb = 15; a = 16; e = 17; b = 18; fSharp = 19; cSharp = 20; gSharp = 21; dSharp = 22; aSharp = 23;
  d = 24; g = 25; c = 26; f = 27; bb = 28; eb = 29; ab = 30;
  
  errors = false;
  dataPassed = false;
  tyepKey: string = '';

  // thisKey = this.keysService.getScale(this.tyepKey)
  ngOnInit() {
  }
  
  keys = 6;
  getRandomKey(){
    let keyNumber = this.keysToDrill.length;
    console.log(keyNumber);
    const randomKey = Math.floor(Math.random() * keyNumber) + 1;
    return randomKey;
    }
  
  

  // startKeyDrill(tyepKey) {
  //   console.log(tyepKey);
  //   switch (this.getRandomKey()) {
  //   case 1:
  //   this.keysService.getScale('C Major');
  //   break;
  //   case 2:
  //   this.keysService.getScale('G Major');
  //   break;
  //   case 3:
  //   this.keysService.getScale('D Major');
  //   break;
  //   case 4:
  //   this.keysService.getMinorScale('A minor');
  //   break;
  //   case 5:
  //   this.keysService.getMinorScale('E Minor');
  //   break;
  //   case 6:
  //   this.keysService.getMinorScale('B Minor');
  //   break;
  //   }    
  // }

  keysToDrill() {
    const onesChecked = this.form.value.keyNames
    .map((v, i) => v ? this.keyNames[i].name : null)
    .filter(v => v !== null);
    // this.router.navigate(['../key-certainty-drill/key-certainty-drill.component.html'])
    return onesChecked;
  }
  submit() {
    const keysPicked = this.form.value.keyNames
    .map((v, i) => v ? this.keyNames[i].name : null)
    .filter(v => v !== null);
    console.log(keysPicked);    
  }
  
  minSelectedCheckboxes(min = 1) {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => next ? prev + next : prev, 0);
  
      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };
  
    return validator;
  }

  gotoDrill() {
    this.router.navigate(['../key-certainty-drill/key-certainty-drill.component.html'])
  }
}
