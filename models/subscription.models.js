import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        requiresd: [true, "subscription name is required"], 
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    price:{
        type:Number,
        required: [true, "subscription price is required"],
        min: [0,'Price must be greater than 0'],
    },
    frequency:{
        type: String,
        enum: ["weekly", "monthly", "yearly"],
    },
    category:{
        type: String,
        enum: ['sports','news','entertainment','education','lifestyle'],
        required: [true, "subscription category is required"],
    },
    paymentMethod: {
        type:String,
        requires: true,
        trim: true,
    },
    status:{
        type: String,
        enum: ["active", "cancelled","expired"],
        default: "active",
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value <= new Date();
            },
            message: "Start date must be in the past or present",
        }
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value > this.startDate;
            },
            message: "Start date must be in the past or present",
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
    }
},{timestamps:true});

//Auto calculate if missing
subscriptionSchema.pre("save", function(next) {
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,  
            monthly: 30,
            yearly: 365,
        }
        this.renewalDate = new Date(this.startDate)
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    if(this.renewalDate<new Date()){
        this.status = "expired";
    }

    next();
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);
export default Subscription;