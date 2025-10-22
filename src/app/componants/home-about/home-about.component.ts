import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.css']
})
export class HomeAboutComponent implements OnInit {

  currentLang: string = 'ar';
  panels: boolean[] = [false, false, false];

  features = [
    {
      icon: 'fas fa-users',
      title_ar: 'خبرات كبيرة',
      title_en: 'Extensive Experience',
      desc_ar: 'فنيون معتمدون بخبرة لا تقل عن 15 عامًا في هذا المجال.',
      desc_en: 'Certified technicians with over 15 years of experience in the field'
    },
    {
      icon: 'fas fa-shield-alt',
      title_ar: 'ضمان حقيقي',
      title_en: 'Real Guarantee',
      desc_ar: 'شراكات مع علامات تجارية عالمية مرموقة (مثل: بايرونيكس، فينجرتيك، سي إن بي).',
      desc_en: 'Partnerships with world-class brands like Byronics, FingerTec, and CNP'
    },
    {
      icon: 'fas fa-cogs',
      title_ar: 'نهج مُصمم خصيصًا',
      title_en: 'Customized Approach',
      desc_ar: 'تصميمات مُخصصة لتلبية متطلبات العميل الفريدة.',
      desc_en: 'Tailored designs to meet each client’s unique requirements'
    },
    {
      icon: 'fas fa-hands-helping',
      title_ar: 'دعم شامل',
      title_en: 'Comprehensive Support',
      desc_ar: 'من الاستشارة إلى الصيانة، نحن معك في كل خطوة.',
      desc_en: 'From consultation to maintenance, we’re with you every step of the way'
    },
    {
      icon: 'fas fa-user-shield',
      title_ar: 'دعم ما بعد البيع',
      title_en: 'After-Sales Support',
      desc_ar: 'نقدم دعمًا مستمرًا بعد إتمام المشروع لضمان الأداء الأمثل للنظام ورضا العميل.',
      desc_en: 'We offer ongoing support to ensure optimal performance and customer satisfaction'
    }
  ];

  visionPanels = [
    {
      title_ar: 'الرؤية',
      title_en: 'Vision',
      text_ar: 'أن نكون الشريك الموثوق به والمفضل لحلول التكنولوجيا الذكية...',
      text_en: 'To be the trusted and preferred partner for smart technology solutions'
    },
    {
      title_ar: 'الرسالة',
      title_en: 'Mission',
      text_ar: 'نُمكّن الشركات وعملاءنا من أنظمة تيار منخفض موثوقة ومتطورة...',
      text_en: 'We empower companies and clients with reliable and advanced low-current systems'
    },
    {
      title_ar: 'استراتيجيتنا',
      title_en: 'Our Strategy',
      text_ar: 'نهدف إلى تقديم خدماتنا بأعلى مستوى من الإتقان...',
      text_en: 'We aim to deliver our services with the highest level of excellence'
    }
  ];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }

  togglePanel(index: number): void {
    this.panels[index] = !this.panels[index];
  }

}
