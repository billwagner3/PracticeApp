import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCertaintyDrillComponent } from './key-certainty-drill.component';

describe('KeyCertaintyDrillComponent', () => {
  let component: KeyCertaintyDrillComponent;
  let fixture: ComponentFixture<KeyCertaintyDrillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCertaintyDrillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCertaintyDrillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
