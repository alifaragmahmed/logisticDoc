import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const self = this;

    document.onscroll = function(e){
      if (window.location.pathname == '/home' || window.location.pathname == '/') {
        if (window.scrollY > 5) {
          self.addClassToNavBar();
        } else {
          self.removeClassToNavBar();
        }
      }
    };
  }


  addClassToNavBar() { 
    let navbar: any = document.getElementById('navbar');
    navbar.className = 'w3-bar w3-padding navbar w3-large w3-indigo shadow';
  }
  
  removeClassToNavBar() {
    let navbar: any = document.getElementById('navbar');
    navbar.className = 'w3-bar w3-text-white w3-padding navbar w3-large';
  }

}
