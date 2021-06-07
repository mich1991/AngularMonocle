import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/Image';
import { DataOutputService } from 'src/app/services/data-output.service';
import { GoogleApiService } from 'src/app/services/google-api.service';

@Component({
  selector: 'app-images-result-page',
  templateUrl: './images-result-page.component.html',
  styleUrls: ['./images-result-page.component.scss']
})
export class ImagesResultPageComponent implements OnInit {

  query!: string;
  input!: HTMLInputElement;
  images: Image[] = []

  constructor(private route: ActivatedRoute, private navigation : Router, private http: GoogleApiService, private database: DataOutputService) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')!;
    this.http.getImagesSearch(this.query)
    this.images = this.database.images
  }

  onSubmit(form: NgForm) : void{
    this.query = form.value.search
    this.navigation.navigate([this.route.url, this.query])
  }

}
