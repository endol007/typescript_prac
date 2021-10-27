import React from 'react';
import styled from 'styled-components';
import BoardInfo from '../components/BoardInfo';

const Home = (props: any) => {

  const goBoardWrite = () => {
    props.history.push('/board');
  }

  return (
        <Container>
            <button onClick={goBoardWrite}>게시판 작성</button>
            <BoardInfo props={props}/>
        </Container>
  );
};

export default Home;

const Container = styled.div`
    text-align: center;
    margin: 20px auto;
    & > button {
        margin-bottom: 10px;
        width: 100px;
    }
`;
