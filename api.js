const API = 'http://192.168.1.68:3000'//AQUI PONES LA IP DE TU COMPU 

export const Login = async (user) => {
    try {
        const res = await fetch(`${API}/login`, {
            method: 'POST',
            headers: { 
                Accept: 'application/json', 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(user)
        });

        if (!res.ok) {
            console.error('Error en la solicitud:', res.status);
            return false;
        }

        const data = await res.json();
        console.log('Este es el response:', data);

        // Verificar si data es un array vacío o no tiene contenido
        if (Array.isArray(data) && data.length === 0) {
            return false;
        }

        return data;

    } catch (error) {
        console.error('Error en la solicitud:', error);
        return false;
    }
};

export const getUser = async (userId) => {
    try{
        const res = await fetch(`${API}/user/${userId}`);
        return await res.json();
    }
    catch(e){
        console.log(e)
    }
}

export const getCar = async (userId) => {
    try{
        const res = await fetch(`${API}/car/${userId}`);
        return await res.json();
    }
    catch(e){
        console.log(e)
    }
}

export const getHistory = async (userId) => {
    try{
        const res = await fetch(`${API}/history/${userId}`);
        return await res.json();
    }   
    catch(e){
        console.log(e)
    }
}

export const getFavorites = async (userId) => {
    try{
        const res = await fetch(`${API}/favorites/${userId}`);
        return await res.json();
    }
    catch(e){
        console.log(e)
    }
}