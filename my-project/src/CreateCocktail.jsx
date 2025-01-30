import {useState} from 'react';
import {useNavigate} from "react-router";


function CreateCocktail() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        body: '',
        author: '',
    });

    async function createProduct() {
        try {
            const response = await fetch('https://notes.basboot.nl/notes', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.name,
                    body: formData.body,
                    author: formData.author,
                })
            })
            console.log(JSON.stringify({
                title: formData.name,
                body: formData.body,
                author: formData.author,
            }));

            const data = await response.json();
            console.log(data);
            navigate('/notes')
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
                <label htmlFor="body">body:</label>
                <input
                    type="text"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="author">author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Verzenden</button>
        </form>
    );
}

export default CreateCocktail;