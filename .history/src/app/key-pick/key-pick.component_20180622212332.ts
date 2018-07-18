import { Component, OnInit } from '@angular/core';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss']
})
export class KeyPickComponent implements OnInit {
  

  constructor(private keysService: KeysService) { }

  C = 1;
  G = 2;
  D = 3;
  a = 4;
  e = 5;
  b = 6;
  
  tyepKey: string = '';

  thisKey = this.keysService.getScale(this.tyepKey)
  ngOnInit() {
  }

  getRandomKey(){
    const keys = 6;
    
    const randomKey = Math.floor(Math.random() * keys) + 1;
    return randomKey;
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
}
