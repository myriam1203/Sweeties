const knex = require('knex')(require('./knexfile').development);
const crypto = require("crypto");


function getUser(mail) {
    return knex("Users").where({mail:mail})
}

function randomString () {
  return crypto.randomBytes(4).toString('hex')
}

function saltHashPassword ({ password,
                             salt = randomString()
                           })
{
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}

/*
  `id` int(11) NOT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `tel` varchar(100) DEFAULT NULL,
  `mdp` varchar(100) DEFAULT NULL
 */
function createUser(data) {
    console.log(`Add user ${data.mail}`);
    const { salt, hash } = saltHashPassword({password:data.password}); // hache le mdp de l'user et génère un salt
    data.password = hash;
    data.salt = salt;
    let user_data = {
        user_login:data.login,
        user_firstname:data.firstname,
        user_name:data.name,
        salt:data.salt,
        user_password:data.password,
        user_email:data.email,
        user_url:data.url,
        user_registered:data.registered,
        user_activated_key:data.activated_key,
        user_status:data.status,
        display_name:data.display_name,
        user_birth:data.user_birth,
        user_phonenumber:data.phonenumber,
        user_signupdate:data.signupdate,
        id_user:data.id_user,
        picture_url:data.picture_url

    };
    console.log('user data ' + user_data);
    return knex('Users').insert(user_data);
}

function logUser(data)
{
    console.log('Login ' + data.mail);

    return knex('Users').where({ mail:data.mail }).then(([users]) => {

        if (!users)
        {
            console.log("user doesn't exist");
            return { success: false };
        }

        const { hash } = saltHashPassword({   // récupère le hash du mdp entré par l'utilisateur, avec le salt associé à cet user en bdd
          password: data.password,
          salt: users.salt
        })

        return { success: hash === users.password } // renvoie vrai si le hash est égal au mdp, faux si ce n'est pas le cas
      })
}


function createPublication(data) {

}


function createComment(data) {

}


function listUsers(data) {
    return knex("Users").where(data);
}

module.exports = {
    getUser,
    createUser,
    listUsers,
    logUser
};
