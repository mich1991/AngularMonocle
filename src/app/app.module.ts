import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ImagesPageComponent } from './views/images-page/images-page.component';
import { NewsPageComponent } from './views/news-page/news-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImagesResultPageComponent } from './views/images-result-page/images-result-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ImagesPageComponent,
    NewsPageComponent,
    NavigationComponent,
    ImagesResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
