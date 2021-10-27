import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import { boardData } from '../mobx/boardMobx';
import useStore from '../mobx/useStores';

const BoardInfo = ({props}: any) => {
    const {boardMobx} = useStore();

    useEffect(() => {
        boardMobx.getBoard();
    }, [])
    return useObserver(() =>
            <BoardInfoWrap>
                <BoardInfos>
                    <span>제목</span>
                    <span>내용</span>
                    <span>작성자</span>
                </BoardInfos>
                {boardMobx.board ? 
                    boardMobx.board.map((item: boardData, idx: number) => {
                        return <BoardInfos key={idx} onClick={() => {
                                    props.history.push({
                                        pathname: `/detail/${item.id}`, 
                                        state: {
                                           title: item.title,
                                           name: item.name,
                                           comment: item.comment
                                        }}
                                    );
                                    }}>
                                    <span>{item.title}</span>
                                    <span>{item.comment}</span>
                                    <span>{item.name}</span>
                                </BoardInfos>
                    })
                : null}
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
