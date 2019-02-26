import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandDetailsComponent } from './cand-details.component';

describe('CandDetailsComponent', () => {
  let component: CandDetailsComponent;
  let fixture: ComponentFixture<CandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
