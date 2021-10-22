import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { history } from '../redux/index';

const BoardInfo = () => {
  const boards = useSelector((state: RootState) => state.board.data);
  return (
        <BoardInfoWrap>
            <BoardInfos>
                <div>제목</div>
                <div><span>내용</span></div>
                <div>작성자</div>
            </BoardInfos>
            {boards.map((item: any, idx: number) => (
                    <BoardInfos key={idx} onClick={() => {
                      history.push('/detail', item);
                    }}>
                    <div>{item.payload.title}</div>
                    <div><span>{item.payload.comment}</span></div>
                    <div>{item.payload.name}</div>
                    </BoardInfos>
            ))}
        </BoardInfoWrap>
  );
};

export default React.memo(BoardInfo);

const BoardInfoWrap = styled.div`
    width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
`;

const BoardInfos = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(0, 3fr) 1fr;
    min-height: 0;
    min-width: 0;
    & > div{
        border: 1px solid black;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
