module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {


    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return Employee;
};
