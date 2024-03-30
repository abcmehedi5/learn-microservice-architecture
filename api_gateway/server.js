const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.API_GATEWAY_PORT || 3000;

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
