import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'logisticUfsDoc';
  constructor(public translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
         this.translate.use('en');
    }
}
