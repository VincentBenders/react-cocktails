import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
// import editCocktails from "./EditCocktail.jsx";

function Cocktail(){
    const params = useParams();
    const id = params.id;
    let navigate = useNavigate();

    const [cocktail, setCocktail] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: '',
    });
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
            const response = await fetch(`http://145.24.223.70:8000/cocktails/${cocktail.id}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
        navigate('/cocktails')

    }

    async function editCocktails(){
        try{
            const response = await fetch(`http://145.24.223.70:8000/cocktails/${cocktail.id}`, {
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    description: formData.description,
                    ingredients:formData.ingredients
                })
            })
            console.log(JSON.stringify({
                name:formData.name,
                description:formData.description,
                ingredients:formData.ingredients
            }))

            const data = await response.json();
            navigate('/cocktails');
        } catch (error){
            console.log('iets gaat fout: ',error)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulier verzonden:', formData);
        editCocktails(formData);
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
            <span>{cocktail.ingredients}</span><br/>
            <button
                className={'text-white bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:bg-yellow-300 font-bold rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-bg-yellow-900'}
                onClick={deleteCocktail}>Delete
            </button>
            <br/>
            <form onSubmit={handleSubmit}>
                <div className="w-72">
                    <label htmlFor="">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-72">
                    <label htmlFor="">Description: </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-72">
                    <label htmlFor="">Ingredients: </label>
                    <input
                        type="text"
                        id="ingredients"
                        name="ingredients"
                        value={formData.ingredients}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Cocktail