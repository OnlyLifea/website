export default function Footer() {
  const handleDiscordClick = () => {
    window.open("https://discord.gg/uglyscripts", "_blank");
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-ugly-green-400 to-ugly-green-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-smile text-slate-900 text-sm"></i>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-ugly-green-400 to-ugly-green-600 bg-clip-text text-transparent">
              Ugly's Script
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-slate-400">
            <button 
              onClick={handleDiscordClick}
              className="hover:text-ugly-green-400 transition-colors duration-200" 
              data-testid="link-support"
            >
              Support
            </button>
            <button 
              onClick={handleDiscordClick}
              className="hover:text-ugly-green-400 transition-colors duration-200"
              data-testid="link-discord"
            >
              <i className="fab fa-discord"></i>
            </button>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 mt-8 pt-8 text-center text-slate-500">
          <p>&copy; 2024 Ugly's Script. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
