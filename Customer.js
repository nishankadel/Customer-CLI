const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  
  lastname: {
    type: String,
  },

  phone: {
    type: String,
  },

  email: {
    type: String,
  },
});

const Customer = new mongoose.model("Customer", customerSchema);

module.exports = Customer;
