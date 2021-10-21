import React from 'react';
import styled from 'styled-components';
import BoardForm from './BoardForm';
import { history } from '../redux/index';

const BoardWrite = () => (
        <Container>
            <BoardForm/>
            <button onClick={() => {
              history.push('/');
            }}>홈으로</button>
        </Container>
);

export default BoardWrite;

const Container = styled.div`
    margin: 100px auto;
    width: 230px;
    height: 200px;
    border: 1px solid black;
    padding: 10px;
    & > form > button{
        float: right;
    }
    & > button {
        position: relative;
        top: 40px;
        left: 95px;
    }
`;
