import mongoose from 'mongoose'

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('DB Connected')
    } catch (error) {
        console.log(`DB is not connected and error is -------->${error.message}`)
        process.exit(1)
    }
}

export default connectDB