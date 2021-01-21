import fse from 'fs-extra';
import { nanoid } from 'nanoid';
import path from 'path';
import {
  UnserializedFollow,
  UnserializedPost,
  SerializableFollow,
  SerializablePost,
  SerializableUser,
  UnserializedUser,
  HydratorData,
} from '../lib/types';
import { data } from './data';

const users: SerializableUser[] = [];
const posts: SerializablePost[] = [];
const follows: SerializableFollow[] = [];

const serializeUser = (user: UnserializedUser) => {
  users.push({
    username: user.username,
    displayName: user.displayName,
    bio: user.bio,
    profileImage: user.profileImage,
    bannerImage: user.bannerImage,
    joinDate: user.joinDate.getTime(),
  });
};

const serializePost = (post: UnserializedPost, parent?: SerializablePost) => {
  const serialized: SerializablePost = {
    parent: parent?.id,
    id: nanoid(),
    author: post.author.username,
    content: post.content,
    media: post.media ?? [],
    likes: post.likes ?? 0,
    timestamp: post.timestamp.getTime(),
  };

  posts.push(serialized);
  (post.comments ?? []).forEach(comment => serializePost(comment, serialized));
};

const serializeFollow = (follow: UnserializedFollow) => {
  follows.push({
    user: follow.user.username,
    follows: follow.follows.username,
  });
};

data.users.forEach(u => serializeUser(u));
data.posts.forEach(p => serializePost(p));
data.follows.forEach(f => serializeFollow(f));

const json = JSON.stringify({ users, posts, follows } as HydratorData, null, 2);
const minified = JSON.stringify({ users, posts, follows } as HydratorData);

// fse.mkdirpSync(path.resolve(__dirname, '../out'));
fse.writeFileSync(path.resolve(__dirname, '../../src/lib/data.json'), json);
fse.writeFileSync(path.resolve(__dirname, '../../src/lib/data.min.json'), minified);
