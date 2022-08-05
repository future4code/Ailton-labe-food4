import React from "react";
import "./Modal.css";


const Modal = props => {
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <div>
            <p>Selecione a quantidade desejada</p>
            <form >
                <label>Quantidade desejada</label>
                <select
                    label={"Quantidade desejada"}
                >
                    <option value='' disabled style={{ display: 'none' }}></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                </select>
            </form>
            <button>Adicionar ao carrinho</button>
            </div>    
            
        </div>
    )
}

export default Modal;