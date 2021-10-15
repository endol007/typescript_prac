import React from 'react';
import { Comment } from '../redux/modules/index';
import CommentItem from './CommentItem';

type CommentListProps = {
    comment: Comment[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

const CommentList = ({comment, onToggle, onRemove}: CommentListProps) => {
    if(comment.length === 0) return <p>비어있음</p>
    return(
        <ul>
            {comment.map(item => (
                <CommentItem
                    comment={item}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={item.id}
                />
            ))}
        </ul>
    )
}

export default CommentList;