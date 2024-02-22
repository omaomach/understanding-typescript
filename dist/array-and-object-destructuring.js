"use strict";
const muscles = ["bicep", "tricep", "chest", "back"];
const [muscle1, muscle2, ...remainingMuscles] = muscles;
console.log(muscle1, muscle2, remainingMuscles, muscles);
const muscleExercises = {
    muscle: muscles[0],
    exercises: 3
};
const { muscle, exercises } = muscleExercises;
console.log(muscle, exercises, muscleExercises);
