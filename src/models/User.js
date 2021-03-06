module.exports = (conection, DataTypes) => {

  const User = conection.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
    },
    password: {
      type: DataTypes.STRING(256),
    },
    username: {
      type: DataTypes.STRING(200),
    },
    avatar: {
      type: DataTypes.STRING(200),
    },
    create_at: {
      type: DataTypes.DATE,
    }
  },
  {
    tablename: "users",
    timestamps: false,
  }
  );
  return User;
};