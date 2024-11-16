// Import axios
import axios from 'axios';

// Define the API key
let API_KEY = "dyn_czUf5HjC0pOYsLRnp1J1MClMyMEcmXk6Dv69IDIjRUK8XlJBfS1wLQfj";

// Function to get user data
export default async function getUserData(userId) {
    try {
        const response = await axios.get(`https://app.dynamicauth.com/api/v0/users/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw the error after logging it
    }
}

// Example usage
// getUserData('someUserId').then(data => console.log(data)).catch(err => console.error(err));

