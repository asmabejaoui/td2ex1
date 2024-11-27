const user = require ('../models/user') ;
const jwt = require ('jsonwebtoken') ;
// inscri de nouvel utilisateur 
exports.registeruser = async(req,res)=> {
    const {username , password } = req.body ;
    try {
        const newuser = new user ({username , password });
        await newuser.save() ;
        res.status(201).json({ message: 'utilisateur créé avec succès' }) ;
    }
    catch (error){
        res.status(400).json({message: error.message});
    }
} ;
// connexion d'un utilisateur existant 
exports.loginUser = async (req, res) => {
    const{username, password} = req.body;
    try {
        const user = await User.findOne({username});
        if(!user)return res.status(404).json({message: 'urilisateur non trouvé'});
        const isMatch = await user.matchPassword(password);
        if(!isMatch) return res.status(400).json({message: 'mot de passe incorrect'});
        //génération d'un token jwt
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expireIn: '30d'});
        res.json({token});
    }catch (error){
        res.status(500).json({message:error.message});
    }
    };
    