import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) {}

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiURL, postData);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
