import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIKEY } from '../apikeys'
import { catchError, map, retry, tap } from 'rxjs/operators'
import { Image } from '../models/Image'
import { Observable, throwError } from 'rxjs';
import { DataOutputService } from './data-output.service';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  url :string =  'https://google-search3.p.rapidapi.com/api/v1/'
  constructor(private http: HttpClient, private database : DataOutputService) {
  }
  
  getImagesSearch(query : string) : Observable<Image[]>{
    let request = this.http.get(`${this.url}images/q=${query}`, {
      headers: {
        'x-rapidapi-key': APIKEY,
        'x-rapidapi-host': 'google-search3.p.rapidapi.com'
      },
      observe: 'body'
    }).pipe(
      retry(3),
      catchError(this.handleError),
      map((res: any) => res.image_results),
      tap(console.log)
      )
      return request
  }

  getNewsSearch(query : string) : Observable<News[]>{
    let request:Observable<News[]> = this.http.get(`${this.url}news/q=${query}`, {
      headers: {
        'x-rapidapi-key': APIKEY,
        'x-rapidapi-host': 'google-search3.p.rapidapi.com'
      },
      observe: 'body'
    }).pipe(
      retry(3),
      catchError(this.handleError),
      // tap(console.log),
      map((res: any) => res.entries.map((data:any) => ({
        title: data.title,
        link: data.link,
        published: data.published,
        source: data.source.title
      })
      )),
      tap(console.log),
      )
      return request
  }

  handleError(error:HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


}
