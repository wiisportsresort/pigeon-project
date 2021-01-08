import { Hydratable, HydratorData } from './types';
import { Post } from './Post';
import { User } from './User';

export class Hydrator implements Hydratable {
  hydrated = false;
  users: User[] = [];
  posts: Post[] = [];

  constructor(private data: HydratorData) {
    data.users.forEach(user => {
      this.users.push(
        new User({
          username: user.username,
          displayName: user.displayName,
          followers: data.follows.filter(f => f.follows === user.username).map(f => f.user),
          following: data.follows.filter(f => f.user === user.username).map(f => f.follows),
        })
      );
    });

    data.posts.forEach(post => {
      this.posts.push(
        new Post({
          parent: post.parent,
          id: post.id,
          author: post.author,
          content: post.content,
          media: post.media,
        })
      );
    });
  }

  hydrate(): void {
    this.users.map(user => user.hydrate(this));
    this.posts.map(post => post.hydrate(this));
    this.hydrated = true;
  }
}
