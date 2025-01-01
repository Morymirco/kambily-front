export default function TrackOrder() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Suivre ma commande</h1>

      <div className="max-w-xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Numéro de commande
              </label>
              <input
                type="text"
                placeholder="Ex: ORD-2024-XXXX"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#048B9A] focus:border-[#048B9A]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#048B9A] text-white py-2 rounded-lg hover:bg-[#037483] transition-colors"
            >
              Suivre ma commande
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 