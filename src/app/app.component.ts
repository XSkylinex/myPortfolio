import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Alex Portfolio';

  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );
    navEndEvents.subscribe((event: NavigationEnd) => {
      gtag('config', 'G-3DGCPSJQ1R', {
        page_path: event.urlAfterRedirects,
      });
    });
  }
}
