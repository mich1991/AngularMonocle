import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-news-page-results',
  templateUrl: './news-page-results.component.html',
  styleUrls: ['./news-page-results.component.scss']
})
export class NewsPageResultsComponent implements OnInit {
  query!:string ;
  newsList!: Observable<News[]>

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){

  }

}
