import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PostService } from '../services/api.service';

@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-demo.component.html',
  styleUrl: './api-demo.component.css'
})
export class ApiDemoComponent {
  responseData: any;
  allPosts: any[] = [];
  singlePost: any;
  postId: number = 1;
  updateResponse: any;
  updatePostId: number = 1;
  deleteResponse: any;
  deletePostId: number = 1;

  constructor(private readonly postService: PostService) {}

  submitPost(form: NgForm) {
    if (form.valid) {
      this.postService.createPost(form.value).subscribe({
        next: (response) => {
          this.responseData = response;
          console.log('Post Created:', response);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        }
      });
    }
  }

  getAllPosts() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        this.allPosts = response.slice(0, 10); // Show first 10 posts
        console.log('All Posts:', response);
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }

  getSinglePost() {
    this.postService.getPost(this.postId).subscribe({
      next: (response) => {
        this.singlePost = response;
        console.log('Single Post:', response);
      },
      error: (err) => {
        console.error('Error fetching post:', err);
      }
    });
  }

  updatePost(form: NgForm) {
    if (form.valid) {
      this.postService.updatePost(this.updatePostId, form.value).subscribe({
        next: (response) => {
          this.updateResponse = response;
          console.log('Post Updated:', response);
        },
        error: (err) => {
          console.error('Error updating post:', err);
        }
      });
    }
  }

  deletePost() {
    this.postService.deletePost(this.deletePostId).subscribe({
      next: (response) => {
        this.deleteResponse = { id: this.deletePostId, message: 'Post deleted successfully' };
        console.log('Post Deleted:', response);
      },
      error: (err) => {
        console.error('Error deleting post:', err);
      }
    });
  }
}
