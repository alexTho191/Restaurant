"use client"

import { useState } from "react"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", { email, password })
    // Aquí iría la lógica de autenticación
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] mb-2">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[#4A4A4A] mb-2">
          Contraseña
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A646] focus:border-transparent outline-none transition-all"
          placeholder="••••••••"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center text-[#4A4A4A]">
          <input type="checkbox" className="mr-2 w-4 h-4 accent-[#C9A646]" />
          Recordarme
        </label>
        <a href="#" className="text-[#C9A646] hover:text-[#8B1E1E] transition-colors">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-[#8B1E1E] text-white py-3 rounded-lg font-semibold hover:bg-[#6B1616] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Iniciar Sesión
      </button>

      <p className="text-center text-sm text-[#4A4A4A]">
        ¿No tienes cuenta?{" "}
        <a href="#" className="text-[#C9A646] hover:text-[#8B1E1E] font-semibold transition-colors">
          Regístrate aquí
        </a>
      </p>
    </form>
  )
}
