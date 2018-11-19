import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { RouterModule , Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

    const appRoutes : Routes =[
      {path : 'posts' , component : PostListComponent},
      {path : 'add-post' , component : AddPostComponent},
      {path : '' , component : PostListComponent},
      {path: '**' , component : FourOhFourComponent},
    ]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    AddPostComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
