import { Component, Input, OnInit } from '@angular/core';
import { News } from '../models/News';

@Component({
  selector: 'app-single-news-card',
  templateUrl: './single-news-card.component.html',
  styleUrls: ['./single-news-card.component.scss']
})
export class SingleNewsCardComponent implements OnInit {
  @Input() news!: News 
  constructor() { }

  ngOnInit(): void {
  }

}
