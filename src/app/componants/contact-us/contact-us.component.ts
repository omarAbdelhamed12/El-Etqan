// src/app/contact-us/contact-us.component.ts
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  currentLang = 'ar';
  // بيانات الفورم
  formData = {
    first_name: '',
    last_name: '',
    country_code: '+20',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  loading = false;
  successMessage = '';
  errorMessage = '';
  constructor(private translate: TranslateService) {}
  // tslint:disable-next-line:typedef
  sendEmail() {
    if (this.loading) { return; }
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    const templateParams = {
      from_name: `${this.formData.first_name} ${this.formData.last_name}`,
      from_email: this.formData.email,
      from_phone: `${this.formData.country_code} ${this.formData.phone}`,
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'omar_4.5@icloud.com' // غيره لو حابب
    };

    emailjs.send(
      'service_q1xl4qu',     // استبدلها بـ Service ID الخاص بك
      'template_3ewdhzc',    // استبدلها بـ Template ID الخاص بك
      templateParams,
      '3pykgbcb86V20AMqd'    // استبدلها بالمفتاح العام (Public Key)
    ).then(
      (result: EmailJSResponseStatus) => {
        this.loading = false;
        this.successMessage = '✅✅';
        // تفريغ الحقول (اختياري)
        this.formData = { first_name: '', last_name: '', country_code: '+20', phone: '', email: '', subject: '', message: '' };
      },
      (error) => {
        this.loading = false;
        this.errorMessage = '❌';
        console.error('EmailJS error:', error);
      }
    );
  }
  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || 'ar';
    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });
  }
}
