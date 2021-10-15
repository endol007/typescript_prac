import React, { ChangeEvent, FormEvent, useState } from 'react';

type CommentInsertProps = {
    onInsert: (text: string) => void;
}

const CommentInsert = ({ onInsert }: CommentInsertProps) => {
    const [value, setValue] = useState('');
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    };

    return(
        <form onSubmit={onSubmit}>
            <input
                placeholder="할일 입력"
                value={value}
                onChange={onChange}
            />
            <button type="submit">등록</button>
        </form>
    )
}

export default CommentInsert;