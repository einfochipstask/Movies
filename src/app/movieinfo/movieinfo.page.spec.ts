import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieinfoPage } from './movieinfo.page';

describe('MovieinfoPage', () => {
  let component: MovieinfoPage;
  let fixture: ComponentFixture<MovieinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
