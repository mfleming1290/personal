import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaCatComponent } from './ninja-cat.component';

describe('NinjaCatComponent', () => {
  let component: NinjaCatComponent;
  let fixture: ComponentFixture<NinjaCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
