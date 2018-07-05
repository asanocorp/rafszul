import { Component } from '@angular/core';

@Component({
  selector: 'rafszul-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rafszul';

  links = [
    '/home',
    '/about',
    '/work',
    '/contact'
  ];

  // activeLink = this.links[0];

}
