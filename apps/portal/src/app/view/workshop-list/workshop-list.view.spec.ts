import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopListView } from './workshop-list.view';

describe('WorkshopListView', () => {
  let component: WorkshopListView;
  let fixture: ComponentFixture<WorkshopListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopListView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
