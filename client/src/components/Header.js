import {React, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const {logginedUserId} = useContext(UserContext);

  const RandomPost = () => {
    axios.get('/posts/get/postId/')
      .then(res => {
        const postId = res.data.postId;
        const randomValue = Math.floor(Math.random() * postId.length);
        navigate(`/posts/${postId[randomValue].postId}`);
      })
      .catch((error) => {
        console.error('데이터 가져오기 오류:', error);
      })
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">LETS</Navbar.Brand>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {logginedUserId && <Nav.Link href="/mypage/myprofile">내정보</Nav.Link>}
            {logginedUserId && <Nav.Link href="/posts/upload">글쓰기</Nav.Link>}
            {logginedUserId && <Nav.Link href="/user/chatlist">채팅방 목록</Nav.Link>}
            {logginedUserId && <span class="material-symbols-outlined"><Nav.Link onClick={RandomPost}>shuffle</Nav.Link></span>}
          </Nav>
          {/*
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          */}
      </Container>
    </Navbar>
  );
}

export default Header;