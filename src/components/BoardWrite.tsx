import React from 'react';
import styled from 'styled-components';
import BoardForm from './BoardForm';

const BoardWrite = (props: any) => {
    return(
        <Container>
            <BoardForm/>
            <button onClick={() => {
                    props.history.push("/")
            }}>홈으로</button>
        </Container>
    )
}

export default BoardWrite;

const Container = styled.div`
    margin: 0 auto;
    width: 230px;
    height: 200px;
    border: 1px solid black;
    padding: 10px;
    & > form > button{
        float: right;
    }
`;

const InputWrap = styled.div`
    width: 230px;
    justify-content: space-between;
    display: flex;
`;