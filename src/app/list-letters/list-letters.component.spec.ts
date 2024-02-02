import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLettersComponent } from './list-letters.component';

describe('ListLettersComponent', () => {
  let component: ListLettersComponent;
  let fixture: ComponentFixture<ListLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLettersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
