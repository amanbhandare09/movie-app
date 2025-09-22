import {Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject(PROJECT_ID); // Your project ID

const database = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        const result = await database.listDocument(
            DATABASE_ID, COLLECTION_ID,
            [Query.equal('searchTerm', searchTerm)]
        )

        if(result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(
                DATABASE_ID, COLLECTION_ID, doc.$id,
                { data: { count: doc.count + 1 } }
            );
        } else {
            await database.createDocument(
                DATABASE_ID, COLLECTION_ID, ID.unique(), {
                    searchTerm, 
                    movie_id: movie.id, 
                    count: 1,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            );
        }
    } catch (error) { 
        console.error(error)
    }
}   
