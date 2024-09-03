import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofileuserComponent } from './editprofileuser.component';

describe('EditprofileuserComponent', () => {
  let component: EditprofileuserComponent;
  let fixture: ComponentFixture<EditprofileuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofileuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditprofileuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
