export async function fetchUsuarios() {
  const res = await fetch("/api/usuarios");
  if (!res.ok) throw new Error("Error al obtener usuarios");
  const data = await res.json();
  return data;
}