import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteformComponent } from './estudianteform.component';

describe('EstudianteformComponent', () => {
  let component: EstudianteformComponent;
  let fixture: ComponentFixture<EstudianteformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
