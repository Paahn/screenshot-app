import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LorumIpsumWithImgComponent } from './lorum-ipsum-with-img.component';

describe('LorumIpsumWithImgComponent', () => {
  let component: LorumIpsumWithImgComponent;
  let fixture: ComponentFixture<LorumIpsumWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LorumIpsumWithImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LorumIpsumWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
