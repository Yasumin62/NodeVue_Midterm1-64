module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        system: DataTypes.STRING,
        capacity: DataTypes.STRING,
        size: DataTypes.STRING,
        status: DataTypes.STRING,
       
    })

    User.prototype.comparePassword = function (password) {
        if (password == this.password) {
            return true
        }
        return false
    }

    User.associate = function (models) { }
    
    return User;
}