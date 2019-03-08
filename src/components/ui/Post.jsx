import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StyledPost from '../styles/StyledPost';

class Post extends Component {
  state = {
    liked: false,
    bookmarked: false,
  };

  componentWillMount() {
    const { likes } = this.props;
    this.setState({ likes });
  }

  handleLike = () => {
    const { likes, liked } = this.state;
    if (!liked) {
      this.setState({
        liked: true,
        likes: likes + 1,
      });
    }
  };

  handleBookmark = () => {
    const { bookmarked } = this.state;
    if (!bookmarked) {
      this.setState({
        bookmarked: true,
      });
    }
  };

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
          <div onDoubleClick={this.handleLike} className="like-button" />
          <div
            onDoubleClick={this.handleBookmark}
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
  // id: PropTypes.number.isRequired,
  text: PropTypes.string,
  avatarUrl: PropTypes.string,
  pictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Post;
