export default function Wishlist() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Mes favoris</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Liste des produits favoris */}
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-sm overflow-hidden group">
            <div className="relative h-64">
              <img
                src={`/tshirt.png`}
                alt="Product"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:text-red-500">
                ❤️
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2">Nom du produit</h3>
              <p className="text-[#048B9A] font-bold mb-4">75,000 GNF</p>
              <button className="w-full bg-[#048B9A] text-white py-2 rounded-lg hover:bg-[#037483] transition-colors">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 