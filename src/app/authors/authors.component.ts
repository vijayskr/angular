import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(authorserv: AuthorserviceService) {
    this.authors = authorserv.getAuthors();
  }

  authors;

  ngOnInit() {
  }

}
