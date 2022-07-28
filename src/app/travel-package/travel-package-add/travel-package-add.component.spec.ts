import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPackageAddComponent } from './travel-package-add.component';

describe('TravelPackageAddComponent', () => {
  let component: TravelPackageAddComponent;
  let fixture: ComponentFixture<TravelPackageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPackageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
