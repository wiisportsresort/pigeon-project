import { toDate } from 'date-fns';
import { Hydrator } from './Hydrator';
import { Hydratable, Media } from './types';
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
  timestamp: Date;

  constructor({
    id,
    author,
    content,
    media,
    likes,
    parent,
    timestamp,
  }: {
    id: string;
    author: string;
    content: string;
    media: Media[];
    likes: number;
    parent?: string;
    timestamp: number;
  }) {
    this.id = id;
    this.likes = likes;
    this.authorName = author;
    this.content = content;
    this.media = media;
    this.parentId = parent;
    this.timestamp = toDate(timestamp);
  }

  hydrate({ users, posts }: Hydrator): void {
    this.author = users.find(user => user.username === this.authorName);
    this.comments = posts.filter(post => post.parentId === this.id);
    this.parentId && (this.parent = posts.find(post => post.id === this.parentId));
    this.hydrated = true;
  }
}
