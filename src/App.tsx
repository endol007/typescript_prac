import React from 'react';
import styled from "styled-components";
import CommentInsert from './components/CommentInsert';
import CommentList from './components/CommentList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux';
import { addComment, removeComment, toggleComment } from './redux/modules/index';
import GithubProfileLoader from './components/GithubProfileLoader';

function App() {
  const comment = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addComment(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleComment(id));
  }

  const onRemove = (id: number) => {
    dispatch(removeComment(id));
  }

  return (
    <Container>
    {/* <CommentInsert onInsert={onInsert}/>
    <CommentList comment={comment} onToggle={onToggle} onRemove={onRemove}/> */}
    <GithubProfileLoader />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  margin-left: -150px;

`;