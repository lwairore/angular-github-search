import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRepositoryComponent } from './my-repository.component';

describe('MyRepositoryComponent', () => {
  let component: MyRepositoryComponent;
  let fixture: ComponentFixture<MyRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
