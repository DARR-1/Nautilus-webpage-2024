import { MongoClient } from 'mongodb';

const getConnection = async() => {
    try {
        const url = 'mongodb://localhost:27017';

        const client = await MongoClient.connect(url);
        client.connect();
        return client.db('usuarios');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        throw error;
    }
}
export { getConnection };