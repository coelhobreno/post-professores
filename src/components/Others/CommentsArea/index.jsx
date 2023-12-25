import CardComment from '../../CardComment/index'

import { NoComments, TitleComment, DescComment, HaveComment  } from './styles'

const CommentsArea = ({
    docComments,
    user
 }) => {

    return(
        <>
            {docComments && docComments.length == 0 ? (
                <NoComments>
                    <TitleComment>Ainda sem comentários!</TitleComment>
                    <DescComment>Queremos ouvir a sua voz e valorizamos a sua perspectiva! Seja pioneiro, seja o primeiro a adicionar um comentário e compartilhar sua opinião conosco.</DescComment>
                </NoComments>
            ) : (
                <HaveComment>Comentários {docComments && `(${docComments.length})`} </HaveComment>
            )}

            {docComments && docComments.map((comment, index) => (
                
                <CardComment currentComment={comment} canRemove={
                    user ? (
                        user.uid == comment.uid ? true : false
                    ) : false
                } key={index}
                />

            ))}
        </>
    )
}

export default CommentsArea