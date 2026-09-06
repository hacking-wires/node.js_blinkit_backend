const dotenv = require('dotenv');
const { createApp } = require('./app');

dotenv.config();

const app = createApp();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
