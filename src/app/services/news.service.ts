import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getHeadLines() {
    return this.http.get<ResponseTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29ea434ed7d54074b357c5fb940f69a1');
  }
}
