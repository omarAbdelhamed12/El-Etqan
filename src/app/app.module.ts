import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// 🌐 Components
import { AppComponent } from './app.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HomeComponent } from './componants/home/home.component';
import { HeaderComponent } from './componants/header/header.component';
import { HomeAboutComponent } from './componants/home-about/home-about.component';
import { SolutionComponent } from './componants/solution/solution.component';
import { CablingNetworkingComponent } from './componants/cabling-networking/cabling-networking.component';
import { ServicesComponent } from './componants/services/services.component';
import { CamiraComponent } from './componants/camira/camira.component';
import { PartnersComponent } from './componants/partners/partners.component';

// 🌐 ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {ContactUsComponent} from './componants/contact-us/contact-us.component';
// 👈 أي مكونات تانية تضيفها هنا

// 🌍 Routes
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'service', component: ServicesComponent },
  { path: 'home-about', component: HomeAboutComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'partner', component: PartnersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'cabling_networking', component: CablingNetworkingComponent },
  { path: 'camera', component: CamiraComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } // لأي رابط غلط
];

// 🔹 function لتحميل ملفات الترجمة
// tslint:disable-next-line:typedef
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    HomeAboutComponent,
    SolutionComponent,
    CablingNetworkingComponent,
    ServicesComponent,
    CamiraComponent,
    PartnersComponent
    // 👈 أي مكونات جديدة تضيفها هنا
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // يخلي الصفحة تبدأ من الأعلى بعد كل تنقل
      onSameUrlNavigation: 'ignore',
      relativeLinkResolution: 'corrected'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
