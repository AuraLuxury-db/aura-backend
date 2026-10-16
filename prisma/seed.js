const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.hotel.create({
    data: {
      name: "Burj Al Arab Jumeirah",
      location: "Dubai, Emirados Árabes Unidos",
      description: "Acomodação 7 estrelas icônica com vistas deslumbrantes para o Golfo Pérsico.",
      pricePerNight: 2400.0,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      rooms: {
        create: [
          { name: "Suíte Deluxe Marina", capacity: 2 },
          { name: "Suíte Presidential 2 Quarto", capacity: 4 }
        ]
      }
    }
  });

  await prisma.flight.create({
    data: {
      airline: "Emirates Airlines",
      origin: "GRU (São Paulo)",
      destination: "DXB (Dubai)",
      departureTime: new Date("2026-11-20T22:30:00Z"),
      arrivalTime: new Date("2026-11-21T19:00:00Z"),
      price: 6800.0,
      seatsAvailable: 12
    }
  });

  console.log("🌱 Banco de dados populado com dados de teste!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
