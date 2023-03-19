const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: [true, 'A customer name must have a name']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Need a phone number']
    },
    address: {
        type: String,
        required: [true, 'Need address']
    },
    loanAmount: {
        type: Number,
        required: [true, 'Need loan amount']
    },
    interest: {
        type: Number,
        required: [true, 'Need interest']
    },
    loanTermYears: {
        type: Number,
        required: [true, 'Need loan term']
    },
    loanType: {
        type: String,
        required: [true, 'Need type']
    },

    description: String,
    insertedDate: {
        type: Date,
        default: Date.now
    }
})

const Loan = mongoose.model('Loan', loanSchema)
module.exports = Loan