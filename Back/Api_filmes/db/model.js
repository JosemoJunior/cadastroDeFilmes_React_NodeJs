import Sequelize from "sequelize";
import db from "./db.js";

const filme = db.define("filmes", {
    id:{
       type:Sequelize.INTEGER ,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false
    },
    titulo:{
        type:Sequelize.STRING(60),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    ator:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    faixaEtaria:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    genero:{
        type:Sequelize.STRING(60),
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
});

/*
const telefone = db.define("telefones", {
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ddd:{
        type:Sequelize.STRING(5),
        validate:{
            notEmpty: true
        }
    },
    numero:{
        type:Sequelize.STRING(10),
        validate:{
            notEmpty: true
        }
    }
})

contato.hasMany(telefone);
telefone.belongsTo(contato);

export default {contato, telefone} */

export default {filme};
