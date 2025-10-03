// Detecta si estamos en producción (Vercel) o en desarrollo (localhost)
const API_URL =
  import.meta.env.MODE === "development"
    ? "/api" // usa el proxy local de vite
    : import.meta.env.VITE_API_URL; // usa la URL real en Vercel

export async function fetchUsuarios() {
  const res = await fetch(`${API_URL}/usuarios`);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return await res.json();
}
