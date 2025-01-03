'use client'
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit, FaSearch, FaTrash } from 'react-icons/fa';

const TagsPage = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTag, setNewTag] = useState({
    name: '',
    slug: '',
    description: ''
  });
  
  const tags = [
    {
      id: 1,
      name: 'Nouveau',
      slug: 'nouveau',
      description: 'Produits récemment ajoutés',
      productsCount: 12,
      total: 3500000
    },
    {
      id: 2,
      name: 'Promo',
      slug: 'promo',
      description: 'Produits en promotion',
      productsCount: 8,
      total: 2800000
    },
    // ... autres tags
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Étiquette ajoutée avec succès');
    setNewTag({ name: '', slug: '', description: '' });
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedTags(tags.map(tag => tag.id));
    } else {
      setSelectedTags([]);
    }
  };

  const handleSelectTag = (tagId) => {
    setSelectedTags(prev => 
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Supprimer ${selectedTags.length} étiquette(s) ?`)) {
      toast.success(`${selectedTags.length} étiquette(s) supprimée(s)`);
      setSelectedTags([]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Étiquettes</h1>
          {selectedTags.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              {selectedTags.length} étiquette(s) sélectionnée(s)
            </p>
          )}
        </div>
        {selectedTags.length > 0 && (
          <button
            onClick={handleBulkDelete}
            className="bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center gap-1.5 hover:bg-red-700"
          >
            <FaTrash size={12} />
            Supprimer la sélection
          </button>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Formulaire d'ajout */}
        <div className="col-span-1">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-medium mb-4">Ajouter une étiquette</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  value={newTag.name}
                  onChange={(e) => setNewTag({...newTag, name: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Slug</label>
                <input
                  type="text"
                  value={newTag.slug}
                  onChange={(e) => setNewTag({...newTag, slug: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">Description</label>
                <textarea
                  value={newTag.description}
                  onChange={(e) => setNewTag({...newTag, description: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg text-sm"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#048B9A] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#037483]"
              >
                Ajouter
              </button>
            </form>
          </div>
        </div>

        {/* Liste des étiquettes */}
        <div className="col-span-2">
          {/* Barre de recherche */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une étiquette..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selectedTags.length === tags.length}
                      onChange={handleSelectAll}
                      className="rounded text-[#048B9A] focus:ring-[#048B9A]"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nom</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Produits</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tags.map((tag) => (
                  <tr key={tag.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag.id)}
                        onChange={() => handleSelectTag(tag.id)}
                        className="rounded text-[#048B9A] focus:ring-[#048B9A]"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <div className="font-medium">{tag.name}</div>
                      <div className="text-xs text-gray-500">{tag.slug}</div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {tag.description}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500">
                      {tag.productsCount}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900">
                      {tag.total.toLocaleString()} GNF
                    </td>
                    <td className="px-4 py-4 text-right space-x-2">
                      <button className="text-[#048B9A] hover:text-[#037483]">
                        <FaEdit size={14} />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <FaTrash size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsPage; 