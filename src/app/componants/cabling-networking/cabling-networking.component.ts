import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cabling-networking',
  templateUrl: './cabling-networking.component.html',
  styleUrls: ['./cabling-networking.component.css']
})
export class CablingNetworkingComponent implements OnInit {

  currentLang = 'ar';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'ar';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

}
