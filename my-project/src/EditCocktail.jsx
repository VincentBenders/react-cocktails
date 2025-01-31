import cocktail from "./Cocktail.jsx";

function EditCocktail(){
    console.log(cocktail.id)
    async function editCocktails(){
        try{
            const response = await fetch(`http://145.24.223.70:8000/cocktails/${cocktail.id}`, {
                method:'PUT',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:formData.name,
                    description:formData.description,
                    ingredients:formData.ingredients,
                })
            })
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
    return(
        <>
            <h2>EditCocktail</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="">Description: </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                    />
                </div>
                <div>
                    <label htmlFor="">Ingredients: </label>
                    <input
                        type="text"
                        id="ingredients"
                        name="ingredients"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default EditCocktail