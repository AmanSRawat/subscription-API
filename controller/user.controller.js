import User from '../models/user.models.js';

export const getUsers = async (req, res,next) => {
    try{
        const users = await User.find();
        res.status(200).json({succss:true, data:users});
    }catch(err){
        next(err)
    }
}

export const getUser = async (req, res,next) => {
    try{
        const users = await User.findById(req.params.id).select('-password');

        if(!users){
            const error = new error ('User not found')
            error.status = 404;
            throw error;
        }
        res.status(200).json({succss:true, data:users});
    }catch(error){
        next(error)
    }
}