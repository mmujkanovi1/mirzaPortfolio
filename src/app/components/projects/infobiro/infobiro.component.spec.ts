import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobiroComponent } from './infobiro.component';

describe('InfobiroComponent', () => {
  let component: InfobiroComponent;
  let fixture: ComponentFixture<InfobiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
