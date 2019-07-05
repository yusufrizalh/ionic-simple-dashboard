import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebasePagePage } from './firebase-page.page';

describe('FirebasePagePage', () => {
  let component: FirebasePagePage;
  let fixture: ComponentFixture<FirebasePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebasePagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebasePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
