const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rota de Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'API Online', system: 'Luxury Travel Platform' });
});

// Rota para listar Hotéis
app.get('/api/hotels', async (req, res) => {
  try {
    const hotels = await prisma.hotel.findMany({ include: { rooms: true } });
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar hotéis' });
  }
});

// Rota para listar Voos
app.get('/api/flights', async (req, res) => {
  try {
    const flights = await prisma.flight.findMany();
    res.json(flights);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar voos' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor Backend rodando na porta ${PORT}`);
});
