import React, { ChangeEvent, FormEvent, useState } from 'react';
import useStore from '../mobx/useStores';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import '../styles/styles.css';
import BoardForm from '../components/BoardForm';

const BoardDetail = (
    props: {
        history: any, 
        location: {
            state: {title: string, comment: string, name: string}
        }
        match: {params: {id: number}
        }
    }) => {
    const [updateToggle, setUpdateToggle] = useState<Boolean>(false);
    const item = props.location.state;
    const boardId = props.match.params.id;
    const {boardMobx} = useStore();
    
    const Toggle = () => setUpdateToggle(!updateToggle);
    const goBack = () => { props.history.push('/'); }

    const deleteBoard = () => {
        boardMobx.deleteBoard(boardId);
        goBack();
    }

    const onSubmit = (form: {title: string, name: string, comment: string}) => {
        boardMobx.updateBoard(boardId, form);
        goBack();
    }

    return useObserver(() =>
            <Container>
                <Wrap>
                <Div>
                    <span>제목</span>
                    <span>{item.title}</span>
                </Div>
                <Div>
                    <span>내용</span>
                    <span>{item.comment}</span>
                </Div>
                <Div>
                    <span>작성자</span>
                    <span>{item.name}</span>
                </Div>
                </Wrap>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={deleteBoard}>삭제</button>
                <button onClick={Toggle}>수정</button><br/>
                <div className={updateToggle ? "updateForm" : "updateFormHidden"}>
                    <BoardForm onSubmit={onSubmit}/>
                </div>
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
