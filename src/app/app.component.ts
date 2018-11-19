import { Component } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';

export class Post {
   title : any;
   content: string;
   loveIts : number;
   created_at: Date;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  datePost  = new Date();

  posts = [{
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
  }];

  constructor(){
    
  }
}
