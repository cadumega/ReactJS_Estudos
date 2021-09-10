// Ira como uma prop especifica o testando 1,2,3 , pegando um item dentro de um componente

import React from 'react';
import styled from 'styled-components';

const ModalBackgornd = styled.div `
    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:90;
    background-color:rgba(0,0,0,0.7);
    display:flex;
    justify-content:center;
    align-items:center;
`;

const ModalArea = styled.div `
    background-color: #fff;
    padding:10px;
`;

function Modal(props) {

    const handleBackgroundClick = () => {
        props.setVisible(false);
    }


    return (
        <>
            {props.visible === true &&
            <ModalBackgornd onClick={handleBackgroundClick}>
                <ModalArea>
                    {props.children}
                </ModalArea>
            </ModalBackgornd>
            }
        </>
    )
}
export default Modal;