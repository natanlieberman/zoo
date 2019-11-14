import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WildService {

  constructor() { }
  wilds = [
    {name:'Tiger',size:' 2.2 m',lifeSpan:'16–18 years',habitat:'Africa',img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.dailymail.co.uk%2F1s%2F2019%2F10%2F29%2F14%2F20320992-7625529-Cara_a_five_year_old_125lb_Bengal_tiger_has_been_fitted_with_a_g-a-8_1572358357911.jpg&imgrefurl=https%3A%2F%2Fwww.dailymail.co.uk%2Fnews%2Farticle-7625529%2FTiger-fitted-golden-fang-German-rescue-centre-cracking-hers.html&docid=b7yWJT-onGBbUM&tbnid=tS8oy4Qcppq-YM%3A&vet=10ahUKEwiR8uuB4-TlAhWjnVwKHWa9CYEQMwiHASgNMA0..i&w=962&h=642&itg=1&bih=932&biw=1110&q=tiger&ved=0ahUKEwiR8uuB4-TlAhWjnVwKHWa9CYEQMwiHASgNMA0&iact=mrc&uact=8'},
    {name:'Elephant',size:'4.4 m',lifeSpan:'70 years',habitat:'Africa',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Loxodonta_africana_%28Serengeti%2C_2009%29.jpg/1280px-Loxodonta_africana_%28Serengeti%2C_2009%29.jpg'},
    {name:'cheetah',size:'2 m',lifeSpan:'50 years',habitat:'Africa',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/1M2A5923_%2832104186088%29.jpg/1280px-1M2A5923_%2832104186088%29.jpg'},
    {name:'bear',size:'5 m',lifeSpan:'40',habitat:'Alaska',img:'https://img.mako.co.il/2013/08/20/afasffasfzzxc6_g.jpg'}
  ]
  currentWildsIndex = 0;
   currentWilds = this.wilds[this.currentWildsIndex];
}
