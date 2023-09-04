import { AxiosError } from 'axios';
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
            });
        
            return response.status;
        } catch (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response && axiosError.response.status === 409) {
                console.log(axiosError.response?.status);
                return axiosError.response?.status;
            } else {
                console.log('Erro desconhecido');
                return [];
            }
        }
        
    },
}