import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPickComponent } from './key-pick.component';

describe('KeyPickComponent', () => {
  let component: KeyPickComponent;
  let fixture: ComponentFixture<KeyPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
