const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Placascarros extends Model {}

    Placascarros.init(
        {
            Placa: DataTypes.STRING,
            Modelo: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Oficina_Carros_Placa", // Nome da tabela no banco de dados MySql
            timestamps: false,
        }
    );

    return Placascarros;
}