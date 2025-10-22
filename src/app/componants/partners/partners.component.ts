import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PartnersService } from '../../../service/partners.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  @ViewChild('partnersRow') partnersRow!: ElementRef;
  partners: any[] = [];

  currentLang = 'ar'; // ← أضف هذا

  constructor(
    private partnersService: PartnersService,
    private translate: TranslateService // ← أضف هذا
  ) {}

  ngOnInit(): void {
    this.partners = this.partnersService.getPartners();

    // تعيين اللغة الحالية
    this.currentLang = this.translate.currentLang || 'ar';

    // الاستماع لتغيير اللغة
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  // tslint:disable-next-line:typedef
  scrollPartners(direction: number) {
    const row = this.partnersRow.nativeElement;
    const cardWidth = row.querySelector('.partner-card').offsetWidth;
    row.scrollBy({ left: direction * cardWidth * 2, behavior: 'smooth' });
  }
}
