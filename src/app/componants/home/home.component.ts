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

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // جلب الخدمات من HomeService
    this.services = this.homeService.getServices();
    this.currentLang = this.translate.currentLang || 'ar';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  // tslint:disable-next-line:typedef
  scrollServices(direction: number) {
    const row = this.servicesRow.nativeElement;
    const cardWidth = row.querySelector('.service-card').offsetWidth + 20;
    row.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' });
  }
}
