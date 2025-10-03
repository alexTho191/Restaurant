const API_URL = import.meta.env.PROD 
  ? import.meta.env.VITE_API_URL 
  : "/api";

export async function fetchUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return await res.json();
}