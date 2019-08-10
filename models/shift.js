// Model for shift
module.exports = function(sequelize, DataTypes) {
  var Shift = sequelize.define("shift", {
    ShiftID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    StartTime:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    EndTime:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClockInTime:{
      type: DataTypes.INTEGER,
    },
    ClockOutTime:{
      type: DataTypes.INTEGER,
    },
    Date:{
      type: DataTypes.DATEONLY,
      allowNull: false
    }

  });

  Shift.associate = function(models) { 
    Shift.belongsTo(models.business);
    Shift.belongsTo(models.employee);
    Shift.hasOne(models.schedule);
      // many-to-many relationships 
    Shift.belongsToMany(models.role, {
      through: 'shift_roles',
      as: 'role',
      foreignKey: 'ShiftID',
      onDelete: 'cascade'
    });
  }   

  return Shift;
};


