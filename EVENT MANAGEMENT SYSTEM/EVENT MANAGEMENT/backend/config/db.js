const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      /* 
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,

      useNewUrlParser , useUnifiedTopology , useFindAndModify ,
       and useCreateIndex are no longer supported options. Mongoose 6 always behaves as if useNewUrlParser , 
      useUnifiedTopology , and useCreateIndex are true , and useFindAndModify is false .
      The solution is to remove any unsupported options from your code.
      */
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;
