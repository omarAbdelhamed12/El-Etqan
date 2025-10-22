import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor() { }

  // دالة لإرجاع قائمة الشركاء
  // tslint:disable-next-line:typedef
  getPartners() {
    return [
      { name: 'Partner 2', img: 'Delta.png' },
      { name: 'Partner 1', img: 'cic-١-03.png' },
      { name: 'Partner 3', img: 'Legrand.png' },
      { name: 'Partner 3', img: 'mountain.png' },
      { name: 'Partner 3', img: 'Nile Valley.png' },
      { name: 'Partner 3', img: 'PHD.png' },
      { name: 'Partner 3', img: 'shaker.png' },
      { name: 'Partner 3', img: 'sphinx.png' },
      { name: 'Partner 4', img: 'DMG.jpg' },
      { name: 'Partner 6', img: 'دار الفؤاد.png' }
    ];
  }
}
