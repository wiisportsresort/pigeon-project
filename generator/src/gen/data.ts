import { UnserializedFollow, UnserializedPost, UnserializedUser } from '../lib/types';

const beowulf: UnserializedUser = {
  username: 'beowulf',
  displayName: 'Beowulf ⚔️',
  bio: 'the best hero around',
  profileImage: {
    type: 'image',
    src: 'profile/beowulf.png',
  },
  joinDate: new Date(970, 2, 18),
};

const hrothgar: UnserializedUser = {
  username: 'hrothgar',
  displayName: 'Hrothgar',
  bio: 'king of somewhere idk',
  joinDate: new Date(972, 8, 29),
};

const wiglaf: UnserializedUser = {
  username: 'wiglaf',
  displayName: 'Wiglaf',
  bio: 'warrior in the making',
  joinDate: new Date(974, 10, 7),
};

export const data = {
  users: [beowulf, hrothgar, wiglaf],
  follows: <UnserializedFollow[]>[
    { user: hrothgar, follows: beowulf },
    { user: beowulf, follows: wiglaf },
    { user: beowulf, follows: hrothgar },
    { user: wiglaf, follows: beowulf },
    { user: wiglaf, follows: hrothgar },
  ],
  posts: <UnserializedPost[]>[
    {
      author: beowulf,
      content: 'what is this new social media thing people are on about',
      likes: 15,
      timestamp: new Date(975, 2, 19, 12, 18),
      comments: [
        {
          author: hrothgar,
          content: 'Sounds interesting. Post your greatest thoughts for all to see!',
          likes: 7,
          timestamp: new Date(975, 2, 19, 14, 8),
        },
      ],
    },
    {
      author: hrothgar,
      content: "How's everyone doing on this fine day? Just finished the new mead hall!",
      likes: 13,
      timestamp: new Date(975, 6, 29, 10, 18),
      comments: [
        {
          author: beowulf,
          content: "I'm having a great day!",
          likes: 6,
          timestamp: new Date(975, 6, 29, 11, 2),
          comments: [
            {
              author: hrothgar,
              content: "Glad you're doing well. Come visit sometime!",
              likes: 5,
              timestamp: new Date(975, 6, 29, 12, 38),
            },
          ],
        },
      ],
    },
    {
      author: hrothgar,
      content:
        "<b>What</b> in the world is that beast?!<br /><br />It's running around and killing people in Heorot!!",
      likes: 45,
      timestamp: new Date(980, 4, 13, 21, 23),
      media: [{ src: 'grendel-wikipedia.jpg', type: 'image', caption: 'what' }],
      comments: [
        {
          author: beowulf,
          content: "What??? That looks crazy!! Don't worry, I'm heading over to help in 12 years",
          likes: 50,
          timestamp: new Date(980, 4, 13, 22, 0),
        },
      ],
    },
    {
      author: beowulf,
      content:
        'The danes are in trouble. I am determined to stop that beast that is ravaging the people.<br /><br />Wish me luck.',
      likes: 1033,
      timestamp: new Date(992, 6, 8, 9, 41),
      comments: [
        {
          author: hrothgar,
          content: 'please we are having lots of trouble',
          likes: 199,
          timestamp: new Date(992, 6, 9, 13, 30),
        },
      ],
    },
  ],
};
