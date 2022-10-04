import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  constructor(public router:Router) { }
  ngOnInit(): void {
    if(localStorage.getItem('userInfo')) {
      this.router.navigate(["dashboard"])
    } else {
      this.router.navigate([""])
    }
  }
}

