// server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Define the data point interface
interface DataPoint {
  timestamp: string;
  value: number;
}

// Function to generate random data points
const generateRandomDataPoints = (): DataPoint[] => {
  const dataPoints: DataPoint[] = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    dataPoints.push({
      timestamp: date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      value: Math.floor(Math.random() * 30) + 1, // Random value between 1 and 30
    });
  }

  return dataPoints.reverse(); // Reverse to have the latest date first
};

// Define the API endpoint
app.get('/api/data', (req: Request, res: Response) => {
  const dataPoints = generateRandomDataPoints();
  res.json(dataPoints);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
