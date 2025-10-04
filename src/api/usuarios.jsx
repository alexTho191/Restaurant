const API_URL =
  import.meta.env.MODE === "development"
    ? "/api"
    : import.meta.env.VITE_API_URL;

export async function fetchUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  // PRUEBA DE URL API
  console.log("URL de la API:", API_URL + "/usuarios");
  return await res.json();
}