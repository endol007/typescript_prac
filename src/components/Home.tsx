import React, { useEffect } from 'react';
import styled from 'styled-components';
import BoardInfo from './BoardInfo';
import { useDispatch } from 'react-redux';
import { requestData } from '../redux/board/actions';

const Home = (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(requestData());
    }, [])
    return (
        <Container>
            <button onClick={() => {
                props.history.push("/board")
            }}>게시판 작성</button>
            
            <BoardInfo props={props}/>
        </Container>
    )
}

export default Home;

const Container = styled.div`
    text-align: center;
    margin: 20px auto;
    & > button {
        width: 100px;
    }
`;