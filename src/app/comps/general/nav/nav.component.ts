import { Component, OnInit } from '@angular/core';
import { PagingService } from '../../../services/paging.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public paging:PagingService) {console.log("nav com cons");
   }

  ngOnInit() {
  }
 
  navToPage(page:string):void{
    console.log(`navToPage( ${ page } )`);
      this.paging.currentPanel = page;
  }
}
