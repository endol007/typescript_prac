import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { requestData } from '../redux/board/actions';
import { history } from '../redux/index';

const BoardInfo = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.boards.payload);
  // 7. useSelector로 데이터 받아서 확인

  return (
        <BoardInfoWrap>
            <BoardInfos>
                <div>제목</div>
                <div><span>내용</span></div>
                <div>작성자</div>
            </BoardInfos>
            {boards.map((item: any) => (
                    <BoardInfos onClick={() => {
                      history.push('/detail', item);
                    }}>
                    <div>{item.title}</div>
                    <div><span>{item.comment}</span></div>
                    <div>{item.name}</div>
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
