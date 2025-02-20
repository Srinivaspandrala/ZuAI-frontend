import axios from 'axios';

const API_URL = 'http://localhost:5000';
export const getPosts = () => {
    return axios.get(`${API_URL}/posts`);
};

export const getPostById = (id) => {
    return axios.get(`${API_URL}/posts/${id}`);
};

export const fetchPosts = () => {
    return axios.get(`${API_URL}/posts`);
};

export const createPost = (postData) => {
    return axios.post(`${API_URL}/posts`, postData);
};

export const updatePost = (id, updatedData) => {
    return axios.put(`${API_URL}/posts/${id}`, updatedData);
};

export const deletePost = (id) => {
    return axios.delete(`${API_URL}/posts/${id}`);
};
