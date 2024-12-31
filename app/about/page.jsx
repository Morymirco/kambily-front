'use client'
import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaStar, FaHandshake } from 'react-icons/fa';

const About = () => {
  const stats = [
    {
      icon: <FaUsers className="text-3xl text-[#048B9A]" />,
      number: "1000+",
      label: "Clients Satisfaits"
    },
    {
      icon: <FaStar className="text-3xl text-[#048B9A]" />,
      number: "5+",
      label: "Années d'Expérience"
    },
    {
      icon: <FaHandshake className="text-3xl text-[#048B9A]" />,
      number: "100%",
      label: "Satisfaction Client"
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Diallo",
      role: "Directrice Générale",
      image: "/team/member1.jpg",
    },
    {
      name: "Mohamed Camara",
      role: "Responsable Commercial",
      image: "/team/member2.jpg",
    },
    {
      name: "Fatoumata Barry",
      role: "Service Client",
      image: "/team/member3.jpg",
    }
  ];

  const values = [
    {
      title: "Qualité",
      description: "Nous nous engageons à fournir des produits de la plus haute qualité à nos clients."
    },
    {
      title: "Innovation",
      description: "Nous restons à la pointe des dernières tendances et technologies."
    },
    {
      title: "Service Client",
      description: "Notre équipe est dévouée à offrir une expérience client exceptionnelle."
    },
    {
      title: "Intégrité",
      description: "Nous menons nos activités avec honnêteté et transparence."
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-16 py-12">
      {/* Section Hero */}
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-6">À Propos de Nous</h1>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-600 mb-4">
              Bienvenue chez [Nom de votre entreprise], votre destination de confiance pour des produits de qualité en Guinée. Depuis notre création en [année], nous nous efforçons d'offrir à nos clients une expérience d'achat exceptionnelle.
            </p>
            <p className="text-gray-600">
              Notre mission est de fournir des produits innovants et de qualité tout en maintenant un service client irréprochable. Nous croyons en l'établissement de relations durables avec nos clients basées sur la confiance et la satisfaction.
            </p>
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/about-hero.jpg"
              alt="À propos de nous"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Nos Valeurs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Nos Valeurs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <FaCheckCircle className="text-[#048B9A] text-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notre Équipe */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Notre Équipe</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-[300px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 