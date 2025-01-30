import {useEffect, useState} from "react";
import {Link} from "react-router";

function Cocktails(){
    const [cocktails, setCocktails] = useState([])
    async function fetchCocktails(){
        const response = await fetch('http://145.24.223.70:8000/cocktails', {
            method:'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data.items);
        setCocktails(data.items)
    }
    useEffect(() => {


        fetchCocktails();
    }, []);

    const cocktailList = cocktails.map(cocktail =>
    <li className={'w-80 max-w-sm rounded overflow-hidden shadow-lg border bg-yellow-700 text-white p-5'} key={cocktail.id}>
        <div className={'flex justify-center items-center font-bold text-lg'}>
            {cocktail.name}
        </div>
        <div className={'flex justify-center items-center'}>
            <Link className={'text-blue-300 font-semibold'} to={`/cocktails/${cocktail.id}`}>More info</Link>
        </div>
    </li>
    )

    return(
        <>
            <div >
            <h2 className={'flex justify-center items-center text-4xl font-bold'}>List of cocktails:</h2>
            <ul className={'space-y-1.5'}>
                {cocktailList}
            </ul>
            </div>
        </>
    )
}
export default Cocktails