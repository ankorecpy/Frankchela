/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SitecardComponent } from './sitecard.component';

describe('SitecardComponent', () => {
  let component: SitecardComponent;
  let fixture: ComponentFixture<SitecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
