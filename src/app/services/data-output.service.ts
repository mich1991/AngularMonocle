import { Injectable } from '@angular/core';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class DataOutputService {
  news = []
  images : Image[] = []
  constructor() { }
}
