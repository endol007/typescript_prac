import React, { ChangeEvent, FormEvent, useState } from 'react';
import useStore from '../mobx/useStores';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';

const BoardDetail = (
    props: {
        history: any, 
        location: {
            state: {title: string, comment: string, name: string}
        }
        match: {params: {id: number}
        }
    }) => {
    type inputFormState = {title: string, name: string, comment: string}
    const [form, setForm] = useState<inputFormState>({
        title: '',
        name: '',
        comment: ''
    })
    const item = props.location.state;
    const {boardMobx} = useStore();

    const goBack = () => {
        props.history.push('/');
    }
    const { title, comment, name} = form;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const deleteBoard = () => {
        boardMobx.deleteBoard(props.match.params.id);
        props.history.push('/');
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        boardMobx.updateBoard(props.match.params.id, form);
        setForm({
            title: '',
            name: '',
            comment: ''
        })
        props.history.push('/');
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
                <button onClick={deleteBoard}>삭제</button><br/>
                <form onSubmit={onSubmit}>
                    <input placeholder="제목을 입력하세요" name="title" value={title} onChange={onChange}/><br/>
                    <input placeholder="내용을 입력하세요" name="comment" value={comment} onChange={onChange}/><br/>
                    <input placeholder="이름을 입력하세요" name="name" value={name} onChange={onChange}/><br/>
                    <button type='submit'>수정</button>
                </form>
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
