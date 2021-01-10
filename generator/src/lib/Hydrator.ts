import { Hydratable, HydratorData } from './types';
import { Post } from './Post';
import { User } from './User';

export class Hydrator implements Hydratable {
  hydrated = false;
  users: User[] = [];
  posts: Post[] = [];

  private _userObj: { [username: string]: User };
  private _postObj: { [id: string]: Post };

  constructor(private data: HydratorData) {
    data.users.forEach(user => {
      this.users.push(
        new User({
          username: user.username,
          displayName: user.displayName,
          followers: data.follows.filter(f => f.follows === user.username).map(f => f.user),
          following: data.follows.filter(f => f.user === user.username).map(f => f.follows),
          bio: user.bio,
          profileImage: user.profileImage,
          bannerImage: user.bannerImage,
        })
      );
    });

    data.posts.forEach(post => {
      this.posts.push(
        new Post({
          parent: post.parent,
          id: post.id,
          likes: post.likes,
          author: post.author,
          content: post.content,
          media: post.media,
        })
      );
    });

    this._userObj = this.users
      .map(user => ({ [user.username.toLowerCase()]: user }))
      .reduce((obj, b) => ({ ...obj, ...b }), {});
    this._postObj = this.posts
      .map(post => ({ [post.id]: post }))
      .reduce((obj, b) => ({ ...obj, ...b }), {});
  }

  getUser(username?: string): User | undefined {
    return username ? this._userObj[username.toLowerCase()] : undefined;
  }

  getPost(id?: string): Post | undefined {
    return id ? this._postObj[id] : undefined;
  }

  hydrate(): void {
    this.users.map(user => user.hydrate(this));
    this.posts.map(post => post.hydrate(this));
    this.hydrated = true;
  }
}
