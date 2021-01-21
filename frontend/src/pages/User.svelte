<script lang="ts">
  import type { Hydrator } from 'pigeon-generator';
  import qs from 'qs';
  import { querystring } from 'svelte-spa-router';
  import { fade } from 'svelte/transition';
  import PostCard from '../components/PostCard.svelte';
  import { format } from 'date-fns';

  export let hydrator: Hydrator;
  export let params: { username: string | undefined } = { username: undefined };

  $: user = hydrator.getUser(params.username);
  $: profileImage = user?.profileImage ?? { type: 'image', src: 'default.png' };
  $: tab = qs.parse($querystring ?? '').tab as
    | 'posts'
    | 'posts_with_comments'
    | 'media'
    | undefined;

  const setDefaultProfileImage = () => (profileImage = { type: 'image', src: 'default.png' });
</script>

<style lang="scss">
  @import '../colors';

  $breakpoint: 760px;

  #user-wrapper {
    display: flex;
    @media screen and (max-width: $breakpoint) {
      flex-direction: column;
      align-items: center;

      aside {
        display: flex;
        align-items: center;

        flex-direction: row;
        justify-content: space-between;

        h1 {
          margin-top: 0;
        }

        #pfp {
          width: 8rem;
          height: 8rem;
        }

        #aside-content {
          margin-left: 1rem;
          max-height: 9.5rem;
        }
      }
      #posts {
        width: 100%;
        margin-top: 32px;
      }
    }
    max-width: 860px + 32px;
    justify-content: space-between;
    margin: 0 auto;
  }

  aside {
    @media screen and (min-width: $breakpoint) {
      max-width: 260px;
    }
    // border: 1px solid #000;
    #pfp-wrapper {
      display: flex;
      justify-items: center;
      #pfp {
        border-radius: 50%;
        max-width: 250px;
        max-height: 250px;
        border: 0.25rem solid blue-gray(300);
        object-fit: cover;
      }
    }

    h1 {
      margin-bottom: 0.25rem;
    }

    #username {
      font-size: 16px;
      color: blue-gray(500);
      margin-bottom: 8px;
      display: block;
    }

    #bio {
      display: block;
      margin-bottom: 8px;
    }

    #interactions {
      display: flex;
      a {
        color: blue-gray(600);
        text-decoration: none;
        margin-right: 6px;
        .number {
          color: blue-gray(800);
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }

    #join-date {
      display: block;
      margin-top: 0.5rem;
      color: blue-gray(600);
      b {
        color: blue-gray(800);
      }
    }
  }

  #posts {
    flex-grow: 1;
    @media screen and (min-width: $breakpoint) {
      max-width: 600px;
    }
    nav {
      display: flex;
      height: 40px;
      :first-child {
        border-top-left-radius: 4px;
      }
      :last-child {
        border-top-right-radius: 4px;
      }
      .tab-item {
        // margin-right: 2px;
        flex-grow: 1;
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2px;
        border-bottom: 2px solid blue(100);
        background-color: blue(100);
        transition: background-color 75ms linear, border-color 75ms linear;
        &:hover {
          background-color: darken(blue(100), 5%);
          border-color: darken(blue(100), 5%);
        }
        &.selected {
          border-color: blue(400);
          font-weight: 600;
        }
      }
    }
  }
</style>

<div in:fade={{ duration: 100 }} id="user-wrapper">
  {#if user}
    <aside>
      <div id="pfp-wrapper">
        <img src={profileImage.src} on:error={setDefaultProfileImage} alt="profile" id="pfp" />
      </div>
      <div id="aside-content">
        <h1>{user.displayName}</h1>
        <span id="username">@{user.username}</span>
        <span id="bio">{user.bio}</span>
        <div id="interactions">
          <a href={`#/user/${user.username}/followers`}>
            <b class="number">{user.followers?.length}</b>
            Followers
          </a>
          <a href={`#/user/${user.username}/following`}>
            <b class="number">{user.following?.length}</b>
            Following
          </a>
        </div>
        <span id="join-date">Joined <b>{format(user.joinDate, 'MMMM yyy')}</b></span>
      </div>
    </aside>
    <section id="posts">
      <nav class="tab-list">
        <a
          class="tab-item"
          class:selected={tab === 'posts' || !tab}
          href={`#/user/${user.username}?tab=posts`}>Posts</a
        >
        <a
          class="tab-item"
          class:selected={tab === 'posts_with_comments'}
          href={`#/user/${user.username}?tab=posts_with_comments`}>Posts and comments</a
        >
        <a
          class="tab-item"
          class:selected={tab === 'media'}
          href={`#/user/${user.username}?tab=media`}>Media</a
        >
      </nav>
      {#key tab}
        <div in:fade={{ duration: 100 }}>
          {#if user.posts}
            {#if tab === 'posts' || !tab}
              {#if user.posts.some(p => !p.parent)}
                {#each user.posts
                  .filter(p => !p.parent)
                  .sort(({ timestamp: a }, { timestamp: b }) => a.getDate() - b.getDate()) as post}
                  <PostCard {post} interactive="full" />
                {/each}
              {:else}
                <h3>No posts</h3>
              {/if}
            {:else if tab === 'posts_with_comments'}
              {#each user.posts.sort(({ timestamp: a }, { timestamp: b }) => a.getDate() - b.getDate()) as post}
                <PostCard {post} interactive="full" />
              {/each}
            {:else if tab === 'media'}
              {#if user.posts.some(p => p.media.length)}
                {#each user.posts
                  .filter(p => p.media.length)
                  .sort(({ timestamp: a }, { timestamp: b }) => a.getDate() - b.getDate()) as post}
                  <PostCard {post} interactive="full" />
                {/each}
              {:else}
                <h3>No posts</h3>
              {/if}
            {/if}
          {:else}
            <h3>No posts</h3>
          {/if}
        </div>
      {/key}
    </section>
  {:else}
    <h3>User not found: @{params.username}</h3>
  {/if}
</div>
