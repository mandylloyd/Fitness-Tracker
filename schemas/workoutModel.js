// create new schema model for workout based on the data from the seed file that is needed
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },

      name: {
        type: String,
        trim: true,
      },
      distance: {
        type: Number,
        trim: true,
      },
      duration: {
        type: Number,
        trim: true,
      },
      weight: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
      reps: {
        type: Number,
        trim: true,
      },
    },
  ],
  totalDuration: {
    type: Number,
    trim: true,
    default: 0,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
