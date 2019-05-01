import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCertComponent } from './details-cert.component';

describe('DetailsCertComponent', () => {
  let component: DetailsCertComponent;
  let fixture: ComponentFixture<DetailsCertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
