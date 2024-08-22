const API = 'http://192.168.1.68:3000'

export const Login = async (user) => {
    try {
        const res = await fetch(`http://192.168.1.68:3000/login`, {
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

        return data ? true : false;

    } catch (error) {
        console.error('Error en la solicitud:', error);
        return false;
    }
};
