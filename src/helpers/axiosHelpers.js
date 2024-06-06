import axios from 'axios';
const rootAPI = import.meta.env.VITE_APP_ROOTAPI;

/******************* Create Methods for Contents *******************************/
export const postNewContents = async (content) => {
    try {
        const { data } = await axios.post(rootAPI, content);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}


/******************* Read Methods for Bucket List *******************************/
export const getContents = async () => {
    try {
        const { data } = await axios.get(rootAPI);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

export const getSingleContent = async (owner, id) => {
    try {
        const { data } = await axios.get(rootAPI + '/' + id);
        return data;
    } catch (error) {
        console.log(error)
        return {
            status: 'error',
            message: error.message,
        }
    }
}

/******************* Update Methods for Bucket List *******************************/
export const updateContent = async (id, content) => {
    try {
        content.id = id;
        const { data } = await axios.patch(rootAPI + '/' + id, content);
        return data;
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: error.message,
        };
    }
}

/******************* Delete Methods for Bucket List *******************************/
export const deleteContent = async (id) => {
    try {
        const { data } = await axios.delete(rootAPI + '/' + id, content);
        return data;
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: error.message,
        };
    }
}