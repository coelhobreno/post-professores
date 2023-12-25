import { Container, Title, Info, Header, Items, TitleItem, Actions, View, IconView, Edit, IconEdit, ButtonDelete, IconRemove } from './styles'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useAuthValue } from '../../context/AuthContext'
import { useDeleteDocument } from '../../hooks/useDeleteDocument'
import { BoxLoading } from '../../components/Others/Loading'
import NoPost from '../../components/Others/NoPost'

const Dashboard = () => {
    const { user } = useAuthValue()

    const uid = user.uid

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

    const { deleteDocument } = useDeleteDocument("posts")

    return(
        <Container>

            {posts && posts.length == 0 ? (
                <NoPost
                    title="Você ainda não possui posts!"
                    redirect="Criar post"
                    route="/post/create"
                />
            ) : (
                <>
                        
                    {loading && !posts && <BoxLoading/>}
                    {posts && (
                        <>
                            <Title>Dashboard</Title>
                            <Info>Edite os seus posts</Info>
                            <Header>
                                <span>Título</span>
                                <span>Ações</span>
                            </Header>
                            {posts.map((post) => (
                                <Items key={post.id}>
                                    <TitleItem>{post.title}</TitleItem>
                                    <Actions>
                                        <View to={`/post/${post.id}`}><IconView/></View>

                                        <Edit to={`/post/edit/${post.id}`}><IconEdit/></Edit>
                                            
                                        <ButtonDelete onClick={() => deleteDocument(post.id)}><IconRemove/></ButtonDelete>
                                    </Actions> 
                                </Items>
                            ))}

                        </>
                    )}
                </>
            )}

        </Container>















        // <div className={styles.dashboard}>
        //         {posts && posts.length == 0 ? (
        //             <div className={styles.no_post}>
        //                 <p>Não foram encontrados posts!</p>
        //                 <Link to="/post/create" className="btn">Crie seu primeiro post</Link>
        //             </div>
        //         ) : (
        //             <>
                        
        //                 {loading && !posts && <p>Carregando...</p>}
        //                 {posts &&(
        //                     <>
        //                         <h1>Dashboard</h1>
        //                         <p>Edite os seus posts</p>
        //                         <div className={styles.header}>
        //                             <span>Título</span>
        //                             <span>Ações</span>
        //                         </div>
        //                         {posts.map((post) => (
        //                         <div className={styles.itens} key={post.id}>
        //                             <p>{post.title}</p>
        //                             <div className={styles.actions}>
        //                                 <Link to={`/post/${post.id}`}>Ver</Link>

        //                                 <Link to={`/post/edit/${post.id}`}>Editar</Link>
                                        
        //                                 <button onClick={() => deleteDocument(post.id)}>Excluir</button>
        //                             </div> 
        //                         </div>
        //                     ))}

        //                     </>
        //                 )}
        //             </>
        //         )}
        // </div>
    )
}

export default Dashboard