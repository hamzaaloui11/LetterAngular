import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdressDialoggComponent } from './add-adress-dialogg.component';

describe('AddAdressDialoggComponent', () => {
  let component: AddAdressDialoggComponent;
  let fixture: ComponentFixture<AddAdressDialoggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdressDialoggComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdressDialoggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
