import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-images-result-page',
  templateUrl: './images-result-page.component.html',
  styleUrls: ['./images-result-page.component.scss']
})
export class ImagesResultPageComponent implements OnInit {

  query: string = ''
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')!;
    console.log(this.query)
  }

}
