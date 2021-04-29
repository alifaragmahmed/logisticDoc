import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.scss']
})
export class SideBarMenuComponent implements OnInit {

  doc: any = document;

  constructor() { }

  ngOnInit(): void {
  }

  loadPdf(url) {
    let frame: any = document.getElementById('frame');
    frame.src = "https://docs.google.com/viewerng/viewer?url=/assets/pdf/" + url;
  }

}
