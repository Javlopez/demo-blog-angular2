import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'list-posts',
  templateUrl: './app/list.posts.html'
})
export class PostsComponent {

  listPosts = [
    new Post(1, 'Visit Singapur', 'Lorem ipsum Singapur Lorem ipsum Singapur'),
    new Post(2, 'Visit Kuala Lumpur', 'Lorem ipsum Kuala Lumpur Lorem ipsum Kuala Lumpur'),
    new Post(3, 'Visit Mexico', 'Lorem ipsum Mexico Lorem ipsum Mexico'),
    new Post(4, 'Visit Amsterdam', 'Lorem ipsum Amsterdam Lorem ipsum Amsterdam'),
    new Post(5, 'Visit Morocco', 'Lorem ipsum Morocco Lorem ipsum Morocco'),
  ];

  postSelected: Post;

  choosePost(post: Post) {
      this.postSelected = post;
  }
}
