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
    }
    if (localBooks) {
      localBooks = JSON.parse(localBooks);
    } else {
      return;
    }

    const promises = [];
    const bookmarkedPosts = [];
    for (let i = 0; i < localBooks.length; i += 1) {
      const bookId = localBooks[i];
      promises.push(
        new Promise((resolve) => {
          fetch(BACKEND_URL + '/post?id=' + bookId)
            .then(res => res.json())
            .then((posts) => {
              const post = posts[0];
              let liked = false;
              if (localLikes) {
                if (localLikes.includes(post.id)) {
                  liked = true;
                }
              }
              bookmarkedPosts.push({
                ...post,
                liked,
                bookmarked: true,
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
      this.setState({ posts: bookmarkedPosts });
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <Page>
        <h2 style={{ textAlign: 'center' }}>My Bookmarked Posts</h2>
        {posts.length > 0 ? (
          posts.map(post => <Post key={post.id} {...post} />)
        ) : (
          <h2 style={{ textAlign: 'center' }}>
            {"You haven't bookmarked any posts yet!"}
          </h2>
        )}
      </Page>
    );
  }
}
