import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDisplayPage } from './movie-display.page';

describe('MovieDisplayPage', () => {
  let component: MovieDisplayPage;
  let fixture: ComponentFixture<MovieDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
