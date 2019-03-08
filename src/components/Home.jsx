import React, { Component } from 'react';

import Page from './ui/Page';
import Post from './ui/Post';

const BACKEND_URL = 'http://localhost:7770';

export default class Home extends Component {
  state = {};

  componentDidMount() {
    let localLikes = localStorage.get('insta-clone-likes');
    let localBooks = localStorage.get('insta-clone-books');

    if (localLikes) {
      localLikes = JSON.parse(localLikes);
    }
    if (localBooks) {
      localBooks = JSON.parse(localBooks);
    }

    fetch(BACKEND_URL + '/posts')
      .then(res => res.json())
      .then((posts) => {
        console.log(posts);
        // posts.map(post => {
        //   let liked = false
        //   let
        //   if(localLikes){
        //     if(localLikes.includes(post.id))
        //   }
        // })
      });
  }

  render() {
    return (
      <Page>
        <Post
          id={1234}
          text="Hello guys and welcome to my Instagram clone."
          avatarUrl="hello"
          pictureUrl="hello"
          username="hello"
          likes={0} />
      </Page>
    );
  }
}
