import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6Lfs1RYqAAAAAAhQp0xDlwAEkud8larnJoAnkrit"></re-captcha>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
