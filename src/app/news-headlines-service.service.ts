import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { article } from './articles';

@Injectable({
  providedIn: 'root'
})
export class NewsHeadlinesServiceService {
  newsHeadlines: article;

  constructor(private http: HttpClient) { }

  headlines_url: string = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=331c4010a6da48149be5cb0a1c8b3bbb';

  getHeadlines(): Observable<any>{
    return this.http.get(this.headlines_url)
  }
}
