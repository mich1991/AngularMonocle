import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesResultPageComponent } from './images-result-page.component';

describe('ImagesResultPageComponent', () => {
  let component: ImagesResultPageComponent;
  let fixture: ComponentFixture<ImagesResultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesResultPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
