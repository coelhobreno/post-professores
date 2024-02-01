import styled from "styled-components";

export const PostContainer = styled.div`
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;
    border: 1px solid var(--border-outline);
    padding: 30px;
    text-align: center;

    background-color: var(--tertiary);
`

export const Title = styled.div`
    font-size: 30px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 35px;

    @media (max-width: 500px){
        font-size: 18px;
        line-height: 20px;
    }
`

export const Description = styled.div`
    font-size: 16px;

    line-height: 23px;

    margin-top: 10px;
    color: var(--text-tertiary);
`

export const Image = styled.img`
    width: 100%;
    

    margin-top: 20px;
    
    border: 1px solid var(--border-outline);
`

export const WrapperContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`

export const Item = styled.div`
    margin-top: 20px;

    > h2 {
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        text-decoration: underline;

        text-decoration: 2px solid underline;
    }

    > p {
        font-size: 15px;

        color: var(--text-tertiary);

        line-height: 23px;
    }   
`

export const CommentContainer = styled.div`
    width: 90%;
    max-width: 1000px;
    border: 1px solid var(--border-outline);
    margin: 20px auto;
    padding: 20px;

    background-color: var(--tertiary);
`