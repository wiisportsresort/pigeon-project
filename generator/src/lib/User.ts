import { Hydratable, Media } from './types';
import { Post } from './Post';
import { Hydrator } from './Hydrator';

export class User implements Hydratable {
  username: string;
  displayName: string;
  bio?: string;
  profileImage?: Media;
  bannerImage?: Media;
  followers?: User[];
  following?: User[];
  posts?: Post[];
  hydrated = false;

  private _followers: string[];
  private _following: string[];

  constructor({
    username,
    displayName,
    followers,
    following,
    profileImage,
    bio,
    bannerImage,
  }: {
    username: string;
    displayName: string;
    followers: string[];
    following: string[];
    bio?: string;
    profileImage?: Media;
    bannerImage?: Media;
  }) {
    this.username = username;
    this.displayName = displayName;
    this._followers = followers;
    this._following = following;
    this.bio = bio;
    this.profileImage = profileImage;
    this.bannerImage = bannerImage;
  }

  hydrate({ users, posts }: Hydrator): void {
    const userRecord = users
      .map(user => ({ [user.username]: user }))
      .reduce((obj, b) => ({ ...obj, ...b }), {} as Record<string, User>);
    this.followers = this._followers.map(username => userRecord[username]);
    this.following = this._following.map(username => userRecord[username]);
    this.posts = posts.filter(post => post.authorName === this.username);
    this.hydrated = true;
  }
}
