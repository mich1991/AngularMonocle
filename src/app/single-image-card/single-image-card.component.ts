import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../models/Image';

@Component({
  selector: 'app-single-image-card',
  templateUrl: './single-image-card.component.html',
  styleUrls: ['./single-image-card.component.scss']
})
export class SingleImageCardComponent implements OnInit {

  @Input() item!: Image

  constructor() { }

  ngOnInit(): void {
  }

}
