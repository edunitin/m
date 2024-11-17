const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To allow cross-origin requests from frontend
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON data
app.use(express.json());

// Enable CORS for your frontend domain (you can replace this with your domain URL in production)
app.use(cors());

// MongoDB connection string (replace with your actual MongoDB URL)
mongoose.connect('mongodb+srv://nitin:saumikagra@cluster0.uti3u.mongodb.net/your-database-name', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a simple book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
});

// Create a model for the book schema
const Book = mongoose.model('Book', bookSchema);

// Route to fetch all books from the database
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();  // Get all books from the collection
    res.json(books);  // Send books as response
  } catch (err) {
    res.status(500).send('Error fetching books');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
