import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  event: any;

  constructor(private router: Router, public translate:TranslateService) {

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
    let lang: any = localStorage.getItem('lang');
    this.translate.use(lang);
  }

  addClassToNavBar() {
    let navbar: any = document.getElementById('navbar');
    navbar.className = "w3-bar w3-padding navbar w3-large w3-indigo shadow";
  }

  removeClassToNavBar() {
    let navbar: any = document.getElementById('navbar');
    navbar.className = "w3-bar w3-text-white w3-padding navbar w3-large";
  }

  setTrans(lang: string) {
    let langSheet: any = document.getElementById('langSheet');
    if (lang == 'ar') {
      langSheet.href = "assets/css/ar.css";
    } else {
      langSheet.href = "";
    }

    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
