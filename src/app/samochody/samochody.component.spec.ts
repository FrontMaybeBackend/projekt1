import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamochodyComponent } from './samochody.component';

describe('SamochodyComponent', () => {
  let component: SamochodyComponent;
  let fixture: ComponentFixture<SamochodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamochodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamochodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
