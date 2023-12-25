{/*Gerenciamento dos subtitulos e conteúdos*/}
export const manageContent = (action, inputState, setInputState) => {
    let newInputState

    if(action == 'add' && inputState.length < 5){
        const section = { subTitle: "", content: "" }
        newInputState  = [...inputState, section ]
    }else if(action == 'remove' && inputState.length > 1){
        newInputState = inputState.slice(0, -1)
    }else{
        return
    }

    setInputState(newInputState)
}

export const handleInputChange = (e, index, field, inputState, setInputState) => {
    const newModification = inputState.map((item, indexItem) => {
        if(index == indexItem){
            return {...item, [field]: e.target.value}
        }

        return item
    })

    setInputState(newModification)
}