import React, { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { Container, Outlined, TextareaField } from './textarea.styled';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    placeholder: string;
}
const Textarea: React.FC<TextareaProps> = ({ id, ...rest }) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        textAreaRef.current!.style.height = 'auto';
        textAreaRef.current!.style.height = `${
            textAreaRef.current!.scrollHeight + 10
        }px`;
    }, [rest.value]);
    return (
        <Container disabled={rest.disabled}>
            <TextareaField
                {...rest}
                value={rest.value || ''}
                placeholder=""
                ref={textAreaRef}
            />
            <Outlined>{rest.placeholder}</Outlined>
        </Container>
    );
};

export default Textarea;
