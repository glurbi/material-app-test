import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonishComponent } from './buttonish.component';

describe('ButtonishComponent', () => {
  let component: ButtonishComponent;
  let fixture: ComponentFixture<ButtonishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
