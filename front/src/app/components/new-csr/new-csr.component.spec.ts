import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCsrComponent } from './new-csr.component';

describe('NewCsrComponent', () => {
  let component: NewCsrComponent;
  let fixture: ComponentFixture<NewCsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
