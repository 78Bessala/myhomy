import Footer from './Footer'
import { useState } from "react";
 import { FiSearch } from "react-icons/fi";
 import Footer1 from '../../../composents/pages/Accueil/Footer1';
import user from '../../../assets/public/user.jpeg';
const messages = [
  {
    id: 1,
    name: "PEREST GUIMAPI",
    img: '../../../assets/public/user.png',
    msg: "D’accord",
    time: "08:39",
    unread: 0,
  },
  {
    id: 2,
    name: "PEREST GUIMAPI",
    img: user,
    msg: "D’accord monsieur",
    time: "06:20",
    unread: 0,
  },
  {
    id: 3,
    name: "Immobilier la référence",
    //img: "/img/avatar.png",
    msg: "Est ce toujours disponible?",
    time: "06:09",
    unread: 2,
  },
  {
    id: 4,
    name: "Perest G.",
    //img: "/img/avatar.png",
    msg: "stp diminue la caution",
    time: "Hier",
    unread: 0,
  },
  {
    id: 5,
    name: "Eto’o Samuel",
    //img: "/img/user2.jpg",
    msg: "D’accord",
    time: "01/12/2025",
    unread: 2,
  },
  {
    id: 6,
    name: "BEJL",
    img: "/img/user3.jpg",
    msg: "Qu’en pensez-vous",
    time: "01/12/2025",
    unread: 2,
  },
  {
    id: 7,
    name: "Leonor",
    //img: "/img/user4.jpg",
    msg: "hum ok",
    time: "30/11/2025",
    unread: 0,
  },
];


function Message(){
const [tab, setTab] = useState("discussions");
    return(
      // <section className="flex ">
      //   <Footer1 />
        <section className='flex flex-col flex-3'>
            <div className="flex flex-col min-h-screen bg-[#D9D9D9]">
      {/* TOP BAR */}
      <div className="bg-blue-600 text-white py-4 px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Messagerie</h1>
        <div className="text-2xl">⋮</div>
      </div>

      {/* SEARCH BAR */}
      <div className="px-4 mt-3">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <FiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Rechercher un message"
            className="ml-3 flex-1 outline-none bg-transparent text-sm"
          />
        </div>
      </div>

      {/* TABS */}
      <div className="flex justify-around mt-4 px-4">
        <button
          onClick={() => setTab("discussions")}
          className={`px-6 py-2 rounded-full border border-1 cursor-pointer ${
            tab === "discussions"
              ? "bg-blue-400  shadow font-semibold"
              : "bg-transparent"
          }`}
        >
          Discussions
        </button>

        <button
          onClick={() => setTab("notifications")}
          className={`px-6 py-2 rounded-full border cursor-pointer ${
            tab === "notifications"
              ? "bg-white shadow font-semibold"
              : "bg-transparent"
          }`}
        >
          Notifications
        </button>
      </div>

      {/* MESSAGE LIST */}
      <div className="flex-1 mt-4 overflow-y-auto px-4 pb-20">
        {messages.map((m) => (
          <div key={m.id} className="flex items-center gap-3 mb-5">
            {/* IMAGE */}
            <div className="relative">
              <img
                // src={m.img}
                src={user}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />

              {m.unread > 0 && (
                <span className="absolute -right-1 -top-1 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {m.unread}
                </span>
              )}
            </div>

            {/* TEXT */}
            <div className="flex-1 border-b border-gray-300 pb-2">
              <div className="flex justify-between">
                <p className="font-semibold text-sm">{m.name}</p>
                <span className="text-xs text-gray-600">{m.time}</span>
              </div>
              <p className="text-gray-700 text-xs">{m.msg}</p>
            </div>
          </div>
        ))}
      </div>

     
    </div>
<div className='md:hidden'>
      <Footer />
</div>
        </section>
        // </section>

    );
}

export default Message;




