import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';

  isLoading: boolean;

  constructor(private route:Router){
    this.watchRouteEvents();
  }

  watchRouteEvents(){
    this.route.events.pipe(
      filter( e => e instanceof NavigationStart || e instanceof NavigationEnd),
      map(e => e instanceof NavigationStart)
    )
    .subscribe(
      isLoading => this.isLoading = isLoading
    );
  }
}
