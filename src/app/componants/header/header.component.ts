import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuOpen = false;
  currentLang = 'ar'; // اللغة الحالية

  constructor(private translate: TranslateService , private router: Router) {
    this.translate.setDefaultLang('ar');
    this.translate.use('ar');

  }

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
    const header = document.querySelector('.itqan-header');
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }

  // tslint:disable-next-line:typedef
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // tslint:disable-next-line:typedef
  closeMenu() {
    this.menuOpen = false;
  }

  // tslint:disable-next-line:typedef
  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    localStorage.setItem('lang', lang); // حفظ اللغة المختارة
  }

  // tslint:disable-next-line:typedef
  goHome(event: Event) {
    event.preventDefault(); // يمنع reload الصفحة
    this.closeMenu();
    if (this.router.url !== '/home') {
      this.router.navigate(['/home']);
    }
  }

}
