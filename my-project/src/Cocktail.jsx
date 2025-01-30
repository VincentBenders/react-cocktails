import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";

function Cocktail(){
    const params = useParams();
    const id = params.id;
    let navigate = useNavigate();

    const [cocktail, setCocktail] = useState([]);

    async function fetchCocktail(){
        try{
            const response = await fetch(`http://145.24.223.70:8000/cocktails/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
            const data = await response.json();
            setCocktail(data);

        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    async function deleteCocktail(id) {
        try {
            const response = await fetch(`http://145.24.223.70:8000/cocktails/{id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json'
                }
            });
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
        //navigate doesnt work
        navigate('/cocktails')

    }


    useEffect(() => {
        fetchCocktail(id);
    }, []);
    // needs some error handeling otherwise breaks if there are no comma's
    //     const list = cocktail.ingredients.split(',').map(line => <span>{line}<br/></span>))


    return(
        <>
            <h1 className={'text-4xl font-semibold'}>{cocktail.name}</h1>
            <p>{cocktail.description}</p>
            <h2 className={'text-2xl'}>ingredients</h2>
            {cocktail.ingredients}
            <button className={'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:bg-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-bg-yellow-900'} onClick={deleteCocktail}>Delete</button>
        </>
    )
}

export default Cocktail