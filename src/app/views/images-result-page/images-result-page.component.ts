import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-images-result-page',
  templateUrl: './images-result-page.component.html',
  styleUrls: ['./images-result-page.component.scss']
})
export class ImagesResultPageComponent implements OnInit {

  query!: string;
  input!: HTMLInputElement;

  constructor(private route: ActivatedRoute, private navigation : Router) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.paramMap.get('query')!;
  }

  onSubmit(form: NgForm) : void{
    this.query = form.value.search
    this.navigation.navigate(['images', this.query])
  }

}
