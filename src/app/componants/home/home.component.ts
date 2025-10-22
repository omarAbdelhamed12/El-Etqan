import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HomeService } from '../../../service/home.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('servicesRow') servicesRow!: ElementRef;
  services: any[] = [];

  currentLang: string; // 🔹 متغير اللغة

  constructor(
    private homeService: HomeService,
    private translate: TranslateService // 🔹 خدمة الترجمة
  ) {
    // ضبط اللغة الافتراضية
    this.translate.setDefaultLang('ar');
    this.currentLang = 'ar';
    this.translate.use(this.currentLang);

    // متابعة أي تغيير في اللغة
    this.translate.onLangChange.subscribe(lang => {
      this.currentLang = lang.lang;
    });
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // جلب الخدمات من HomeService
    this.services = this.homeService.getServices();
  }

  // tslint:disable-next-line:typedef
  scrollServices(direction: number) {
    const row = this.servicesRow.nativeElement;
    const cardWidth = row.querySelector('.service-card').offsetWidth + 20;
    row.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' });
  }
}
