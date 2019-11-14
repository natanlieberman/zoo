import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeastsService {

  constructor() { }
  beasts = [
    {name:'Belgian Blue Cow',size:'3 m',lifeSpan:'30 years',habitat:'Belgian',img:'https://usercontent1.hubstatic.com/9121182_f520.jpg'},
    {name:'Lamb',size:'1.5 m',lifeSpan:'40 years',habitat:'Any place',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Graue_geh%C3%B6rnte_Heidschnucke_qtl1.jpg/1280px-Graue_geh%C3%B6rnte_Heidschnucke_qtl1.jpg'},
    {name:'goat',size:'1.5 m',lifeSpan:'30 years',habitat:'Any place',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Bouc_commun_proven%C3%A7al.JPG/1280px-Bouc_commun_proven%C3%A7al.JPG'},
    {name:'Wildebeest',size:'2 m',lifeSpan:'20 years',habitat:'Africa',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Kruger%C5%AFv_park%2C_Jihoafrick%C3%A1_republika_-_panoramio_%281%29.jpg/1280px-Kruger%C5%AFv_park%2C_Jihoafrick%C3%A1_republika_-_panoramio_%281%29.jpg'}
  ]
  currentBeastsIndex = 0;
   currentBeasts = this.beasts[this.currentBeastsIndex];
}
