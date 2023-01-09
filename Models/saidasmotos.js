const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produtos extends Model {}

    Produtos.init(
        {
            Status: DataTypes.STRING,
            Data: DataTypes.DATE,
            Placa: DataTypes.STRING,
            Km: DataTypes.INTEGER,
            Solicitante: DataTypes.STRING,
            Estoque: DataTypes.STRING,
            Mecanico: DataTypes.STRING,
            Centrodecusto: DataTypes.STRING,
            Projeto: DataTypes.STRING,
            Tipo: DataTypes.STRING,
            Peca_MO: DataTypes.STRING,
            Marca: DataTypes.STRING,
            Preco: DataTypes.INTEGER,
            Qtde: DataTypes.INTEGER,
            Km_minimo: DataTypes.INTEGER,
            Km_anterior: DataTypes.INTEGER,
            Ultima_troca: DataTypes.STRING,
            Durabilidade: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "Oficina_Motos_Saidas", // Nome da tabela no banco de dados MySql
            timestamps: false,
        }
    );

    return Produtos;
}