const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/warrior");

const workoutSeed = [
  {
    name: "Bikram Yoga",
    description: "Hot yoga in a studio.",
    location: "Columbus",
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: true,
  },
  {
    name: "Afternoon Yoga",
    description: "Yoga in the park",
    location: "Savannah",
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: true,
    Friday: false,
    Saturday: false,
  },
  {
    name: "Yoga in the morning",
    description: "Yoga at sunrise.",
    location: "Atlanta",
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: true,
    Thursday: false,
    Friday: false,
    Saturday: false,
  },
  {
    name: "Downward Dog Yoga",
    description: "Yoga in the park next to City Hall",
    location: "Savannah",
    Sunday: true,
    Monday: false,
    Tuesday: true,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  },
  {
    name: "Sunset Yoga",
    description: "Yoga in the park",
    location: "Columbus",
    Sunday: false,
    Monday: true,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  },
];

db.Workouts.remove({})
  .then(() => db.Workouts.collection.insertMany(workoutSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

const instructorSeed = [
  {
    name: "John Smith",
    email: "john@test.com",
    password: "Test123",
  },
  {
    name: "Bob Snow",
    email: "Bob@test.com",
    password: "Test123",
  },
  {
    name: "Susan Sky",
    email: "susan@test.com",
    password: "Test123",
  },
];

db.Instructor.remove({})
  .then(() => db.Instructor.collection.insertMany(instructorSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
