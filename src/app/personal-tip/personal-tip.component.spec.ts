import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalTipComponent } from './personal-tip.component';

describe('PersonalTipComponent', () => {
  let component: PersonalTipComponent;
  let fixture: ComponentFixture<PersonalTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
