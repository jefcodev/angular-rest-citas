import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoespecialidadComponent } from './medicoespecialidad.component';

describe('MedicoespecialidadComponent', () => {
  let component: MedicoespecialidadComponent;
  let fixture: ComponentFixture<MedicoespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoespecialidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
