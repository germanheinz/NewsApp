import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService implements OnInit {

  news: Article [] = [];

  constructor(private storage: Storage, private toastController: ToastController) { }

  ngOnInit(): void {
    this.loadFavourites();
  }

  saveNews(newFavourite: Article) {
    const exist = this.news.find(newFound => newFound.title === newFavourite.title);
    if (!exist) {
      // Unshift - putting to beginning of the array
      this.news.unshift(newFavourite);
      this.storage.set('favourites', this.news);
      this.savedToast();
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
    this.deleteToast();
  }
  async savedToast() {
    const toast = await this.toastController.create({
      message: `The new was saved, you'll find in Favourites`,
      duration: 2000
    });
    toast.present();
  }
  async deleteToast() {
    const toast = await this.toastController.create({
      message: `The new was deleted`,
      duration: 2000
    });
    toast.present();
  }

}
