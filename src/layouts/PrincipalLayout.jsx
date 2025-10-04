export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#EAE0D5]">
      <header className="bg-gradient-to-r from-[#22333B] to-[#0A0908] text-[#EAE0D5] p-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-center tracking-wide">
            Mi App con React + Flask
          </h1>
        </div>
      </header>
      
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
        {children}
      </main>
      
      <footer className="bg-[#0A0908] text-[#C6AC8F] border-t-4 border-[#5E503F]">
        <div className="max-w-7xl mx-auto p-6 text-center">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} - Todos los derechos reservados a Alexander Caviedes Romero
          </p>
        </div>
      </footer>
    </div>
  );
}