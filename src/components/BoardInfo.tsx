import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { history } from '../redux/index';

const BoardInfo = () => {
    const boards = useSelector((state: RootState) => state.board.data);
    const boardsData = () => {
        if(boards){
            return boards.map((item: any, idx: number) => (
                <BoardInfos key={idx} onClick={() => {
                    history.push('/detail', item);
                    }}>
                    <span>{item.payload.title}</span>
                    <span>{item.payload.comment}</span>
                    <span>{item.payload.name}</span>
                </BoardInfos>
        ))}
        else return null
    }
    return (
            <BoardInfoWrap>
                <BoardInfos>
                    <span>제목</span>
                    <span>내용</span>
                    <span>작성자</span>
                </BoardInfos>
                {boardsData()}
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
    & > span{
        border: 1px solid black;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;
