'use client'
import { useEffect, useState } from "react";
import './asincrono3.css'; 

function Asin3() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        let controller = new AbortController();
        let option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        };

        fetch('https://pokeapi.co/api/v2/pokemon?limit=20', option)
            .then(res => {
                if (!res.ok) throw new Error("Error al obtener los datos");
                return res.json();
            })
            .then(data => {
                const fetchPokemonDetails = data.results.map(pokemon =>
                    fetch(pokemon.url)
                        .then(res => res.json())
                        .then(details => details)
                );
                Promise.all(fetchPokemonDetails)
                    .then(pokemonDetails => setPokemonList(pokemonDetails));
            })
            .catch(err => console.error("Error en la petición:", err));

        return () => controller.abort();
    }, []);

    return (
        <div className="container">
            <h2 className="title">Lista de Pokémon</h2>
            <ul className="pokemonList">
                {pokemonList.map((pokemon) => (
                    <li key={pokemon.id} className="pokemonItem">
                        <img className="pokemonImage" src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <div className="pokemonInfo">
                            <h3 className="pokemonName">{pokemon.name}</h3>
                            <p className="pokemonTypes">
                                <strong>Tipo:</strong> {pokemon.types.map(type => type.type.name).join(', ')}
                            </p>
                            <p className="pokemonAbility">
                                <strong>Habilidad:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
                            </p>
                            <p className="pokemonHeight">
                                <strong>Altura:</strong> {pokemon.height} decímetros
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Asin3;
