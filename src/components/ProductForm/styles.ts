import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    padding-inline: 10rem;
    padding-block: 2.5rem;
    border-radius: 0.5rem;
    background-color: #f5f5f5;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    width: 28rem;
    height: 3.5rem;
    padding-inline-start: 1rem;
    margin-top: 5px;
    border: 2px solid #d8d8d8;
    border-radius: 5px;
    outline: none;
    margin-inline: 2rem;
    transition: border-color 0.3s ease;

    :focus {
        border-color: #4285f4;
    }
`

export const Select = styled.select`
    padding: 8px;
    margin-top: 5px;
    border: 2px solid #d8d8d8;
    margin-inline: 1rem;
    border-radius: 4px;
`

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #0056b3;
    }
`
