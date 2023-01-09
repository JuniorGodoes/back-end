const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model {}

    Produtos.init(
        {
            Nome: DataTypes.STRING,
            Senha: DataTypes.DATE,
            Acesso: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Api_usuarios", // Nome da tabela no banco de dados MySql
            timestamps: false,
        }
    );

    return Produtos;
}