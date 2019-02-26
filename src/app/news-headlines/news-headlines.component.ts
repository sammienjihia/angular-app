import { Component, OnInit } from '@angular/core';
import { NewsHeadlinesServiceService } from '../news-headlines-service.service';

import { article } from '../articles'

@Component({
  selector: 'app-news-headlines',
  templateUrl: './news-headlines.component.html',
  styleUrls: ['./news-headlines.component.scss']
})
export class NewsHeadlinesComponent implements OnInit {

  articles: []

  constructor(private newsHeadlines: NewsHeadlinesServiceService) { }
  

  ngOnInit() {
    this.newsHeadlines.getHeadlines().subscribe(data => {
      console.log(data);
      this.articles = data.articles;
  });
    
  }

}
