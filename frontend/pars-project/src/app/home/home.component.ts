import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { IComment } from '../comment';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users$ : Object;
  comments : IComment [] = [];

  @ViewChild('commentText') conn : ElementRef;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getComment().subscribe( 
      data => this.users$ = data
    );
  }

  registerUser(c:IComment){
    this.data.sendcomment(c).subscribe(
      Response => {
        this.data.getComment().subscribe( 
          data => this.users$ = data
        );
      },
      error => { 
        console.log('error' , error);
      }
    )
  }
1
  updateUser(c:IComment){
    this.data.updatecomment(c).subscribe(
      Response => {
        this.data.getComment().subscribe( 
          data => this.users$ = data
        );
      },
      error => { 
        console.log('error' , error);
      }
    )
  }

  commentLike(c:IComment){
    c.like++;
    this.updateUser(c);
  }

  commentDislike(c:IComment){
    c.dislike--;
    this.updateUser(c);
  }

  reviewsCount(c:IComment , n: HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value)
    this.updateUser(c);
  }
  addComment(){
    let c : IComment ={
      comment: this.conn.nativeElement.value, 
      dislike : 0,
      like : 0,
      numberOfReviews : 0,
      star : 0,
      id : -1,
    }
    this.registerUser(c);
  }
}
