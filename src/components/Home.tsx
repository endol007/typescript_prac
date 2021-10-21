import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import BoardInfo from './BoardInfo';
import { requestData } from '../redux/board/actions';
import { history } from '../redux/index';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestData()); // 1. 데이터 요청
  }, []);
  return (
        <Container>
            <button onClick={() => {
              history.push('/board');
            }}>게시판 작성</button>

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
