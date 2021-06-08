import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/News';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-news-page-results',
  templateUrl: './news-page-results.component.html',
  styleUrls: ['./news-page-results.component.scss']
})
export class NewsPageResultsComponent implements OnInit {
  query!: string;
  input!: HTMLInputElement;
  newsList!: Observable<News[]>

  constructor(private route: ActivatedRoute, private navigation : Router, private http: GoogleApiService) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')!;
    this.newsList = this.http.getNewsSearch(this.query)
    // this.newsList.subscribe()
  }

  onSubmit(form: NgForm) : void{
    this.query = form.value.search
    this.navigation.navigate(['news', this.query])
    this.newsList = this.http.getNewsSearch(this.query)

  }
}
