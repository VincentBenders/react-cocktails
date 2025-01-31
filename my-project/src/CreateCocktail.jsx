import {useState} from 'react';
import {useNavigate} from "react-router";


function CreateCocktail() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        ingredients: '',
    });

    async function createProduct() {
        try {
            const response = await fetch('http://145.24.223.70:8000/cocktails', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    description: formData.description,
                    ingredients: formData.ingredients,
                })
            })
            console.log(JSON.stringify({
                name: formData.name,
                description: formData.description,
                ingredients: formData.ingredients,
            }));

            const data = await response.json();
            console.log(data);
            navigate('/cocktails')
        } catch (error) {
            console.error('Er is een fout opgetreden:', error);
        }
    }

    // Generieke handler voor het bijwerken van de state
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulier verzonden:', formData);
        createProduct(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Naam:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="description">description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="ingredients">ingredients:</label>
                <input
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Verzenden</button>
        </form>
    );
}

export default CreateCocktail;