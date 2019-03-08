import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
  border: 1px solid lightgrey;
  border-right: none;
  border-left: none;
  background: white;
  width: 100vw;
  @media screen and (min-width: 640px) {
    width: 600px;
    border-right: 1px solid lightgrey;
    border-left: 1px solid lightgrey;
  }
  .post-header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .post-avatar {
    background-color: blue;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: 10px;
  }
  .post-user {
    font-weight: bold;
  }
  .post-picture {
    width: 100%;
    height: 116vw;
    background-color: grey;
    background-size: cover;
    background-position: center;
    @media screen and (min-width: 640px) {
      height: 700px;
    }
    margin-bottom: 10px;
  }
  .post-links {
    display: flex;
    & *:focus {
      outline: none;
    }
  }
  .like-button {
    background-image: ${props => (props.liked
    ? "url('http://www.transparentpng.com/download/heart/heart-amazing-image-download-23.png')"
    : "url('http://www.transparentpng.com/download/heart/picture-heart-outline-png-30.png')")};
    background-size: contain;
    background-repeat: no-repeat;
    margin: 5px;
    margin-left: 10px;
    height: 25px;
    width: 25px;
  }
  .bookmark-button {
    background-image: ${props => (props.bookmarked
    ? "url('https://kb.vmware.com/resource/1509155396000/KM_Bookmark_Icon')"
    : "url('https://i.dlpng.com/static/png/1025871_preview.png')")};
    background-size: contain;
    background-repeat: no-repeat;
    margin: 5px 0;
    height: 26px;
    width: 26px;
  }
  .post-likes {
    font-weight: bold;
    margin: 10px;
  }
  .post-text {
    width: 95%;
    margin: 5%;
    font-weight: bold;
  }
`;
