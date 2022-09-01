import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrProjectsComponent } from './usr-projects.component';

describe('UsrProjectsComponent', () => {
  let component: UsrProjectsComponent;
  let fixture: ComponentFixture<UsrProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
