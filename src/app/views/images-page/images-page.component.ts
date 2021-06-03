import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images-page',
  templateUrl: './images-page.component.html',
  styleUrls: ['./images-page.component.scss']
})
export class ImagesPageComponent implements OnInit {
  searchValue : string = ''
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) : void{
    this.searchValue = form.value.search
    this.route.navigate(['images', this.searchValue])
  }

}
