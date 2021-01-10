import { UnserializedFollow, UnserializedUser, UnserializedPost } from '../lib/types';

const beowulf: UnserializedUser = {
  username: 'beowulf',
  displayName: 'Beowulf ⚔️',
  bio: 'the best hero around',
  profileImage: {
    type: 'image',
    src: 'profile/beowulf.png',
  },
};
const hrothgar: UnserializedUser = {
  username: 'hrothgar',
  displayName: 'Hrothgar',
  bio: 'king of somewhere idk',
};
const technothepig: UnserializedUser = {
  username: 'Technothepig',
  displayName: 'Technoblade 🐷',
  bio: 'the second worst thing to ever happen to those orphans',
  profileImage: {
    type: 'image',
    src: 'profile/technothepig.jpg',
  },
  bannerImage: {
    type: 'image',
    src: 'banner/technothepig.jpeg',
  },
};

const post1: UnserializedPost = {
  author: beowulf,
  content: 'Test post',
  likes: 50,
  media: [{ type: 'image', src: 'svelte.png', caption: 'svelte logo' }],
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
          media: [{ type: 'image', src: 'svelte.png', caption: 'svelte logo' }],
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
      media: [{ type: 'image', src: 'svelte.png', caption: 'svelte logo' }],
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
              media: [{ type: 'image', src: 'svelte.png', caption: 'svelte logo' }],
              comments: [],
            },
          ],
        },
      ],
    },
    {
      author: technothepig,
      content: 'nice',
      likes: 1000,
      media: [],
      comments: [
        {
          author: technothepig,
          content: 'nice',
          likes: 1000,
          media: [],
          comments: [
            {
              author: technothepig,
              content: 'nice',
              likes: 1000,
              media: [],
              comments: [
                {
                  author: technothepig,
                  content: 'nice',
                  likes: 1000,
                  media: [],
                  comments: [
                    {
                      author: technothepig,
                      content: 'nice',
                      likes: 1000,
                      media: [],
                      comments: [
                        {
                          author: technothepig,
                          content: 'nice',
                          likes: -1500,
                          media: [],
                          comments: [
                            {
                              author: technothepig,
                              content: 'nice',
                              likes: 1000,
                              media: [],
                              comments: [
                                {
                                  author: technothepig,
                                  content: 'nice',
                                  likes: 1000,
                                  media: [],
                                  comments: [
                                    {
                                      author: technothepig,
                                      content: 'nice',
                                      likes: 1000,
                                      media: [],
                                      comments: [],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const post3 = {
  author: technothepig,
  content: 'nice',
  likes: 1000,
  media: [],
  comments: [
    {
      author: technothepig,
      content: 'nice',
      likes: 1000,
      media: [],
      comments: [
        {
          author: technothepig,
          content: 'nice',
          likes: 1000,
          media: [],
          comments: [
            {
              author: technothepig,
              content: 'nice',
              likes: 1000,
              media: [],
              comments: [
                {
                  author: technothepig,
                  content: 'nice',
                  likes: 1000,
                  media: [],
                  comments: [
                    {
                      author: technothepig,
                      content: 'nice',
                      likes: -1500,
                      media: [],
                      comments: [
                        {
                          author: technothepig,
                          content: 'nice',
                          likes: 1000,
                          media: [],
                          comments: [
                            {
                              author: technothepig,
                              content: 'nice',
                              likes: 1000,
                              media: [],
                              comments: [
                                {
                                  author: technothepig,
                                  content: 'nice',
                                  likes: 1000,
                                  media: [],
                                  comments: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const data = {
  users: [beowulf, hrothgar, technothepig],
  posts: [post1, post2, post3],
  follows: <UnserializedFollow[]>[
    { user: hrothgar, follows: beowulf },
    { user: hrothgar, follows: technothepig },
    { user: beowulf, follows: technothepig },
  ],
};
