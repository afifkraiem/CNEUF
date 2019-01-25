/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModsComponent } from './Mods.component';

describe('ModsComponent', () => {
  let component: ModsComponent;
  let fixture: ComponentFixture<ModsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
