import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoletaComponent } from './check-boleta.component';

describe('CheckBoletaComponent', () => {
  let component: CheckBoletaComponent;
  let fixture: ComponentFixture<CheckBoletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBoletaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
