import { UnserializedFollow, UnserializedUser, UnserializedPost } from '../lib/types';

const beowulf: UnserializedUser = {
  username: 'beowulf',
  displayName: 'Beowulf ⚔️',
};
const hrothgar: UnserializedUser = {
  username: 'hrothgar',
  displayName: 'Hrothgar',
};

const post1: UnserializedPost = {
  author: beowulf,
  content: 'Test post',
  likes: 50,
  media: [{ type: 'image', src: '/svelte.png', caption: 'svelte logo' }],
  comments: [
    {
      author: hrothgar,
      content: 'Test comment',
      likes: 25,
      media: [],
      comments: [
        {
          author: beowulf,
          content: 'Test reply',
          likes: 5,
          media: [{ type: 'image', src: '/svelte.png', caption: 'svelte logo' }],
          comments: [
            {
              author: hrothgar,
              content: 'Test reply to reply',
              likes: 0,
              media: [],
              comments: [],
            },
          ],
        },
      ],
    },
  ],
};

const post2: UnserializedPost = {
  author: hrothgar,
  content: 'Test post',
  likes: 50,
  media: [],
  comments: [
    {
      author: beowulf,
      content: 'Test comment',
      likes: 25,
      media: [{ type: 'image', src: '/svelte.png', caption: 'svelte logo' }],
      comments: [
        {
          author: hrothgar,
          content: 'Test reply',
          likes: 5,
          media: [],
          comments: [
            {
              author: beowulf,
              content: 'Test reply to reply',
              likes: 0,
              media: [{ type: 'image', src: '/svelte.png', caption: 'svelte logo' }],
              comments: [],
            },
          ],
        },
      ],
    },
  ],
};

export const data = {
  users: [beowulf, hrothgar],
  posts: [post1, post2],
  follows: <UnserializedFollow[]>[{ user: hrothgar, follows: beowulf }],
};
