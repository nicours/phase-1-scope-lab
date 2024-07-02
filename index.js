// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer in global scope with const
const leastFavoriteCustomer = 'someone';

// Function to try changing leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    // This should cause an error since leastFavoriteCustomer is a const
    leastFavoriteCustomer = 'new value';
}

module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};

