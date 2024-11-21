import { Component } from '@angular/core';

import html2canvas from 'html2canvas';


@Component({
  selector: 'app-screenshot',
  standalone: true,
  imports: [],
  templateUrl: './screenshot.component.html',
  styleUrl: './screenshot.component.scss'
})
export class ScreenshotComponent {
  public takeScreenshot(): void {
    const element = document.getElementById('app');
    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = imgData;
        link.download = 'screenshot.png';
        link.click();
      });
    }
  }
}

