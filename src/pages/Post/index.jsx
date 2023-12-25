import { PostContainer, Title, Description, Image, WrapperContent, Item, CommentContainer } from './styles'

//hooks
import { useParams } from 'react-router-dom'

//posts
import { useFetchDocument } from '../../hooks/useFetchDocument'

//commments
import { useFetchCommentarys } from '../../hooks/useFetchCommentarys'

//context
import { useAuthValue } from '../../context/AuthContext'

import { BoxLoading } from '../../components/Others/Loading'

import InputComment from '../../components/Others/InputComment'
import CommentsArea from '../../components/Others/CommentsArea'

const Post = () => {

    const { id } = useParams()
    const { user } = useAuthValue()

    const { document: post, loading  } = useFetchDocument("posts", id)
    
     const { docComments, loading: loadingComments, error: errorComments } = useFetchCommentarys("comments", id)
    
    return (

        <>
            {!post && loading && <BoxLoading/>}
            {post && (
                <>
                    <PostContainer>
                        <Title>{post.title}</Title>

                        <Description>{post.description}</Description>

                        <Image src={post.image}/>

                        <WrapperContent>
                            {post.inputState.map((item, index) =>(
                               <Item key={index}>
                                   <h2>{item.subTitle}</h2>
                                   <p>{item.body}</p>
                               </Item>
                           ))}
                        </WrapperContent>
                    </PostContainer>
                    
                    {/*Input Area*/}
                    <CommentContainer>
                        <InputComment
                            user={user}
                            idPost={id}
                        />


                        {/*Comments Area*/}
                        <CommentsArea
                            docComments={docComments}
                            user={user}
                        />
                        
                    </CommentContainer>
                </>
            )}
        </>

    )
}

export default Post