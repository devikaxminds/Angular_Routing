import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) {}

  // HTTP Headers
  private getHttpHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }

  // Query Parameters helper
  private buildQueryParams(params: any): HttpParams {
    let httpParams = new HttpParams();
    
    for (const key of Object.keys(params)) {
      if (params[key] !== null && params[key] !== undefined) {
        httpParams = httpParams.set(key, params[key].toString());
      }
    }
    
    return httpParams;
  }

  createPost(postData: any): Observable<any> {
    const headers = this.getHttpHeaders();
    return this.http.post(this.apiURL, postData, { headers });
  }

  getPosts(queryParams?: any): Observable<any> {
    const headers = this.getHttpHeaders();
    const defaultParams = { _limit: 10, _sort: 'id', _order: 'desc' };
    const params = this.buildQueryParams(queryParams || defaultParams);
    return this.http.get(this.apiURL, { headers, params });
  }

  getPost(id: number): Observable<any> {
    const headers = this.getHttpHeaders();
    return this.http.get(`${this.apiURL}/${id}`, { headers });
  }

  updatePost(id: number, postData: any): Observable<any> {
    const headers = this.getHttpHeaders();
    return this.http.put(`${this.apiURL}/${id}`, postData, { headers });
  }

  deletePost(id: number): Observable<any> {
    const headers = this.getHttpHeaders();
    return this.http.delete(`${this.apiURL}/${id}`, { headers });
  }

  // New method with custom query parameters
  searchPosts(searchParams: { userId?: number; title?: string; limit?: number }): Observable<any> {
    const headers = this.getHttpHeaders();
    const params = this.buildQueryParams(searchParams);
    return this.http.get(this.apiURL, { headers, params });
  }
}
