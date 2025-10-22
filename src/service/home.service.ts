import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private translate: TranslateService) { }

  // tslint:disable-next-line:typedef
   getServices() {
    return [
      { img: 'fasfas.png', titleKey: 'SERVICES.SERVICE1', link: '/camera' },
      { img: 'camira.png', titleKey: 'SERVICES.SERVICE2', link: '/services/fingerprint' },
      { img: 'access_control.png', titleKey: 'SERVICES.SERVICE3', link: '/services/intercom' },
      { img: 'Data-Center.jpg', titleKey: 'SERVICES.SERVICE4', link: '/services/money-counter' },
      { img: 'Public address.png', titleKey: 'SERVICES.SERVICE5', link: '/services/access-control' },
      { img: 'optical.jpg', titleKey: 'SERVICES.SERVICE6', link: '/services/alarm-gates' },
      { img: 'Nurse-Call.png', titleKey: 'SERVICES.SERVICE7', link: '/services/home-alarm' },
      { img: 'Parking.png', titleKey: 'SERVICES.SERVICE8', link: '/services/safes' }
    ];
  }


}
