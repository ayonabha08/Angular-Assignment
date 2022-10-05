import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fruit } from '../Models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  url:string = "http://localhost:13356/Fruits/All"
  constructor(private httpClient : HttpClient) { }

  public getAllFruit() : Observable<Fruit[]>
  {
    return this.httpClient.get<Fruit[]>(this.url);
  }

  public getFruit(id:Number) : Observable<Fruit>{
    const tempUrl = "http://localhost:13356/Fruits/" + id;
    return this.httpClient.get<Fruit>(tempUrl);
  }

  public updateFruit(fr: Fruit):Observable<string>{
    const tempUrl = "http://localhost:13356/Fruits"
    return this.httpClient.put<string>(tempUrl,fr);
  }

  public addFruit(fr: Fruit) : Observable<string>{
    const tempUrl = "http://localhost:13356/Fruits"
    return this.httpClient.post<string>(tempUrl,fr);
  }

  public deleteFruit(id:Number): Observable<string>{
    const tempUrl = "http://localhost:13356/Fruits/" + id ;
    return this.httpClient.delete<string>(tempUrl);
  }
}