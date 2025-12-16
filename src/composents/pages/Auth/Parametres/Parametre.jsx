import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { VscVerifiedFilled } from "react-icons/vsc";
import { RiEditBoxLine } from "react-icons/ri";
import { FiChevronRight, FiBell, FiGlobe, FiLock, FiUser, FiHelpCircle, FiLogOut, FiShield } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
const Parametre = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 text-gray-800">
            {/* Header */}
            <div className="flex items-center mb-4">
                <button className="mr-2 text-xl"><FaArrowLeftLong /></button>
                <h1 className="text-lg font-semibold">Paramètres et confidentialité</h1>
            </div>

            {/* Search Bar */}
            <div className="mb-6 relative">
                <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />

                <input
                    type="text"
                    placeholder="Effectuer une recherche"
                    className="w-full pl-10 p-2 rounded-xl bg-gray-200 focus:outline-none"
                />
            </div>


            {/* Compte Section */}
            <div className="bg-white rounded-xl shadow p-4 mb-6">
                <h2 className="text-sm font-semibold text-gray-500 mb-3">Compte</h2>

                <div className="flex justify-between items-center py-3 border-b cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <VscVerifiedFilled className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Modifier le profil</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>

                <div className="flex justify-between items-center py-3 border-b cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiLock className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Confidentialités</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>

                <div className="flex justify-between items-center py-3 cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiShield className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Myhomy vérifié</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>
            </div>

            {/* Autres Section */}
            <div className="bg-white rounded-xl shadow p-4 mb-6">
                <h2 className="text-sm font-semibold text-gray-500 mb-3">Autres</h2>

                <div className="flex justify-between items-center py-3 border-b cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiBell className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Notifications</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>

                <div className="flex justify-between items-center py-3 border-b cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiHelpCircle className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Message d'absence</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>

                <div className="flex justify-between items-center py-3 border-b cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiHelpCircle className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Page d'aide</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>

                <div className="flex justify-between items-center py-3 border-b cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiGlobe className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Langue</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                        <span className="text-sm">Français</span>
                        <FiChevronRight />
                    </div>
                </div>

                <div className="flex justify-between items-center py-3 cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiLock className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Politique de confidentialité</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>
            </div>

            {/* Déconnexion */}
            <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-sm font-semibold text-gray-500 mb-3">Déconnexion</h2>

                <div className="flex justify-between items-center py-3 cursor-pointer">
                    <div className="flex items-center space-x-3">
                        <FiLogOut className="text-gray-500 text-lg" />
                        <span className="text-[15px]">Se déconnecter</span>
                    </div>
                    <FiChevronRight className="text-gray-500" />
                </div>
            </div>
        </div>
    );
};

export default Parametre;
