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
    if(form.title === '' || form.name === '' || form.comment === ''){
      alert('내용을 작성하세요')
      return;
    }
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
                <label>제목 : </label>
                <input placeholder="제목을 입력하세요" name="title" value={title} onChange={onChange}/>
            </InputWrap>
            <InputWrap>
                <label>내용 : </label>
                <input placeholder="내용을 입력하세요" name="comment" value={comment} onChange={onChange}/>
            </InputWrap>
            <InputWrap>
                <label>작성자 : </label>
                <input placeholder="이름을 입력하세요" name="name" value={name} onChange={onChange}/>
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
