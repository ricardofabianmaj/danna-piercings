import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import './SelectedPiercing.css';

import SelectedPiercings from "../../atoms/SelectedPiercings";
import TotalPriceSelector from "../../atoms/TotalPrice";

import IntPiercings from "../../interfaces/piercings";

function SelectedPiercing() {
    const [selectedPiercings, setSelectedPiercings] = useRecoilState(SelectedPiercings);
    const TotalPrice = useRecoilValue(TotalPriceSelector);
    const [seeCart, setSeeCart] = useState(false);

    // Função para remover um item do carrinho
    const removeFromCart = (indexToRemove: number) => {
        setSelectedPiercings(prevState => prevState.filter((item, index) => index !== indexToRemove));
    };

    const toggleCartDisplay = () => {
        setSeeCart(prevState => !prevState);
    };

    function SendMessage(){
        var message :string = 'Olá Danna, tudo bem? \n Eu gostaria fazer o seguinte pedido \n'
        selectedPiercings.forEach((item: IntPiercings) => {
            message += `${item.name} - R$ ${item.price},00 \n`
        })
        message += `Total: R$ ${TotalPrice},00`
        const whatsappLink = `https://wa.me/558386562751?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <div id="SelectedPiercing">
            <h1>Carrinho</h1>
            <ul  id="cart-container"  >
                {selectedPiercings.map((item: IntPiercings, index) => (
                    <li key={index} style={{ display: seeCart ? 'block' : 'none' }}>
                        <p className="SPElementent">{item.name} — R${item.price},00 </p>
                        <button
                            className="RemoveButton"
                            onClick={() => removeFromCart(index)}>Remover</button>
                    </li>
                ))}
            </ul>
            <p
            id="WhenClosedCart"
            style={{ display: seeCart ? 'none' : 'block' }}>{selectedPiercings.length} item(s) no carrinho...</p>
            <button
                className="ButtonCart OpenCloseButton"
                onClick={toggleCartDisplay}
                style={{display: seeCart && selectedPiercings.length !== 0 ? 'block' : 'none'  }}>Fechar Carrinho</button>

            <button
                className="ButtonCart OpenCloseButton"
                onClick={toggleCartDisplay}
                style={{ display: seeCart || selectedPiercings.length ===0 ? 'none' : 'block' }}>Abrir Carrinho</button>

            {selectedPiercings.length === 0 ? (
                <h2 id="EmptyCart"
                className={selectedPiercings.length ===0 ? "ShowTotal onHidden" : "ShowTotal"}>Carrinho Vazio</h2>
            ) : (
                <h2 
                className={selectedPiercings.length ===0 ? "ShowTotal onHidden" : "ShowTotal"}>Total: R${TotalPrice},00</h2>
            )}

            <button 
            id="FinishBuy" 
            className="ButtonCart" 
            onClick={() => SendMessage()}>Finalizar Compra</button>
        </div>
    );
}

export default SelectedPiercing;
