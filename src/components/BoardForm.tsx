import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { addBoard } from '../redux/board/actions';
import { useDispatch } from 'react-redux';
import { history } from '../redux/index';
const BoardForm = (props: any) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        id: 0,
        title: '',
        name: '',
        comment: ''
    })
    const {title, name, comment, id} = form;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addBoard(id, title, name, comment)); //클릭시 addBoard 디스패치
        setForm({
            id: id+1,
            title: '',
            name: '',
            comment: '',
        })
    }
    return(
        <form onSubmit={onSubmit}>
            <InputWrap>
                <span>제목 : </span>
                <input name="title" value={title} onChange={onChange}></input>
            </InputWrap>
            <InputWrap>
                <span>내용 : </span>
                <input name="comment" value={comment} onChange={onChange}></input>
            </InputWrap>
            <InputWrap>
                <span>작성자 : </span>
                <input name="name" value={name} onChange={onChange}></input>
            </InputWrap>
            
            <button type='submit'>작성</button>
        </form>
    )
}

export default BoardForm;

const InputWrap = styled.div`
    width: 230px;
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
`;