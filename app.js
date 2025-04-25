import express from 'express';
import {PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';   
import subscriptionRouter from './routes/subscription.routes.js';
import { connect } from 'mongoose';
import connectToDatabase from './database/mogodb.js';


const app = express();

app.use('/api/v1/auth',authRouter)

app.use('/api/v1/users',userRouter)

app.use('/api/v1/subscriptions',subscriptionRouter)

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to the subcrtption Tracker App</h1>')
})

app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    await connectToDatabase();
})

export default app;