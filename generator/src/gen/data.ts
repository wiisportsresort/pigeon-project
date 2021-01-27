import { UnserializedFollow, UnserializedPost, UnserializedUser } from '../lib/types';

const beowulf: UnserializedUser = {
  username: 'beowulf',
  displayName: 'Beowulf ⚔️',
  bio: 'The best hero around',
  profileImage: {
    type: 'image',
    src: 'profile/beowulf.png',
  },
  joinDate: new Date(970, 2, 18),
};

const hrothgar: UnserializedUser = {
  username: 'hrothgar',
  displayName: 'Hrothgar',
  profileImage: {
    type: 'image',
    src: 'profile/hrothgar.png',
  },
  bio: 'King of the Geats',
  joinDate: new Date(972, 8, 29),
};

const aeschere: UnserializedUser = {
  username: 'aeschere',
  displayName: 'Aeschere',
  bio: 'Advisor of @hrothgar | Fellow wise man',
  joinDate: new Date(972, 8, 31),
};

const wiglaf: UnserializedUser = {
  username: 'wiglaf',
  displayName: 'Wiglaf',
  bio: 'warrior in the making',
  joinDate: new Date(1040, 10, 7),
};

export const data: {
  users: UnserializedUser[];
  follows: UnserializedFollow[];
  posts: UnserializedPost[];
} = {
  users: [beowulf, hrothgar, wiglaf, aeschere],
  follows: [
    { user: hrothgar, follows: beowulf },
    { user: hrothgar, follows: aeschere },
    { user: beowulf, follows: wiglaf },
    { user: beowulf, follows: hrothgar },
    { user: aeschere, follows: hrothgar },
    { user: aeschere, follows: beowulf },
    { user: wiglaf, follows: beowulf },
    { user: wiglaf, follows: hrothgar },
  ],
  posts: [
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
        {
          author: aeschere,
          content: 'Cool, now we can talk here instead of in person :)',
          likes: 6,
          timestamp: new Date(975, 2, 19, 15, 2),
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
        "What in the world is this beast?! It's running around and killing " + 'people in Heorot!!',
      likes: 45,
      timestamp: new Date(980, 4, 13, 21, 23),
      media: [{ src: 'img/grendel-wikipedia.jpg', type: 'image', caption: 'what' }],
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
        'The danes are in trouble. I am determined to stop that beast that is ravaging the ' +
        'people.\n\nWish me luck.',
      likes: 1033,
      timestamp: new Date(992, 6, 8, 9, 41),
      comments: [
        {
          author: hrothgar,
          content: 'please we are having lots of trouble',
          likes: 199,
          timestamp: new Date(992, 6, 9, 13, 30),
          comments: [
            {
              author: aeschere,
              content: 'pretty please we are being attacked very badly',
              likes: 156,
              timestamp: new Date(992, 6, 9, 15, 12),
            },
          ],
        },
      ],
    },
    {
      author: beowulf,
      content:
        "I'm gonna fight Grendel by myself without weapons. Just bare hands, 1-on-1; a fair fight.",
      likes: 1752,
      timestamp: new Date(992, 6, 14, 15, 20),
      comments: [
        {
          author: hrothgar,
          content: 'Are you sure? That sounds like a pretty bad idea.',
          likes: 243,
          timestamp: new Date(992, 6, 14, 16, 25),
          comments: [
            {
              author: beowulf,
              content: "It's fair. If i win, I win; else I'll die. Grendel is going down!",
              likes: 561,
              timestamp: new Date(992, 6, 15, 17, 50),
            },
          ],
        },
      ],
    },
    {
      author: beowulf,
      content: 'It is done.',
      likes: 2 ** 52,
      timestamp: new Date(992, 6, 16, 12, 59),
      media: [{ type: 'image', src: 'img/grendel-is-gone.png', caption: 'I got his arm' }],
      comments: [
        {
          author: hrothgar,
          content:
            "I can't thank you enough!! You've saved the Geats!\nWe must celebrate. " +
            'Come to the hall to receive your treasures 👀',
          likes: 2 ** 12 + 123,
          timestamp: new Date(992, 6, 16, 13, 5),
        },
      ],
    },
    {
      author: aeschere,
      content:
        "Grendel is gone, thanks to @beowulf! Can't wait to return to normal life tomorrow :)",
      likes: 2 ** 8,
      timestamp: new Date(992, 6, 16, 21, 30),
      comments: [
        {
          author: hrothgar,
          content:
            'This post did not age well...\n\nOh Aeschere, we will dearly miss you. ' +
            'We will avenge you! You have our word.',
          likes: 2 ** 14,
          timestamp: new Date(992, 6, 16, 22, 24),
        },
      ],
    },
    {
      author: hrothgar,
      content:
        "There seems to be another beast roaming in the night, Grendel's mother. @beowulf it " +
        'appears we will have to depend on you again to slay her. Your reward for eliminating the' +
        ' wild monster will be plentiful.',
      likes: 182,
      timestamp: new Date(992, 6, 17, 9, 39),
      comments: [
        {
          author: beowulf,
          content:
            "No need for mourning; we shall push forward and seek revenge! She won't get away " +
            'with this! We will avenge you Aeschere!',
          likes: 194,
          timestamp: new Date(992, 6, 17, 10, 34),
        },
      ],
    },
    {
      author: beowulf,
      content:
        "We're headed out to slay Grendel's mother. The water here is laden with blood. Looks " +
        "like I'm going in. Wish me luck, again.",
      likes: 2139,
      timestamp: new Date(992, 6, 17, 13, 20),
      comments: [
        {
          author: hrothgar,
          content: 'Stay safe out there!',
          likes: 120,
          timestamp: new Date(992, 6, 17, 13, 25),
          comments: [
            {
              author: beowulf,
              content:
                "Update: I'm alive, and Grendel's mother isn't! I got Grendel's head too, here's " +
                ' a photo',
              media: [{ type: 'image', src: 'img/grendels-head.png', caption: 'Say cheese!' }],
              likes: 10301210,
              timestamp: new Date(992, 6, 17, 14, 0),
            },
          ],
        },
      ],
    },
    {
      author: hrothgar,
      content:
        '@beowulf has done an astounding amount of work for our people. He saved our lives on multiple occasions, and lived to tell the tale.\n\nIt is my pleasure to grant Beowulf the title of king of the Geats!',
      likes: 10999123123,
      timestamp: new Date(992, 6, 18, 16, 0),
      comments: [
        {
          author: beowulf,
          content:
            "It is my honor to accept the offer. Here's to safety and prosperity of the Geats in the years to come!",
          likes: 123230,
          timestamp: new Date(992, 6, 18, 17, 50),
        },
      ],
    },
    {
      author: beowulf,
      content: 'Sometimes I wake up and wonder, <i>what is cheese?</i>',
      likes: 12301,
      timestamp: new Date(1025, 9, 20, 4, 0),
    },
    {
      author: wiglaf,
      content: "hello everyone! looking forward to the awesome times i just joined, what's new?",
      likes: 15,
      timestamp: new Date(1040, 10, 7, 17, 50),
      comments: [
        {
          author: beowulf,
          content: 'Not much. Just havin a great time being king!',
          likes: 14,
          timestamp: new Date(1040, 10, 7, 19, 20),
        },
      ],
    },
    {
      author: beowulf,
      content:
        'Now a dragon ravaging my people? Truly despicable. I will fight it, just like I ' +
        "did Grendel and his mother in my youth.\n\nI'll get my armor chainmail, a metallic " +
        'shield, and my trusty sword. It is fate that decides the winner.',
      likes: 12301,
      timestamp: new Date(1042, 7, 12, 10, 32),
      comments: [
        {
          author: wiglaf,
          content: "i'll fight alongside you too! down with the dragon!",
          likes: 15000,
          timestamp: new Date(1042, 7, 12, 10, 35),
        },
      ],
    },
    {
      author: wiglaf,
      content:
        'sad news. Beowulf risked his life in battle, and unfortunately died in it,' +
        ' saving the people he loved most. we must remember him with a ceremony tonight. ' +
        "\n\ni'll be taking over as your " +
        'new king. to Beowulf and the future!',
      likes: 12390123,
      timestamp: new Date(1042, 7, 12, 13, 10),
    },
  ],
};
