module.exports = ( sequelize, DataTypes ) => {
    const Phitsanulok = sequelize.define('Phitsanulok', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return Phitsanulok
}