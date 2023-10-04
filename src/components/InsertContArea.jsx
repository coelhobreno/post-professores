import React from "react";

import {useValueInsertContArea } from "../context/InsertContextContArea";

import { BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";

import styles from "./InsertContArea.module.css"

const InsertContArea = () => {
    //Se for o último, mostrar a lixeira operador ternario
    
    const { inputState, dispatch } = useValueInsertContArea()

    const addSubTitleAndBody = () => {
        if(inputState.length <= 4){
            dispatch({type: "ADD"})
        }
    }

    const removeSubTitleAndBody = () => {
        if(inputState.length > 1){
            dispatch({type: "REMOVE", payload: {
                index: inputState.length-1
            }})
        }
    }

    return (
        <>

            {inputState.map((item, index) => (
                index != inputState.length-1 ? (
                    //Adicionando key em fragment
                    
                    <React.Fragment key={index}>
                        
                        <label>
                            <span>Subtítulo {index+1}</span>
                            <textarea
                                type="text"
                                placeholder={`Insira o subtítulo ${index+1}`} 
                                
                                
                                onChange={e => dispatch({type: "CHANGE_SUBTITLE", payload: {
                                    index,
                                    value: e.target.value,
                                }})}

                                value={item.subTitle}

                                required
                            ></textarea>
                        </label>

                        <label>
                            <span>Conteúdo {index+1}</span>
                            <textarea
                                type="text"
                                placeholder={`Insira o conteúdo ${index+1}`}  

                                onChange={e => dispatch({type: "CHANGE_BODY", payload: {
                                    index,
                                    value: e.target.value,
                                }})}

                                 value={item.body}
                                
                                required
                            ></textarea>
                        </label>
                    </React.Fragment>
                ) : (
                    <React.Fragment key={index}>
                        
                        <label >
                            <span>Subtítulo {index+1}</span>
                            <textarea
                                type="text"
                                placeholder={`Insira o subtítulo ${index+1}`} 
                                
                                onChange={e => dispatch({type: "CHANGE_SUBTITLE", payload: {
                                    index,
                                    value: e.target.value,
                                }})}

                                value={item.subTitle}

                                required
                            ></textarea>
                        </label>

                        <label>
                            <span>Conteúdo {index+1}</span>
                            <textarea
                                type="text"
                                placeholder={`Insira o conteúdo ${index+1}`}  

                                onChange={e => dispatch({type: "CHANGE_BODY", payload: {
                                    index,
                                    value: e.target.value,
                                }})}

                                value={item.body}

                                required
                            ></textarea>
                        </label>
                        <div className={styles.handle_quantity}>
                            <div className="btn dark-outline" onClick={addSubTitleAndBody}><BsPlusCircleFill/></div>
                            <div className="btn dark-outline" onClick={() => removeSubTitleAndBody()}><BsTrash3Fill/></div>
                        </div>
                    </React.Fragment>
                ) 
            ))}
        </>
    )
}



export default InsertContArea