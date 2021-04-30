import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebarmenu',
  templateUrl: './sidebarmenu.component.html',
  styleUrls: ['./sidebarmenu.component.scss']
})
export class SideBarMenuComponent implements OnInit {

  doc: any = document;

  constructor(public translate:TranslateService) { }

  ngOnInit(): void {
  }

  loadPdf(file:any) {
    file = this.translate.currentLang == 'ar'? file + '_ar' : file;

    let frame: any = document.getElementById('frame');
    frame.src = "https://docs.google.com/viewerng/viewer?url=/assets/pdf/" + file + ".pdf";
  }

}
