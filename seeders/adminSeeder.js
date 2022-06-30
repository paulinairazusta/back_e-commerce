const Admin = require("../models/adminModel");

module.exports = async () => {
  await Admin.deleteMany({});
  const admin = new Admin({
    firstname: "Pan",
    lastname: "Doradito",
    email: "pandoradito@user.com",
    password: "1234",
    isAdmin: false,
  });
  admin.save();
  console.log("Admins have been created!");
};
