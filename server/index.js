import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors({
//   origin: 'https://client-dusky-five-20.vercel.app',
//   methods: ['GET', 'POST', 'OPTIONS'],
// }));

// Optional: Preflight request support
// app.options('*', cors());

//for localhost
app.use(cors());

app.use(express.json());

// In-memory store instead of MongoDB
const inMemoryStore = {
  mainHeader: "Hyper boost your <span>Revenue Management, Marketing</span> and Commercial Functions with Business Ready AI"
};

console.log('Using in-memory store instead of MongoDB for testing');

// API Routes
// GET endpoint to retrieve the header content
app.get('/api/content/header', async (req, res) => {
  try {

    // const value = "Karthik Mohan";

    // for localhost
    const value = inMemoryStore.mainHeader;
    
    res.json({ value });
  } catch (error) {
    console.error('Error fetching header content:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST endpoint to update header content
app.post('/api/content/header', async (req, res) => {

  console.log(req.body);
  try {
    const { content } = req.body;
    console.log(content)
    
    if (!content) {
      return res.status(400).json({ error: 'Header content is required' });
    }
    
    

    // Update in-memory store
    inMemoryStore.mainHeader = content;
    
    res.json({ content, lastUpdated: new Date() });
  } catch (error) {
    console.error('Error updating header content:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 