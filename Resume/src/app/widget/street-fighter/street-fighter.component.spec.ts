import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetFighterComponent } from './street-fighter.component';

describe('StreetFighterComponent', () => {
  let component: StreetFighterComponent;
  let fixture: ComponentFixture<StreetFighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetFighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetFighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
