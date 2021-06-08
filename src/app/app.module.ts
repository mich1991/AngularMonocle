import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { ImagesPageComponent } from './views/images-page/images-page.component';
import { NewsPageComponent } from './views/news-page/news-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImagesResultPageComponent } from './views/images-result-page/images-result-page.component';
import { FormsModule } from '@angular/forms';
import { SingleImageCardComponent } from './single-image-card/single-image-card.component';
import { NewsPageResultsComponent } from './views/news-page-results/news-page-results.component';
import { SingleNewsCardComponent } from './single-news-card/single-news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ImagesPageComponent,
    NewsPageComponent,
    NavigationComponent,
    ImagesResultPageComponent,
    SingleImageCardComponent,
    NewsPageResultsComponent,
    SingleNewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
