const app = require('../app');

const PORT = process.env.PORT || 3000;

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${3000} 🚀`);
};

app.listen(PORT, handleListening);

