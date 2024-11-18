const mongoose = require('mongoose');


const uri =`mongodb+srv://admin:<db_password>@cluster0.4en1o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const connectDB = async() => {
    try {
        await mongoose.connect(uri)
.then(()=> console.log("Etablissement a connection to the database"))
.catch(err => console.log("Somthing went wrong when connecting to the   ",err));
    } catch (error) {
        console.error('Erreur de connexion a MongoDB : ', error.message);
        process.exit(1);

    }
}; 
module.exports=connectDB