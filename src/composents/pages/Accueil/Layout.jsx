// src/composents/pages/Accueil/Layout.jsx

import Footer1 from './Footer1';

// Largeur de la sidebar, utilisée pour le décalage (margin-left) du contenu
const SIDEBAR_WIDTH_CLASSES = "lg:w-64 xl:w-80"; 

function Layout({ children }) {
  return (
    // 1. Conteneur principal qui gère le Flexbox
    <div className="flex min-h-screen">
      
      {/* 2. Le conteneur de la Sidebar, qui donne la largeur à Footer1 */}
      <div className={`hidden lg:block ${SIDEBAR_WIDTH_CLASSES}`}>
        <Footer1 /> 
      </div>
      
      {/* 3. Le Contenu Principal (la page rendue par React Router) */}
      <main className="grow">
        {children}
      </main>
    </div>
  );
}

export default Layout;