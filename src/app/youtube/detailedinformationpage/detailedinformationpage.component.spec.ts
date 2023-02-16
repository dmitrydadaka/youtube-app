import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedinformationpageComponent } from './detailedinformationpage.component';

describe('DetailedinformationpageComponent', () => {
  let component: DetailedinformationpageComponent;
  let fixture: ComponentFixture<DetailedinformationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedinformationpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedinformationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
