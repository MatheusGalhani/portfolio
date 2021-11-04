import styled from 'styled-components';

interface ContainerProps {
    disabled?: boolean;
}
export const Container = styled.label<ContainerProps>`
    display: flex;
    position: relative;
    padding-top: 0.5rem;
    margin: 1rem 0;
    overflow: hidden;
    color: ${({ theme }) => theme.color.textColor};
    opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
    width: 100%;
`;

export const TextareaField = styled.textarea`
    display: flex;
    width: 100%;
    padding: 1rem;
    margin: 0;
    border: 1px solid ${({ theme }) => theme.color.lightBlue};
    border-top-color: transparent;
    border-radius: 0.25rem;
    background-color: transparent;
    color: ${({ theme }) => theme.color.textColor};
    outline: none;    
    resize: none;
`;

export const Outlined = styled.span`
    display: flex;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    font-size: 0.75rem;
    border-color: ${({ theme }) => theme.color.lightBlue};
    color: ${({ theme }) => theme.color.lightBlue};
    cursor: text;
    &::after {
        content: '';
        display: block;
        margin-top: 0.5rem;
        min-width: 0.75rem;
        border-top: 1px solid ${({ theme }) => theme.color.lightBlue};
        flex-grow: 1;
        margin-left: 0.25rem;
        border-right: 1px solid transparent;
        border-radius: 0 0.25rem;
    }
    &::before {
        content: '';
        display: block;
        margin-top: 0.5rem;
        min-width: 0.75rem;
        border-top: 1px solid ${({ theme }) => theme.color.lightBlue};
        margin-right: 0.25rem;
        border-left: 1px solid transparent;
        border-radius: 0.25rem 0;
    }
`;
