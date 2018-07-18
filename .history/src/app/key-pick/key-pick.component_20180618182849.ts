import { Component, OnInit } from '@angular/core';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss']
})
export class KeyPickComponent implements OnInit {

  constructor() { }

  cMajor = 1;
  gMajor = 2;
  dMajor = 3;
  aMinor = 4;
  eMinor = 5;
  bMinor = 6;
  keys: 6;

  ngOnInit() {
  }

  startKeyDrill(randomKey) {
    const randomKey = Math.floor(Math.random() * this.keys) + 1;
    return randomKey;
  }
  if (this.randomKey == 1) {
    
  }

}
