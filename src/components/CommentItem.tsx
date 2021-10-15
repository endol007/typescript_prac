import React from 'react';
import { CSSProperties } from 'styled-components';
import { Comment } from "../redux/modules/index";

type CommentItemProps = {
    comment: Comment;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const CommentItem = ({ comment, onToggle, onRemove}: CommentItemProps) => {
    const textStyle: CSSProperties = {
        textDecoration: comment.done ? 'line-through' : 'none'
    };
    const removeStyle: CSSProperties = {
        marginLeft: 8,
        color: 'red'
    };

    const handleToggle = () => {
        onToggle(comment.id);
        console.log(comment.id);
    };

    const handleRemove = () => {
        onRemove(comment.id);
    };

    return (
        <li>
            <span onClick={handleToggle} style={textStyle}>
                {comment.text}
            </span>
            <button onClick={handleRemove} style={removeStyle}>
                삭제
            </button>
        </li>
    )
}

export default CommentItem;