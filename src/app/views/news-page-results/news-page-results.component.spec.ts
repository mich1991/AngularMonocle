import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageResultsComponent } from './news-page-results.component';

describe('NewsPageResultsComponent', () => {
  let component: NewsPageResultsComponent;
  let fixture: ComponentFixture<NewsPageResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPageResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
