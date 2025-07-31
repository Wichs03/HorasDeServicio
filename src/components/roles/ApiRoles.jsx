import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0IiwidXNlciI6MSwicm9sZSI6eyJpZCI6MSwibmFtZSI6IkFkbWluIn0sImlhdCI6MTc1Mzk3ODA0MSwiZXhwIjoxNzUzOTgxNjQxfQ.QDx665uZxeqLHnPSKeVOZtTl-GGG6r41ZnSIDMRVt2U";

const api = axios.create({
  baseURL: "https://www.hs-service.api.crealape.com/api/v1",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getRoles = async () => {
  const response = await api.get("/roles");
  return response.data;
};

export const getUsersByRole = async (roleId) => {
  const response = await api.get(`/users?r=${roleId}`);
  return response.data;
};
