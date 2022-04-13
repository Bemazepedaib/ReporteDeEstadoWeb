import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tabladatosComponent } from './tabladatos.component';

describe('tabladatosComponent', () => {
  let component: tabladatosComponent;
  let fixture: ComponentFixture<tabladatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tabladatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(tabladatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
