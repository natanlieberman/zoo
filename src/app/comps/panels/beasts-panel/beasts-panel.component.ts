import { Component, OnInit } from '@angular/core';
import { BeastsService } from '../../../services/beasts.service';

@Component({
  selector: 'app-beasts-panel',
  templateUrl: './beasts-panel.component.html',
  styleUrls: ['./beasts-panel.component.css']
})
export class BeastsPanelComponent implements OnInit {

  constructor(public beastssSvc:BeastsService) { console.log('beastssSvc constructor');}

  ngOnInit() {
  }

}
