import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 90%;
    
    margin: 0 auto;
    
    text-align: center;
`

export const Title = styled.h1`
    font-size: 30px;
    font-weight: 600;

    line-height: 32px;
`

export const Description = styled.div`
    color: var(--text-tertiary);

    margin-top: 5px;
`

export const Form = styled.form`
    margin-top: 15px;

    display: flex;
    flex-direction: row;
`

export const PostsArea = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    gap: 25px;

    margin-top: 25px;
`