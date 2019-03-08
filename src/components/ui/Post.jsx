import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledPost from '../styles/StyledPost';

class Post extends Component {
  state = {
    liked: false,
    bookmarked: false,
  };

  componentWillMount() {
    const { likes, liked, bookmarked } = this.props;
    this.setState({ likes: liked ? likes + 1 : likes, liked, bookmarked });
  }

  handleLike = () => {
    const { likes, liked } = this.state;
    const { id } = this.props;

    let localLikes = localStorage.getItem('insta-clone-likes');
    if (!localLikes) {
      localLikes = [];
    } else localLikes = JSON.parse(localLikes);

    if (!liked) {
      this.setState({
        liked: true,
        likes: likes + 1,
      });
      localStorage.setItem(
        'insta-clone-likes',
        JSON.stringify([...localLikes, id]),
      );
    } else {
      this.setState({
        liked: false,
        likes: likes - 1,
      });
      localLikes.splice(localLikes.indexOf(id), 1);
      localStorage.setItem('insta-clone-likes', JSON.stringify(localLikes));
    }
  };

  handleBookmark = () => {
    const { bookmarked } = this.state;
    const { id } = this.props;

    let localBooks = localStorage.getItem('insta-clone-books');
    if (!localBooks) {
      localBooks = [];
    } else localBooks = JSON.parse(localBooks);

    if (!bookmarked) {
      this.setState({
        bookmarked: true,
      });
      localStorage.setItem(
        'insta-clone-books',
        JSON.stringify([...localBooks, id]),
      );
    } else {
      this.setState({
        bookmarked: false,
      });
      localBooks.splice(localBooks.indexOf(id), 1);
      localStorage.setItem('insta-clone-books', JSON.stringify(localBooks));
    }
  };

  handleNothing = () => {};

  render() {
    const {
      // id,
      text,
      avatarUrl,
      pictureUrl,
      username,
    } = this.props;
    const { liked, bookmarked, likes } = this.state;
    return (
      <StyledPost liked={liked} bookmarked={bookmarked}>
        <div className="post-header">
          <div
            className="post-avatar"
            style={{ backgroundImage: `url('${avatarUrl}')` }} />
          <div className="post-user">{username}</div>
        </div>
        <div
          className="post-picture"
          style={{ backgroundImage: `url(${pictureUrl})` }} />
        <div className="post-links">
          <div
            tabIndex="0"
            role="button"
            onKeyPress={this.handleNothing}
            onClick={this.handleLike}
            className="like-button" />
          <div
            tabIndex="0"
            role="button"
            onKeyPress={this.handleNothing}
            onClick={this.handleBookmark}
            className="bookmark-button" />
        </div>
        <div className="post-likes">
          {likes}
          {' '}
Like
          {likes === 1 ? '' : 's'}
        </div>
        <div className="post-text">{text || ''}</div>
      </StyledPost>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool,
  bookmarked: PropTypes.bool,
  text: PropTypes.string,
  avatarUrl: PropTypes.string,
  pictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;
