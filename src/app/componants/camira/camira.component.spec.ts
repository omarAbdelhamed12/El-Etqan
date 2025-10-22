import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamiraComponent } from './camira.component';

describe('CamiraComponent', () => {
  let component: CamiraComponent;
  let fixture: ComponentFixture<CamiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
