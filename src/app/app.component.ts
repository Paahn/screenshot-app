import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoreTextComponent } from './more-text/more-text.component';
import { LorumIpsumWithImgComponent } from './lorum-ipsum-with-img/lorum-ipsum-with-img.component';
import { ScreenshotComponent } from "./screenshot/screenshot.component";
import { NgxScreenshotComponent } from "./ngx-screenshot/ngx-screenshot.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MoreTextComponent,
    LorumIpsumWithImgComponent,
    ScreenshotComponent,
    NgxScreenshotComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
