import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesPageComponent } from './views/images-page/images-page.component';
import { ImagesResultPageComponent } from './views/images-result-page/images-result-page.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { NewsPageComponent } from './views/news-page/news-page.component';

const routes: Routes = [
  {path: 'news' , component: NewsPageComponent},
  {path: 'images' , component: ImagesPageComponent, pathMatch:'full' },
  {path: 'images/:query' , component: ImagesResultPageComponent },
  {path: '' , component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
