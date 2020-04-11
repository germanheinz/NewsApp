import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  headlines = 0;

  constructor(private http: HttpClient) { }

  private executeQuery<t>(query: string) {
    query = apiUrl + query;
    return this.http.get<t>(query, {headers});
  }

  getHeadLines() {
    this.headlines++;
    // return this.http.get<ResponseTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29ea434ed7d54074b357c5fb940f69a1');
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&category=business&page=${this.headlines}`);
  }
  getTopHeadLinesCategories( category: string) {
    // return this.http.get<ResponseTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=29ea434ed7d54074b357c5fb940f69a1');
    return this.executeQuery<ResponseTopHeadlines>(`/top-headlines?country=us&category=${category}`);
  }
}
