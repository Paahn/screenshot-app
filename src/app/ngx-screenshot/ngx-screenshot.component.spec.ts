import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScreenshotComponent } from './ngx-screenshot.component';

describe('NgxScreenshotComponent', () => {
  let component: NgxScreenshotComponent;
  let fixture: ComponentFixture<NgxScreenshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxScreenshotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxScreenshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
