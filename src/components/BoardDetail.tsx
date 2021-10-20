import React from "react";
import styled from "styled-components";

const BoardDetail = (props: any) => {
    const item = props.location.state;
    return(
        <Container>
            <p>제목: {item.title}</p>
            <p>내용: {item.comment}</p>
            <p>작성자: {item.name}</p>
        </Container>
    )
}

export default BoardDetail;

const Container = styled.div`
    text-align: center;
`;