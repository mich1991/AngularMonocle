import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  searchValue : string = ''
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) : void{
    this.searchValue = form.value.search
    this.route.navigate(['news', this.searchValue])
  }


}
