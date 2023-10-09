import axios from 'axios';
import { toast } from 'react-hot-toast';

export const queryLogin = async (email, password, setUser, navigate) => { 

    try {
        const { data } = await axios.post('/login', {
            email,
            password,
        });
        if (data.error) {
            toast.error(data.error);
        } else {
            setUser(data);
            toast.success('Connexion réussie');
            navigate('/'); // Redirect to the homepage
        }
    } catch (error) {
        toast.error('Erreur lors de la vérification côté serveur');
    }
}

export const queryCheck = async (email, navigate, dataSent) => {
    try {
        const { data } = await axios.get('/check', {
            params: { email },
        });
        if (data.error) {
            toast.error(data.error);
            navigate('/auth/register', { state: dataSent });
        } else {
            toast.success(data.message);
            navigate('/auth/login', { state: dataSent });
        }
    } catch (error) {
        toast.error('Erreur lors de la connexion côté serveur');
    }
}

export const queryRegister = async (dataSent, navigate, setUser) => {
    const { fname, lname, age, email, tel, town, password } = dataSent
    try {
        const { data } = await axios.post('/register', {
            fname, lname, age, email, tel, town, password
        })
        if (data.error) {
            toast.error(data.error);
        } else {
            setUser(data);
            toast.success('Enregistrement réussi');
            navigate('/'); 
        }
    } catch (error) {
        toast.error('Erreur enregistrement côté serveur');
    }
}
export const handleLogout = async (navigate, setUser) => {
    try {
        const { data } = await axios.delete('/logout');
        if (data.error) {
            toast.error(data.error);
        } else {
            toast.success('Déconnexion réussie');
            setUser(null);
            navigate('/');
        }
    } catch (error) {
        console.log(error);
    }
};