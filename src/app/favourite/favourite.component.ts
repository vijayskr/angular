import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isClicked: false;
  
  constructor() { }

  ngOnInit() {
  }

  onClicked() {
    if(this.isClicked) {
        
    }
  }

}
