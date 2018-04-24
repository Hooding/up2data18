import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliceVisualComponent } from './slice-visual.component';

describe('SliceVisualComponent', () => {
  let component: SliceVisualComponent;
  let fixture: ComponentFixture<SliceVisualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliceVisualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliceVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
