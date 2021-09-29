const {User} = require("../models");
const bcrypt = require('bcryptjs');

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },
  async createRegister(req, res) {
    
    try {
      const { name, email, password, username } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        name,
        email,
        password: hash,
        username,
        avatar: "link",
        create_at: new Date().toISOString(),
      });

      return res.redirect("/login");
    } catch (err) {
      console.log(err);
      return res.redirect("/registro");
    }
  },

  async login(req, res){
    try{
      const{email, password} = req.body;

      const user = await User.findOne({
        where: {
          email
        }
      })
      //Validando e-mail
      if(!user){
        return res.render('login', {error: "Usuário não existe, E-mail incorreto"})
      }
      //Validando senha
      if(!bcrypt.compareSync(password, user.password)){
        return res.render("auth/login", {error: "Senha incorreta!"})
      }

      return res.redirect("/home");
    }catch(error){
      return res.render('auth/login', {error: "Sistema indisponível, tente novamente"})
    }
  }
};

module.exports = authController;
