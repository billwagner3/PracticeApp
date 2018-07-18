import { Component, OnInit } from '@angular/core';

import { KeysService } from '../keys.service';

@Component({
  selector: 'app-key-pick',
  templateUrl: './key-pick.component.html',
  styleUrls: ['./key-pick.component.scss']
})
export class KeyPickComponent implements OnInit {

  constructor() { }

  C = 1;
  G = 2;
  D = 3;
  a = 4;
  e = 5;
  b = 6;
  keys: 6;
  thisKey = this.KeysService.getScale()
  ngOnInit() {
  }

  startKeyDrill(randomKey) {
    const randomKey = Math.floor(Math.random() * this.keys) + 1;
    switch (randomKey) {
    case randomKey == 1;
    this.KeysService.getScale('C Major');
    break;
    case 
    }
  }
}
