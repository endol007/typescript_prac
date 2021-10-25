import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/index';
import { boardType } from '../redux/board/types';

const BoardDetail = (props: {location: {state: boardType} }) => {
    const item = props.location.state;
    const goBack = () => {
        history.push('/');
    }
    return (
            <Container>
                <Wrap>
                <Div>
                    <span>제목</span>
                    <span>{item.payload.title}</span>
                </Div>
                <Div>
                    <span>내용</span>
                    <span>{item.payload.comment}</span>
                </Div>
                <Div>
                    <span>작성자</span>
                    <span>{item.payload.name}</span>
                </Div>
                </Wrap>
                <button onClick={goBack}>뒤로가기</button>
            </Container>
    );
};

export default BoardDetail;

const Container = styled.div`
    margin-top 100px;
    text-align: center;
    & > button {
        margin-top: 20px;
    }
`;

const Wrap = styled.div`
    width: 400px;
    margin: 0 auto;
    display: grid;
    border: 1px solid black;
    grid-template-rows: min(0, 1fr) min(0, 1fr) min(0, 1fr);
`;

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    & > span {
        border: 1px solid black;
        box-sizing: border-box;
        overflow: hidden;
        word-wrap: break-word;
    }
`;
