import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewsCardComponent } from './single-news-card.component';

describe('SingleNewsCardComponent', () => {
  let component: SingleNewsCardComponent;
  let fixture: ComponentFixture<SingleNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNewsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
