import { get, del, post, put } from "./api.js";

export async function getAll() {
  return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

export async function getById(id) {
  return get(`/data/albums/${id}`);
}

export async function deleteById(id) {
  return del(`/data/albums/${id}`);
}

export async function createItem(itemData) {
  return post(`/data/albums`, itemData);
}

export async function editItem(id, data) {
  return put(`/data/albums/${id}`, data);
}

export async function searchAlbum(query) {
  return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
}