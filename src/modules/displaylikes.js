import { involvementApi } from "./utils.js";

const getLikes = async() => {
    const response = await fetch(`${involvementApi}/likes`);
    const data = await response.json();
    return data[0].likes;

};

const postLikes = async(id) => {
    const response = await fetch(`${involvementApi}/likes/`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json',
    },

        body: JSON.stringify({ item_id: id }),
    });
    return response;
};




export { getLikes, postLikes };