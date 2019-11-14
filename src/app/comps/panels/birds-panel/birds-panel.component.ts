import { Component, OnInit } from '@angular/core';
import { BirdsService } from '../../../services/birds.service';

@Component({
  selector: 'app-birds-panel',
  templateUrl: './birds-panel.component.html',
  styleUrls: ['./birds-panel.component.css']
})
export class BirdsPanelComponent implements OnInit {
  
  constructor(public birdsSvc:BirdsService) {console.log('birdsSvc constructor'); }
  
  ngOnInit() {
  }


}
