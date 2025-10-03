export default function UserCard({ user }) {
  return (
    <div className="bg-[#EAE0D5] shadow-lg rounded-xl p-6 border-2 border-[#C6AC8F] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
      {/* Barra decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5E503F] via-[#C6AC8F] to-[#5E503F]" />
      
      <div className="mt-2">
        <h2 className="text-xl font-bold text-[#0A0908] mb-3">
          {user.nombre}
        </h2>
        
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-[#5E503F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-[#22333B] font-medium">{user.email}</p>
        </div>
        
        {user.creado_en && (
          <div className="flex items-center gap-2 pt-3 mt-3 border-t border-[#C6AC8F]">
            <svg className="w-4 h-4 text-[#5E503F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm text-[#5E503F]">Creado: {user.creado_en}</p>
          </div>
        )}
      </div>
    </div>
  );
}