import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 90%;
    
    margin: 0 auto;
    
    text-align: center;
`

export const NameSearch = styled.h1`
    font-size: 25px;
    font-weight: 500;

    > span {
        color: var(--primary);
        text-decoration: underline;
    }
`

export const PostsArea = styled.div`
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

    gap: 25px;

    margin-top: 20px;
`