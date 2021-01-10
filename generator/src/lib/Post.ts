import { Hydratable, Media } from './types';
import { Hydrator } from './Hydrator';
import { User } from './User';

export class Post implements Hydratable {
  parent?: Post;
  parentId?: string;
  id: string;
  author?: User;
  authorName: string;
  likes: number;
  content: string;
  media: Media[];
  comments?: Post[];
  hydrated = false;

  constructor({
    id,
    author,
    content,
    media,
    likes,
    parent,
  }: {
    id: string;
    author: string;
    content: string;
    media: Media[];
    likes: number;
    parent?: string;
  }) {
    this.id = id;
    this.likes = likes;
    this.authorName = author;
    this.content = content;
    this.media = media;
    this.parentId = parent;
  }

  hydrate({ users, posts }: Hydrator): void {
    this.author = users.find(user => user.username === this.authorName);
    this.comments = posts.filter(post => post.parentId === this.id);
    this.parentId && (this.parent = posts.find(post => post.id === this.parentId));
    this.hydrated = true;
  }
}
