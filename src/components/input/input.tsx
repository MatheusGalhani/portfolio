import React, { InputHTMLAttributes } from 'react';
import { Container, InputField, Outlined } from './input.styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    placeholder: string;
}
const Input: React.FC<InputProps> = ({ id, ...rest }) => {
    return (
        <Container disabled={rest.disabled}>
            <InputField
                {...rest}
                value={rest.value || ''}
                type={rest.type === 'email' ? rest.type : 'text'}
                placeholder=""
            />
            <Outlined>{rest.placeholder}</Outlined>
        </Container>
    );
};

export default Input;
