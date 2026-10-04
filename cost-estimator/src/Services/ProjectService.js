const API_URL = "http://localhost:3001";

export async function getProjects({ signal } = {}) {
  const response = await fetch(`${API_URL}/projects`, { signal });

  if (!response.ok) {
    throw new Error("Failed to load projects");
  }

  return response.json();
}

export async function getUsers({ signal } = {}) {
  const response = await fetch(`${API_URL}/users`, { signal });

  if (!response.ok) {
    throw new Error("Failed to load users");
  }

  return response.json();
}
