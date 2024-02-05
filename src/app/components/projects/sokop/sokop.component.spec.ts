import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SokopComponent } from './sokop.component';

describe('SokopComponent', () => {
  let component: SokopComponent;
  let fixture: ComponentFixture<SokopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SokopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SokopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
