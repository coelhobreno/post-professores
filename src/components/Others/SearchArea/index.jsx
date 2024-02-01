import { InputArea, IconSearch, Input, Button, IconGlass } from './styles'


const SearchArea = ({
    setSearch
}) => {

    return (
        <>
            <InputArea>
                <IconSearch/>
                <Input 
                    type="text" 
                    placeholder='Pesquisa por tags...' 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </InputArea>

            <Button>Pesquisar</Button>
        </>
    )
}

export default SearchArea