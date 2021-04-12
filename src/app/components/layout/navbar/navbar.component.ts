import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  event: any;

  constructor(private router: Router) {

    this.event =this.router.events
          .subscribe(
            (event: Event) => {
              if(event instanceof NavigationStart) {
                if (event.url == "/home" || event.url == "/") {
                  this.removeClassToNavBar();
                } else {
                  this.addClassToNavBar();
                }
              }
            });
  }

  ngOnInit(): void {
  }

  addClassToNavBar() {
    document.getElementById('navbar').className = "w3-bar w3-padding navbar w3-large w3-indigo shadow";
  }

  removeClassToNavBar() {
    document.getElementById('navbar').className = "w3-bar w3-text-white w3-padding navbar w3-large";
  }

}
