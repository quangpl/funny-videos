const videoSchema = require("../schemas/video");
const mongoose = require("mongoose");
const videoModel = mongoose.model("Video", videoSchema);
const bcrypt = require("bcrypt");

videoModel.add = async ({
  title,
  description,
  author_id,
  author_email,
  up_vote,
  down_vote
}) => {
  const newVideo = new videoModel({
    title,
    description,
    author_id,
    author_email,
    up_vote: up_vote,
    down_vote: down_vote
  });
  return await newVideo.save();
};

videoModel.getById = async (id) =>{
    return await videoModel.fine({_id:id}).exec();
}
videoModel.getByAuthorEmail = async email => {
  return await videoModel.fine({ author_email: email }).exec();
};
videoModel.getAll = async () => {
  return await videoModel.fine().exec();
};

videoModel.like = async (id) => {
  return await videoModel
    .findByIdAndUpdate(id, {
      $inc: {
        up_vote:1
      }
    })
    .exec();
};

videoModel.dislike = async id => {
  return await videoModel
    .findByIdAndUpdate(id, {
      $inc: {
        down_vote: 1
      }
    })
    .exec();
};
