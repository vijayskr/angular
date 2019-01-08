import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {

  constructor() { }

  getAuthors() {
    return ['authors1', 'authors2', 'authors3', 'authors4'];
  }
}
