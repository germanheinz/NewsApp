import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  news: Article [] = [];

  constructor(private storage: Storage) { }

  saveNews(newFavourite: Article) {
    // tslint:disable-next-line: no-unused-expression
    const exist = this.news.find(newFound => newFound.title === newFavourite.title);
    if (!exist) {
      // Unshift - putting to beginning of the array
      this.news.unshift(newFavourite);
      this.storage.set('favourites', this.news);

    }
  }
  loadFavourites(){

  }

}
