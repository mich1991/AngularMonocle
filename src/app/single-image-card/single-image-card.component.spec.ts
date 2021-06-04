import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleImageCardComponent } from './single-image-card.component';

describe('SingleImageCardComponent', () => {
  let component: SingleImageCardComponent;
  let fixture: ComponentFixture<SingleImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
