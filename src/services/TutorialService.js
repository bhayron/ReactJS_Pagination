import api from "./api";

const getAll = (params) => {
  return api.get("/tutorials", { params });
};

const get = (id) => {
  return api.get(`/tutorials/${id}`);
};

const create = (data) => {
  return api.post("/tutorials", data);
};

const update = (id, data) => {
  return api.put(`/tutorials/${id}`, data);
};

const remove = (id) => {
  return api.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return api.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return api.get(`/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialService;
