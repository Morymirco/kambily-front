export default function Help() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Centre d'aide</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* FAQ */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Questions fréquentes</h2>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Comment suivre ma commande ?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">
                Vous pouvez suivre votre commande dans la section "Suivre ma commande" de votre compte.
              </p>
            </details>
            {/* Autres FAQs... */}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Nous contacter</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Service client</p>
              <p className="text-gray-600">+224 624 00 00 00</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">support@kambily.com</p>
            </div>
          </div>
        </div>

        {/* Guides */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Guides d'utilisation</h2>
          <ul className="space-y-2 text-[#048B9A]">
            <li>
              <a href="#" className="hover:underline">Guide des tailles</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Comment commander</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Modes de paiement</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 