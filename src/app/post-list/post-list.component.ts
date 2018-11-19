import { PostService } from './../services/post.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts : Post[];
  postSubscription : Subscription;





  constructor(private postService : PostService) { }

  ngOnInit() {

    this.postSubscription = this.postService.postSubject.subscribe((posts : any[])=>{
          this.posts = posts;
        
    });
    this.postService.emitPosts();
    
  }


  onRemove(post : Post){
     this.postService.removePost(post);
  }



  onLoveIt(index : number){
     this.postService.LovePlus(index);
    
    
  }

  DontLoveIt(index : number) {
    this.postService.LoveMinus(index);
    
  }





  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

}
