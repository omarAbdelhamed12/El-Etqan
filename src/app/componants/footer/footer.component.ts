import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentLang = 'ar'; // اللغة الافتراضية

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    // تعيين اللغة الافتراضية عند بدء التشغيل
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();

    // الاستماع لتغير اللغة
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

}
