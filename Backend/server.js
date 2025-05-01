require('dotenv').config();
const cors = require('cors')
const express=require('express');
const connectToDB=require('./database/db')
connectToDB();
const doctorRoutes=require('./routes/doctor-routes')
const app=express();
const PORT=process.env.PORT || 3000;
// Enable CORS
app.use(cors({
    origin: 'http://localhost:3001', // allow frontend origin
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true
  }))

app.use(express.json());
app.use('/api/doctor',doctorRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
