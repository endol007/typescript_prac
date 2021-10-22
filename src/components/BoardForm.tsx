import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { boardDataActions } from '../redux/board/slice';

const BoardForm = () => {
  const dispatch = useDispatch();
  type initialState = {title: string, name: string, comment: string}
  const [form, setForm] = useState<initialState>({
    title: '',
    name: '',
    comment: '',
  });

  const {
    title, name, comment
  } = form;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(boardDataActions.sendBoards(form));
    setForm({
      title: '',
      name: '',
      comment: '',
    });
  };
  return (
        <form onSubmit={onSubmit}>
            <InputWrap>
                <span>제목 : </span>
                <input name="title" value={title} onChange={onChange}/>
            </InputWrap>
            <InputWrap>
                <span>내용 : </span>
                <input name="comment" value={comment} onChange={onChange}/>
            </InputWrap>
            <InputWrap>
                <span>작성자 : </span>
                <input name="name" value={name} onChange={onChange}/>
            </InputWrap>

            <button type='submit'>작성</button>
        </form>
  );
};

export default BoardForm;

const InputWrap = styled.div`
    width: 230px;
    justify-content: space-between;
    display: flex;
    margin-bottom: 20px;
`;
