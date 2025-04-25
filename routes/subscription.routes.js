import e, {Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/',(req,res)=>{
    res.send({title:'GET all subscriptions'})
})

subscriptionRouter.get('/:id',(req,res)=>{
    res.send({title:'GET subscriptions details'})
})

subscriptionRouter.post('/',(req,res)=>{
    res.send({title:'Cerate a subscriptions'})
})


subscriptionRouter.put('/:id',(req,res)=>{
    res.send({title:'Update a subscriptions'})
})

subscriptionRouter.delete('/:id',(req,res)=>{
    res.send({title:'Delete a subscriptions'})
})

subscriptionRouter.get('/user/:id',(req,res)=>{
    res.send({title:'GET all user subscriptions'})
})

subscriptionRouter.put('/:id/cancel',(req,res)=>{
    res.send({title:'Cancel a subscriptions'})
})

subscriptionRouter.get('/upcoming-renewals',(req,res)=>{
    res.send({title:'GET uspcoming renewals'})
})

export default subscriptionRouter; 