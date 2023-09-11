

export const loginUser = async (email, password, setUser) => { // fonction pour se connecter

    try {
        const { data } = await axios.post('/login', { // relie au authRoutes
            email,
            password
        });
        if (data.error) { // affiche les erreures du back au front
            toast.error(data.error)
        } else {
            // On assigne la data avec setUser pour vérifier si l'utilisateur est connecté / pour éviter le 
            // rechargement de la page, on peut alors afficher directement l'utilisateur connecté.
            setUser(data);
            toast.success('Connexion reussi');
            navigate('/') // vers homepage
        }
    } catch (error) {

    }
}