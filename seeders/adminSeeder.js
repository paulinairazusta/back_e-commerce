const Admin = require("../models/adminModel");

module.exports = async () => {
  await Admin.deleteMany({});
  const admin = new Admin({
    firstname: "Main",
    lastname: "Admin",
    email: "mainadmin@admin.com",
    password: "1234",
    isAdmin: true,
  });
  admin.save();
  console.log("Admins have been created!");
};
