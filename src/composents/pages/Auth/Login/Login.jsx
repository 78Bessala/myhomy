import React from "react";
import logo from '../../../../images/logo.svg';


const Login = () => {
  return (
   <div className="min-h-screen flex flex-col md:flex-row">
  {/* Partie gauche avec le logo sur fond bleu */}
  <div className="flex justify-center items-center bg-[#A3D2FF] md:w-1/2 min-h-[200px] md:min-h-screen">
    <img src={logo} alt="le-logo" className="w-32 h-32 md:w-48 md:h-48 object-contain" />
  </div>

  {/* Partie droite avec le formulaire centré */}
  <div className="flex justify-center items-center md:w-1/2 p-8">
    <form className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="remember" className="mr-2" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Se connecter
      </button>
    </form>
  </div>
</div>

  );
};

export default Login;