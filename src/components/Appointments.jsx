import React from 'react';
// import logo from '../images/logo.png'; // Adjust the path as needed

function Appointment() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* <img src={logo} alt="Company Logo" className="w-32 h-32 mb-4" /> */}
            <h2 className="text-xl font-semibold mb-2">Réservez Votre Service</h2>
            <p className="text-gray-600">
              Remplissez le formulaire pour réserver un service. Nous vous contacterons pour confirmer votre réservation.
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <form className="space-y-6">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                <input type="text" placeholder="Votre Nom" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
              </div>
            </div>
            <input type="text" placeholder="Numéro de Téléphone" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <textarea placeholder="Message" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" rows="4"></textarea>
            <button type="submit" className="px-6 py-2 bg-pink-500 text-white rounded-lg float-right hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
