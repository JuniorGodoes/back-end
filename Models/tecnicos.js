const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class tecnicos extends Model {}

    tecnicos.init(
        {
            CODIGO_TECNICO: DataTypes.INTEGER,
            NOME: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "tecnicos", // Nome da tabela no banco de dados MySql
            timestamps: false,
        }
    );

    return tecnicos;
}