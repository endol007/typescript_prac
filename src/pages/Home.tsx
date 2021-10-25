import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import BoardInfo from '../components/BoardInfo';
import { history } from '../redux/index';
import { boardDataActions } from '../redux/board/slice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(boardDataActions.getBoards());
  }, [dispatch]);

  const goBoardWrite = () => {
    history.push('/board');
  }

  return (
        <Container>
            <button onClick={goBoardWrite}>게시판 작성</button>
            <BoardInfo/>
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
