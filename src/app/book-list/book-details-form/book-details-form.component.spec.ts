import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsFormComponent } from './book-details-form.component';

describe('BookDetailsFormComponent', () => {
  let component: BookDetailsFormComponent;
  let fixture: ComponentFixture<BookDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
