import React from "react";
import styled from "styled-components";
import { history } from "../redux/index";

const BoardDetail = (props: any) => {
    const item = props.location.state;
    return(
        <Container>
            <Wrap>
            <Div>
                <div>제목</div>
                <div>{item.title}</div>
            </Div>
            <Div>
                <div>내용</div>
                <div>{item.comment}</div>
            </Div>
            <Div>
                <div>작성자</div>
                <div>{item.name}</div>
            </Div>
            </Wrap>
            <button onClick={() => {
                history.push("/")
            }}>뒤로가기</button>
        </Container>
    )
}

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
    & > div{
        border: 1px solid black;
        box-sizing: border-box;
        overflow: hidden;
        word-wrap: break-word;
    }
`;