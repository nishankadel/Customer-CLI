const Customer = require("./Customer");

// DB CONNECVTIOM
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = mongoose.connect("mongodb://localhost:27017/customer-cli", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

// ADD CUSTOMER
const addCustomer = (customer) => {
  Customer.create(customer).then((customer) => {
    console.info("New customer added");
  });
};

// FIND CUSTOMER
const findCustomer = (name) => {
  // make case insensitive
  const search = new RegExp(name, "i");
  Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(
    (customer) => {
      console.log(customer);
      console.log(`${customer.length} matches`);
    }
  );
};
// UPDATE CUSTOMER
const updateCustomer = (_id, customer) => {
  Customer.updateOne({ _id }, customer).then((customer) => {
    console.info("Customer Updated");
  });
};
// REMOVE CUSTOMER
const removeCustomer = (_id) => {
  Customer.deleteOne({ _id }).then((customer) => {
    console.info("Customer Removed");
  });
};

// LIST CUSTOMER
const listCustomers = () => {
  Customer.find().then((customers) => {
    console.info(customers);
    console.info(`${customers.length} customers`);
  });
};

// EXPORT ALL METHOD
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
};
