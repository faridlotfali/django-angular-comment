import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComment() {
    return this.http.get('http://localhost:8000/notes/')
  }

  sendcomment(comment): Observable<any>{
    return this.http.post('http://localhost:8000/notes/',comment)
  }

  updatecomment(comment): Observable<any>{
    return this.http.put(`http://localhost:8000/notes/${comment.id}/`,comment)
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

}
