const mongoose = require('mongoose');

export default async function connect() {
    try {
        // 
        await mongoose.connect(process.env.API_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection successful !!!');
    } catch (error) {
        console.log('Connection failed !!!');
    }
}