import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreinfoPage } from './moreinfo.page';

describe('MoreinfoPage', () => {
  let component: MoreinfoPage;
  let fixture: ComponentFixture<MoreinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
