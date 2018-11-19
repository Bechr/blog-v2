import { Injectable, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  

  datePost  = new Date();
  private posts : Post[] = [{
    title :'Mon premier post',
    content :'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    loveIts : '5',
    created_at : this.datePost
  } ,
  {
    title :'Mon deuxième post',
    content :'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    loveIts : '-2',
    created_at : this.datePost
  },
  {
    title :'Mon troisième post',
    content :'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    loveIts : '0',
    created_at : this.datePost
  }] ;


  postSubject  = new Subject<Post[]>();


  emitPosts(){
    this.postSubject.next(this.posts);
  }

  addPost(post : Post){
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post : Post) {
    const postIndexToRemove = this.posts.findIndex((bookEl)=>{
      if(bookEl === post) {
        console.log(bookEl);
        console.log("post a été supprimé avec succes !")
        return true;
        
      }
   });

   this.posts.splice(postIndexToRemove , 1);
   this.emitPosts();
  }


  LovePlus(index : number){
    this.posts[index].loveIts = ++this.posts[index].loveIts;

  }

  LoveMinus(index : number) {
    this.posts[index].loveIts = --this.posts[index].loveIts;
  }



 

  constructor() { }
}
