import { Component, OnInit } from '@angular/core';
import { BirdsService } from '../../../services/birds.service';

@Component({
  selector: 'app-bird-card',
  templateUrl: './bird-card.component.html',
  styleUrls: ['./bird-card.component.css']
})
export class BirdCardComponent implements OnInit {

  constructor(public birdsSvc:BirdsService) { }

  ngOnInit() {
  }

}
