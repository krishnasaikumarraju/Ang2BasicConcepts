import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnfoComponent } from './contactnfo.component';

describe('ContactnfoComponent', () => {
  let component: ContactnfoComponent;
  let fixture: ComponentFixture<ContactnfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactnfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactnfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
