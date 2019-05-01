import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCsrComponent } from './list-csr.component';

describe('ListCsrComponent', () => {
  let component: ListCsrComponent;
  let fixture: ComponentFixture<ListCsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
