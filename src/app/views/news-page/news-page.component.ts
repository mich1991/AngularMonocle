import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { News } from 'src/app/models/News';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  query!: string;
  input!: HTMLInputElement;
  images!: Observable<News[]>

  constructor(private route: ActivatedRoute, private navigation : Router, private http: GoogleApiService) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')!;
    this.images = this.http.getImagesSearch(this.query)
  }

  onSubmit(form: NgForm) : void{
    this.query = form.value.search
    this.navigation.navigate(['news', this.query])
    this.images = this.http.getImagesSearch(this.query)

  }

}
