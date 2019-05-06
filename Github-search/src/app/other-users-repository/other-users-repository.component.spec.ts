import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUsersRepositoryComponent } from './other-users-repository.component';

describe('OtherUsersRepositoryComponent', () => {
  let component: OtherUsersRepositoryComponent;
  let fixture: ComponentFixture<OtherUsersRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUsersRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUsersRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
