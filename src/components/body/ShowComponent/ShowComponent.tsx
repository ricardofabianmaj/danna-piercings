import React, { useEffect, useState } from "react";
import './ShowComponent.css'
import { useRecoilState } from "recoil";
import SelectedPiercings from "../../atoms/SelectedPiercings";
import IntPiercings from "../../interfaces/piercings";
import SearchedTerm from "../../atoms/SearchedTerm";

function removeAccents(str: string): string {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function ShowComponent({ ShowVar }: any) {
    const [SelectedPiercingsVar, setSelectedPiercingVar]: any = useRecoilState(SelectedPiercings);
    const [filteredPiercings, setFilteredPiercings] = useState<IntPiercings[]>([]);

    const [searchTerm] = useRecoilState(SearchedTerm);

    useEffect(() => {
        if (searchTerm) {
            const filteredItems = ShowVar.filter((item: any) =>
                removeAccents(item.name).toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPiercings(filteredItems);
        } else {
            setFilteredPiercings(ShowVar);
        }
    }, [searchTerm, ShowVar]);

    function AddPiercing(piercingToAdd: IntPiercings) {
        setSelectedPiercingVar([...SelectedPiercingsVar, piercingToAdd]);
    }

    return (
        <div className="ShowComponent">
            {filteredPiercings.map((item: any) => (
                <div className="Piercing" key={item.id}>
                    <div className="image-container">
                        <img src={item.image} alt={'Foto do item número ' + item.id} />

                        {item.esgotado && (
                            <span className="esgotado">ESGOTADO</span>
                        )}
                    </div>

                    <p
                        className="name"
                        style={{ textDecoration: item.esgotado ? 'line-through' : 'none' }}
                    >
                        {item.name}
                    </p>

                    <p
                        className="price"
                        style={{ textDecoration: item.esgotado ? 'line-through' : 'none' }}
                    >
                        R${item.price},00
                    </p>

                    <button onClick={() => AddPiercing(item)} disabled={item.esgotado}>
                        {item.esgotado ? 'Esgotado' : 'Adicionar ao Carrinho'}
                    </button>
                </div>
            ))}

            {filteredPiercings.length === 0 && <h1>Não existe nenhum item com esse nome</h1>}
        </div>
    );
}

export default ShowComponent;