const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const videoSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author_id: {
    type: String,
    required: true
  },
  author_email: {
    type: String,
    required: true
  },
  up_vote: {
    type: Number,
    default: 0
  },
  down_vote: {
    type: Number,
    default: 0
  }
});

module.exports = videoSchema;
