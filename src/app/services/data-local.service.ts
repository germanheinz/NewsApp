import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService implements OnInit {

  news: Article [] = [];

  constructor(private storage: Storage) { }

  ngOnInit(): void {
    this.loadFavourites();
  }

  saveNews(newFavourite: Article) {
    // tslint:disable-next-line: no-unused-expression
    const exist = this.news.find(newFound => newFound.title === newFavourite.title);
    if (!exist) {
      // Unshift - putting to beginning of the array
      this.news.unshift(newFavourite);
      this.storage.set('favourites', this.news);

    }
  }
  // I need the favourites news loaded before begins the rest, that's why async
  async loadFavourites() {
    const favourites = await this.storage.get('favourites');
    if (favourites) {
      this.news = favourites;
    }
  }
  deleteNew(newToDelete: Article) {
  this.news = this.news.filter(resp => resp.title !== newToDelete.title);
  this.storage.set('favourites', this.news);

  }

}
