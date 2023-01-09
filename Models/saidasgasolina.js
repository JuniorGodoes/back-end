const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class abastecimento extends Model {}

    abastecimento.init(
        {
            Data: DataTypes.STRING,
            Placa: DataTypes.STRING,
            Modelo: DataTypes.STRING,
            Projeto: DataTypes.STRING,
            Ano: DataTypes.INTEGER,
            Matricula: DataTypes.INTEGER,
            Motorista: DataTypes.STRING,
            Combustivel: DataTypes.STRING,
            Litros: DataTypes.DOUBLE,
            Valor_litros: DataTypes.DOUBLE,
            Km_rodados: DataTypes.INTEGER,
            Km_litro: DataTypes.STRING,
            Valor: DataTypes.DOUBLE,
            Cod_posto: DataTypes.INTEGER,
            Posto: DataTypes.STRING,
            Endereco: DataTypes.STRING,
            Bairro: DataTypes.STRING,
            Cidade: DataTypes.STRING,
            Uf: DataTypes.STRING,
            Info: DataTypes.STRING,
            Tipo_veiculo: DataTypes.STRING,
            Local: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Abastecimento", // Nome da tabela no banco de dados MySql
            timestamps: false,
        }
    );

    return abastecimento;
}