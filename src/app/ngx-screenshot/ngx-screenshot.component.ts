import { Component, ElementRef, ViewChild } from '@angular/core';

import { NgxCaptureService } from 'ngx-capture';
import { ImgComponent } from '../img/img.component';

@Component({
  selector: 'app-ngx-screenshot',
  standalone: true,
  imports: [ImgComponent],
  templateUrl: './ngx-screenshot.component.html',
  styleUrl: './ngx-screenshot.component.scss'
})
export class NgxScreenshotComponent {
  @ViewChild('screen', { static: true }) screen!: ElementRef;
  public image: string | undefined;

  public constructor(private captureService: NgxCaptureService) {}

  public saveImage() {
    this.captureService.getImage(this.screen.nativeElement, true).subscribe((img: string) => {
      const link = document.createElement('a');
      link.href = img;
      this.image = img;
      // link.download = 'screenshot.png';
      // link.click();
    });
  }
}
