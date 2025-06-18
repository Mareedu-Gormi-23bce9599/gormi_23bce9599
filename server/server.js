require('dotenv').config();
const mongoose = require('mongoose');
const app      = require('./app');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: 'https://task-manager-frontend-94io.onrender.com',
  credentials: true
}));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
