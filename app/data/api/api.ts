import axios from "axios";

const Person: string | null = 'https://localhost:5001/api/Person';

export const Api = {
    CreatePerson: async (
        name: string,
        email: string,
        CPF: string,
        phone: string,
    ) => {
        try {
            const response = await axios.post(
                `${Person}`, {
                name: name,
                email: email,
                CPF: CPF,
                phone: phone,
            }
            );
            debugger
            const data = response.data;
            return data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
}