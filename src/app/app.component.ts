import { Component } from '@angular/core';
import { PagingService } from './services/paging.service';
import { BirdsService } from './services/birds.service';
import { BeastsService } from './services/beasts.service';
import { WildService } from './services/wild.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoo';

  constructor(public paging: PagingService, public birds: BirdsService,
    public beasts: BeastsService, public wilds: WildService) { }

  getUp(ev) {
    console.log('AppComponent  getUp', ev);
      
    switch (this.paging.currentPanel) {
      case 'birds':
        let newBirdIndex = this.getNewCurrentIndex(
          this.birds.currentBirdIndex, ev, this.birds.birds);
        this.birds.currentBirdIndex = newBirdIndex;
        this.birds.currentBird = this.birds.birds[newBirdIndex];
        break;

      case 'beasts':
        let newBeastsIndex = this.getNewCurrentIndex(
          this.beasts.currentBeastsIndex, ev, this.beasts.beasts)
        this.beasts.currentBeastsIndex = newBeastsIndex;
        this.beasts.currentBeasts = this.beasts.beasts[newBeastsIndex];
        break

      case 'wilds':
        let newWildsIndex = this.getNewCurrentIndex(
          this.wilds.currentWildsIndex, ev, this.wilds.wilds)
        this.wilds.currentWildsIndex = newWildsIndex;
        this.wilds.currentWilds = this.wilds.wilds[newWildsIndex];
        break


    }

  }

  private getNewCurrentIndex(current: number, delta: number, array: {}[]): number {
    let max = array.length - 1;
    let newIndex = current + delta;
    if (newIndex > max) {
      newIndex = 0;
    }
    if (newIndex < 0) {
      newIndex = max;
    }

    return newIndex
  }

}
