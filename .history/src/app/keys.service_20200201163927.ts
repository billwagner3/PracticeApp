import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs";
import { allKeys } from './../../models/all-keys';
import { AllKeys } from './key-certainty-drill/all-keys.model';
import { map } from 'rxjs/operators/map';

@Injectable()
export class KeysService {
  private keys: AllKeys[] = []
  result: any
  getTheKeys = '';
  
  

  constructor(private _http: HttpClient) {}

  // keyNames() {    
  //   return this._http.get(`api/get_keys`).subscribe((keys) => {
  //     this.keys = keys;
  //     console.log('service', keys);
  //   });
  // }

  getAllKeys2() {
    this._http
      .get(`api/get_keys`)
      .pipe(map((getKeys) => {
        return getKeys.keys.map(key => {
          return {
            
            key: key.key
            
          };
        });
      }))
      .subscribe(allTheKeys => {
        this.keys = allTheKeys;
        console.log('subscribe in service', allTheKeys);
        
      });
  }

  getKeys(typeKey) {  
      typeKey = typeKey.replace('#', '%23')   
    return this._http.get(`api/keys/${typeKey}`).do(console.log)
          .map(result => _.values(result));
      }

  getAllKeys(typeKey) {
    let thisScale = '#';
    let sharpScale = new RegExp(thisScale, 'g');
    typeKey = typeKey.replace(sharpScale, '%23')
    return this._http.get(`api/all-keys/${typeKey}`).do(console.log)
    .map(result => _.values(result));
  }

  getScale(typeKey) {
    let thisScale = '#';
    let sharpScale = new RegExp(thisScale, 'g');
    typeKey = typeKey.replace(sharpScale, '%23')
    return this._http.get(`api/majorkeys/${typeKey}`).do(console.log)
    .map(result => _.values(result));
  }

  getMinorScale(typeKey) {
    let thisScale = '#';
    let sharpMinorScale = new RegExp(thisScale, 'g');
    typeKey = typeKey.replace(sharpMinorScale, '%23')
    return this._http.get(`api/minorkeys/${typeKey}`).do(console.log)
    .map(result => _.values(result));
  }

  getKeyName(typeKey) {
    let thisScale = '#';
    let sharpScale = new RegExp(thisScale, 'g');
    typeKey = typeKey.replace(sharpScale, '%23')
    return this._http.get(`api/all-keys/${typeKey}`).do(console.log)
    .map(result => _.values(result));
  }
}