import React, { useEffect, useState } from "react";
import SelectedPiercings from "../../atoms/SelectedPiercings";
import { useRecoilState } from "recoil";
import SearchedTerm from "../../atoms/SearchedTerm";
import './Favorites.css'
import IntPiercings from "../../interfaces/piercings";

function Favorites({ SearchTermVar, ShowVar }: any) {
    const [filteredPiercings, setFilteredPiercings] = useState<IntPiercings[]>([]);
    const [favoriteList, setFavoriteList] = useRecoilState(SelectedPiercings);
    const [searchTerm, setSearchTerm] = useRecoilState(SearchedTerm);

    useEffect(() => {
        if (searchTerm) {
            const filteredItems = ShowVar.filter((item: any) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPiercings(filteredItems);
        } else {
            setFilteredPiercings(ShowVar);
        }
    }, [searchTerm, ShowVar]);

    const removeFromCart = (indexToRemove: number) => {
        setFavoriteList(prevState => prevState.filter((item, index) => index !== indexToRemove));
    };

    return (
        <div id="Favorites">
            <h4>Aqui você pode ver todos os itens no carrinho antes de finalizar a compra</h4>
            {filteredPiercings.map((item: any, index: number) => (
                <div className="Piercing" key={item.id}>
                    <img src={item.image} alt={'Foto do item número ' + item.id} />
                    <br />
                    <p className="name">{item.name}</p>
                    <p className="price">R${item.price},00</p>
                    <button onClick={() => removeFromCart(index)}>Remover do Carrinho</button>
                </div>
            ))}
            <h4 style={{ display: favoriteList.length === 0 ? 'block' : 'none' }}>Nenhum item adicionado ao carrinho...</h4>
        </div>
    )
}

export default Favorites;
