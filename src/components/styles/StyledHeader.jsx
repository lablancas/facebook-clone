import styled from 'styled-components';

export default styled.nav`
  position: fixed;
  z-index: 1000;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sect {
    display: flex;
    align-items: center;
  }
  .logo {
    height: 40px;
    width: 40px;
    margin: 10px;
    background-image: url('https://cdn130.picsart.com/259430940027212.png');
    background-position: center;
    background-size: contain;
  }
  .line-hor {
    height: 30px;
    width: 1px;
    background: darkgrey;
  }
  .title {
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 40px;
    margin: 10px;
  }
  .right-link {
    background-size: contain;
    width: 25px;
    height: 25px;
    margin: 5px;
    color: rgba(0, 0, 0, 0);
  }
  .likes-link {
    background-image: url('https://clipart.info/images/ccovers/1484772652Heart-png-black-transparent.png');
  }
  .books-link {
    background-image: url('https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-bookmark-thin.png');
  }
  .profile-link {
    background-image: url('https://cdn2.iconfinder.com/data/icons/4web-3/139/header-account-image-line-512.png');
    width: 35px;
    height: 35px;
    margin: 0 15px 0 0;
  }
`;
