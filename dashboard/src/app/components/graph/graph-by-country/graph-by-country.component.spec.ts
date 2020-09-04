import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphByCountryComponent } from './graph-by-country.component';

describe('GraphByCountryComponent', () => {
  let component: GraphByCountryComponent;
  let fixture: ComponentFixture<GraphByCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphByCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
