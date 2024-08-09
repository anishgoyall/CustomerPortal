import axios from "axios";

export const fetchCustomerPhotos = async (count: number): Promise<string[]> => {
    try {
        const endpoint = "https://api.unsplash.com/photos/random";
        const response = await axios.get(endpoint, {
            params: {
                count,
            },
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in fetchCustomerPhotos:", error);
        throw error;
    }
};
