import { Component, OnInit } from '@angular/core';
import { BeastsService } from '../../../services/beasts.service';

@Component({
  selector: 'app-beasts-card',
  templateUrl: './beast-card.component.html',
  styleUrls: ['./beast-card.component.css']
})
export class BeastCardComponent implements OnInit {

  constructor(public beastsSvc:BeastsService) { }

  ngOnInit() {
  }

}
