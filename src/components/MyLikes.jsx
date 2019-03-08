import React, { Component } from 'react';

import Page from './ui/Page';
import Post from './ui/Post';

import { BACKEND_URL } from '../config';

export default class MyLikes extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    let localLikes = localStorage.getItem('insta-clone-likes');
    let localBooks = localStorage.getItem('insta-clone-books');

    if (localLikes) {
      localLikes = JSON.parse(localLikes);
    } else {
      return;
    }
    if (localBooks) {
      localBooks = JSON.parse(localBooks);
    }

    const promises = [];
    const likedPosts = [];
    for (let i = 0; i < localLikes.length; i += 1) {
      const likeId = localLikes[i];
      promises.push(
        new Promise((resolve) => {
          fetch(BACKEND_URL + '/post?id=' + likeId)
            .then(res => res.json())
            .then((posts) => {
              const post = posts[0];
              let bookmarked = false;
              if (localBooks) {
                if (localBooks.includes(post.id)) {
                  bookmarked = true;
                }
              }
              likedPosts.push({
                ...post,
                liked: true,
                bookmarked,
                avatarUrl: post.avatar_url,
                pictureUrl: post.picture_url,
                text: post.content,
              });
              resolve();
            });
        }),
      );
    }

    Promise.all(promises).then(() => {
      this.setState({ posts: likedPosts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <Page>
        <h2 style={{ textAlign: 'center' }}>My Liked Posts</h2>
        {posts.length > 0 ? (
          posts.map(post => <Post key={post.id} {...post} />)
        ) : (
          <h2 style={{ textAlign: 'center' }}>
            {"You haven't liked any posts yet!"}
          </h2>
        )}
      </Page>
    );
  }
}
