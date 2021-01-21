import type { Post } from './Post';
import type { User } from './User';
export interface Media {
  type: string;
  src: string;
  caption?: string;
}

export interface UnserializedPost {
  author: UnserializedUser;
  content: string;
  media?: Media[];
  likes?: number;
  comments?: UnserializedPost[];
  timestamp: Date;
}

export interface UnserializedUser {
  username: string;
  displayName: string;
  bio?: string;
  profileImage?: Media;
  bannerImage?: Media;
  joinDate: Date;
}

export interface UnserializedFollow {
  user: UnserializedUser;
  follows: UnserializedUser;
}

export interface SerializablePost {
  parent?: string;
  id: string;
  author: string;
  content: string;
  media: Media[];
  likes: number;
  timestamp: number;
}

export interface SerializableUser {
  username: string;
  displayName: string;
  bio?: string;
  profileImage?: Media;
  bannerImage?: Media;
  joinDate: number;
}

export interface SerializableFollow {
  user: string;
  follows: string;
}

export interface HydratorData {
  users: SerializableUser[];
  posts: SerializablePost[];
  follows: SerializableFollow[];
}

export interface Hydratable {
  hydrated: boolean;
  hydrate(data: { users: User[]; posts: Post[] }): void;
}
