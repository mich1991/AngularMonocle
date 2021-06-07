import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  images!: Observable<Image[]>

  constructor(private route: ActivatedRoute, private navigation : Router, private http: GoogleApiService, private database: DataOutputService) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')!;
    this.images = this.http.getImagesSearch(this.query)
  }

  onSubmit(form: NgForm) : void{
    this.query = form.value.search
    this.navigation.navigate(['images', this.query])
    this.images = this.http.getImagesSearch(this.query)

  }

}
