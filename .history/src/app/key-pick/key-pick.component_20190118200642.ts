import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators/map';
import { NgsRevealModule } from 'scrollreveal';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss'],
})
export class KeyPickComponent implements OnInit {
  form: FormGroup;
  title = 'The Scale Certainty Application';
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

  errors = false;
  dataPassed = false;
  tyepKey: string = '';
  currentKey = '';

  // thisKey = this.keysService.getScale(this.tyepKey)
  ngOnInit() {
  }

  getRandomKey(){
    let keyNumber = this.keysToDrill().length;
    console.log(keyNumber);
    const randomKey = Math.floor(Math.random() * keyNumber);
    /** below is what is needed to query the db, then it needs to be connected to another button to 
     *  trigger the next drill.
    **/
    // console.log(this.keyNames[randomKey].name);
    console.log(randomKey);
    let currentKey = this.keyNames[randomKey].name;
    return currentKey;
    }
  
 
  keysToDrill() {
    const onesChecked = this.form.value.keyNames
    .map((v, i) => v ? this.keyNames[i].name : null)
    .filter(v => v !== null);
    // this.router.navigate(['../key-certainty-drill/key-certainty-drill.component.html'])
    return onesChecked;
  }
 
  test: string = '';
  rightSpelling: string = '';
  
  submit() {
    let keysPicked = this.form.value.keyNames
    .map((v, i) => v ? this.keyNames[i].name : null)
    .filter(v => v != null);    
    let firstKey = keysPicked.length;
    console.log(firstKey);
    let randomKey = Math.floor(Math.random() * firstKey);
    let drillKey = keysPicked[randomKey];    
    console.log(keysPicked, drillKey); 
    document.getElementById("drillKey").innerHTML = drillKey;
    return drillKey;   
  }

  checkKeyPick(tyepKey){
  let check = this.keysService.getAllKeys(tyepKey)
  .subscribe(rightSpelling => {
    this.rightSpelling = rightSpelling;
  })
  
  }
  checkAnswer(check) {
    if (this.checkKeyPick(this.tyepKey)) 
      {
      console.log(check);
      alert('You are correct!');
      const audio = new Audio('ding.wav');
      audio.play();
    }
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
  // scrollDown() {
  //   ScrollReveal().reveal('body');
  // }
}
