const router = require("express").Router();
const path = require("path");

// API ROUTES
const Workout = require("../schemas/workoutModel");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    // .sort({day: -1})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
  });
  
  router.post("/api/workouts", (req, res) => {
    let addWorkout = req.body
    Workout.create(addWorkout)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  });
  
  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.put("/api/workouts/:id", function(req, res) {
    let workout = req.params.id
    let addExercise = req.body
    Workout.findByIdAndUpdate( workout, 
      {$push: {exercises: addExercise}})
      .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch((error) => {
      res.status(400).json(err);
    })
  });

//HTML ROUTES

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  module.exports = router;