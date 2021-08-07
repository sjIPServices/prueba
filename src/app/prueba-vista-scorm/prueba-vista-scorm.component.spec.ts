import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaVistaScormComponent } from './prueba-vista-scorm.component';

describe('PruebaVistaScormComponent', () => {
  let component: PruebaVistaScormComponent;
  let fixture: ComponentFixture<PruebaVistaScormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaVistaScormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaVistaScormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
