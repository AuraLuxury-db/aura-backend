typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const properties = [
  // 🏠 CASAS DE LUXO
  {
    title: "Villa Aura Mansão Beira-Mar",
    description: "Mansão pé na areia com vista panorâmica para o oceano, piscina de borda infinita, 6 suítes e heliponto privado.",
    location: "Búzios, Rio de Janeiro",
    pricePerNight: 4500.00,
    type: "CASA",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Casa Solis Horizon",
    description: "Arquitetura rústica chic no Quadrado de Trancoso, com piscina integrada à natureza, deck de madeira e espaço gourmet completo.",
    location: "Trancoso, Bahia",
    pricePerNight: 3800.00,
    type: "CASA",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Residência Diamante Azul",
    description: "Propriedade em condomínio fechado com píer privativo para iates, 5 suítes, sauna úmida e chef particular sob demanda.",
    location: "Angra dos Reis, Rio de Janeiro",
    pricePerNight: 6200.00,
    type: "CASA",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Villa Serenita",
    description: "Casa contemporânea cercada pela Mata Atlântica, vista privilegiada para o mar, jacuzzi aquecida e ampla área de lazer.",
    location: "Ilhabela, São Paulo",
    pricePerNight: 2900.00,
    type: "CASA",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Casa Altavista",
    description: "Refúgio de montanha com lareira central, adega climatizada, 4 suítes e arquitetura em vidro e madeira com vista para o vale.",
    location: "Campos do Jordão, São Paulo",
    pricePerNight: 3200.00,
    type: "CASA",
    imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
  },

  // 🌿 SÍTIOS EXCLUSIVOS
  {
    title: "Sítio Refúgio Imperial",
    description: "Sítio histórico cercado por montanhas, com lago privativo, quadra de tênis, pomar e piscina aquecida ao ar livre.",
    location: "Petrópolis, Rio de Janeiro",
    pricePerNight: 2100.00,
    type: "SITIO",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Sítio Vale das Hortênsias",
    description: "Propriedade em estilo europeu, com sauna, fogo de chão, trilhas particulares e vista para a Serra Gaúcha.",
    location: "Gramado, Rio Grande do Sul",
    pricePerNight: 1850.00,
    type: "SITIO",
    imageUrl: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Sítio EcoAura Serra da Mantiqueira",
    description: "Retiro ecológico de alto padrão com vista para a Pedra do Baú, piscina natural, horta orgânica e hidromassagem externa.",
    location: "São Bento do Sapucaí, São Paulo",
    pricePerNight: 1600.00,
    type: "SITIO",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Sítio das Nascentes",
    description: "Propriedade com cachoeira privativa, área de fogueira sob as estrelas, chalés independentes e muita privacidade.",
    location: "Cunha, São Paulo",
    pricePerNight: 1400.00,
    type: "SITIO",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Sítio Bella Vista",
    description: "Encantador sítio mineiro que combina o charme colonial com conforto moderno, fogão a lenha, piscina e ampla área verde.",
    location: "Tiradentes, Minas Gerais",
    pricePerNight: 1950.00,
    type: "SITIO",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Sítio Paraíso das Águas",
    description: "Sítio com rio interno cristalino, deck de contemplação, estrutura completa de lazer e integração total com o cerrado.",
    location: "Pirenópolis, Goiás",
    pricePerNight: 1750.00,
    type: "SITIO",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop"
  }
];

async function main() {
  console.log('Iniciando o cadastro das propriedades...');

  for (const property of properties) {
    await prisma.property.create({
      data: property,
    });
  }

  console.log('✅ 11 propriedades cadastradas com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
