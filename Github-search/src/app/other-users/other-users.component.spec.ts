import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersComponent } from './other-users.component';

describe('OtherUsersComponent', () => {
  let component: OtherUsersComponent;
  let fixture: ComponentFixture<OtherUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
