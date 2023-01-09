const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class saidascarros extends Model {}

    saidascarros.init(
        {
            Status: DataTypes.STRING,
            Data: DataTypes.DATE,
            NumeroNota: DataTypes.STRING,
            Placa: DataTypes.STRING,
            Km: DataTypes.INTEGER,
            Solicitante: DataTypes.STRING,
            Oficina: DataTypes.STRING,
            Mecanico: DataTypes.STRING,
            Centrodecusto: DataTypes.STRING,
            Projeto: DataTypes.STRING,
            Tipo: DataTypes.STRING,
            Peca_MO: DataTypes.STRING,
            Marca: DataTypes.STRING,
            Preco: DataTypes.STRING,
            Precoanterior: DataTypes.STRING,
            Aumento: DataTypes.STRING,
            Qtde: DataTypes.INTEGER,
            Km_minimo: DataTypes.INTEGER,
            Km_anterior: DataTypes.INTEGER,
            Ultima_troca: DataTypes.STRING,
            Durabilidade: DataTypes.STRING,
            Local: DataTypes.STRING,
            Funcionario: DataTypes.STRING
        },
        {
            sequelize,
            modelName: "Oficina_Carros_Lancamentos", // Nome da tabela no banco de dados MySql
            timestamps: false,
        }
    );

    return saidascarros;
}