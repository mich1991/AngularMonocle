import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let search = form.form.value.search
    this.route.navigate(['/news', search])
  }
}
