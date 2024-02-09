import React, { useEffect, useState } from "react";
import './ShowComponent.css'
import { useRecoilState } from "recoil";
import SelectedPiercings from "../../atoms/SelectedPiercings";
import IntPiercings from "../../interfaces/piercings";
import SearchedTerm from "../../atoms/SearchedTerm";

function removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ShowComponent({ SearchTermVar, ShowVar }: any) {
    const [SelectedPiercingsVar, setSelectedPiercingVar]: any = useRecoilState(SelectedPiercings);
    const [filteredPiercings, setFilteredPiercings] = useState([]);

    var [searchTerm, setSearchTerm] = useRecoilState(SearchedTerm);

    useEffect(() => {
        if (searchTerm) {
            const filteredItems = ShowVar.filter((item: any) =>
                removeAccents(item.name).toLowerCase().includes(searchTerm.toLowerCase()) || item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPiercings(filteredItems);
        } else {
            setFilteredPiercings(ShowVar);
        }
    }, [searchTerm, ShowVar]);

    function AddPiercing(piercingToAdd: IntPiercings) {
        setSelectedPiercingVar([...SelectedPiercingsVar, piercingToAdd]);
        console.log(SelectedPiercings);

    };

    return (
        <div className="ShowComponent">
            {filteredPiercings.map((item: any) => (
                <div className="Piercing" key={item.id}>
                    <img src={item.image} alt={'Foto do item número ' + item.id} />
                    <br />
                    <p className="name">{item.name}</p>
                    <p className="price">R${item.price},00</p>
                    <button onClick={() => AddPiercing(item)}>Adicionar ao Carrinho</button>
                </div>
            ))}

            {filteredPiercings.length === 0 && <h1>Não existe nenhum item com esse nome</h1>}
        </div>
    );
}

export default ShowComponent;
