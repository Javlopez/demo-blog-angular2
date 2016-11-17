import { Component, Input } from '@angular/core';

import { Post } from './Post';

@Component({
  selector:'the-post',
  templateUrl: './app/post.selected.html'
})
export class PostSelected {
    @Input() post: Post
}
