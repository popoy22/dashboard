import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphByEnviromentComponent } from './graph-by-enviroment.component';

describe('GraphByEnviromentComponent', () => {
  let component: GraphByEnviromentComponent;
  let fixture: ComponentFixture<GraphByEnviromentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphByEnviromentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphByEnviromentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
