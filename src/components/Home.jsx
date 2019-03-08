import React, { Component } from 'react';

import Page from './ui/Page';
import Post from './ui/Post';

import { BACKEND_URL } from '../config';

export default class Home extends Component {
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
    }

    fetch(BACKEND_URL + '/posts')
      .then(res => res.json())
      .then((posts) => {
        const formattedPosts = posts.map((post) => {
          let liked = false;
          let bookmarked = false;
          if (localLikes) {
            if (localLikes.includes(post.id)) {
              liked = true;
            }
          }
          if (localBooks) {
            if (localBooks.includes(post.id)) {
              bookmarked = true;
            }
          }
          return {
            ...post,
            avatarUrl: post.avatar_url,
            pictureUrl: post.picture_url,
            text: post.content,
            liked,
            bookmarked,
          };
        });

        this.setState({ posts: formattedPosts });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <Page>
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </Page>
    );
  }
}
