## plan

- svelte spa (hash routing)
- data stored in json (im lazy)
- firebase/netlify/gh-pages host?

## routes

- /: front page, show all posts by all users
  - trending
  - no sign in
- /user/:username: user page
  - /user/:username/followers: followers
  - /user/:username/following: following
  - own posts
- /post/:username/:id: post by a user
  - `push()`ed on, back button will `pop()`
  - comments, likes
    - clickable comment profiles
    - replies to comments
