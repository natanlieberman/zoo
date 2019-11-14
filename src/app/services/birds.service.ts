import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  constructor() {console.log('ctor BirdsService', this);
   }

   birds = [
     {name:'White-tailed patch',size:'71–80 cm',lifeSpan:'20 years',habitat:'Found above the oceans in the tropics',img:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Phaethon_lepturus%2C_Seychelles.jpg'},
     {name:'rainbow lorikeet',size:'25–30 cm',lifeSpan:'20 years',habitat:'Australia',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rainbow_lorikeet.jpg/800px-Rainbow_lorikeet.jpg'},
     {name:' Ramphastos sulfuratus',size:'42-55 cm',lifeSpan:'50 years',habitat:'Tropical, subtropical rainforest and lowland forests',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ramphastos_sulfuratus_Flickr.jpg/800px-Ramphastos_sulfuratus_Flickr.jpg'},
     {name:' Columba Livia',size:'30–35 cm',lifeSpan:'5 years',habitat:'Lives in cities',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG/800px-Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG'}
   ]

   currentBirdIndex = 0;
   currentBird = this.birds[this.currentBirdIndex]
}

