// need to find a way to connect Google auth from firebase to this mysql model

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user" , {
    uid: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "test"
    } /*,
    name: {
    type: DataTypes.STRING,
    allowNull: false

    },    
    age: {
    type: DataTypes.INTEGER,
    allowNull: false
    },  

    career: {
        type: DataTypes.STRING,
        allowNull: true
    },
    education: {
        type: DataTypes.STRING,
        allowNull: true
    },
    
    currentLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hobbies: {
        type: DataTypes.STRING,
        allowNull: true
    },
    destination: {
        type: DataTypes.STRING,
        allowNull:false
    },
        */
    })

    return user;
}