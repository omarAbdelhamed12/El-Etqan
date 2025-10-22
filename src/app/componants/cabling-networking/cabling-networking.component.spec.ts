import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablingNetworkingComponent } from './cabling-networking.component';

describe('CablingNetworkingComponent', () => {
  let component: CablingNetworkingComponent;
  let fixture: ComponentFixture<CablingNetworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CablingNetworkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CablingNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
