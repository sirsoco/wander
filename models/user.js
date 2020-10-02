// need to find a way to connect Google auth from firebase to this mysql model

module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user" , {
    uid: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
    },
    name: {
    type: DataTypes.STRING,
    allowNull: true

    },    
    age: {
    type: DataTypes.INTEGER,
    allowNull: true
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
        allowNull: true
    },
    hobbies: {
        type: DataTypes.STRING,
        allowNull: true
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photoURL: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lat:{
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    lng:{
        type: DataTypes.DECIMAL,
        allowNull: true
    }


    
    })

    return user;
}


