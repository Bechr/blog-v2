import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {


  postForm : FormGroup;
  datePost  = new Date();

  constructor(private formBuilder : FormBuilder , private postService : PostService , private router : Router) { }

  ngOnInit() {
    this.initForm();
  }



  initForm(){
    this.postForm = this.formBuilder.group({
      title : ['' , Validators.required],
      content : ['' , Validators.required],
    });
  }

  onSubmitForm(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const created_at = this.datePost;
    const newPost = new Post(title , content , loveIts , created_at);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts'])
  }

}
