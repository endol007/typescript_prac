import React from 'react';
import styled from 'styled-components';
import BoardForm from '../components/BoardForm';
import useStore from '../mobx/useStores';

const BoardWrite = (props: any) => {
    const {boardMobx} = useStore();
    const goBack = () => {
        props.history.push('/');
    }

    const onSubmit = (form:{title: string, name: string, comment: string}) => {
        boardMobx.postBoard(form);
    }

    return (
        <Container>
            <BoardForm onSubmit={onSubmit}/>
            <button onClick={goBack}>홈으로</button>
        </Container>
    )
};

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
