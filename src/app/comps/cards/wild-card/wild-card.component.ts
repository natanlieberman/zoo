import { Component, OnInit } from '@angular/core';
import { WildService } from '../../../services/wild.service';

@Component({
  selector: 'app-wilds-card',
  templateUrl: './wild-card.component.html',
  styleUrls: ['./wild-card.component.css']
})
export class WildCardComponent implements OnInit {

  constructor(public wildsSvc:WildService) { }

  ngOnInit() {
  }

}
