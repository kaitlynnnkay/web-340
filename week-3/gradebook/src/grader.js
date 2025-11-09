
      // grader.js

  function getLetterGrade(score) {
    if (typeof score !== "number") {
        throw Error("Input must be a number,");
    }

    if (score < 0 || score > 100) {
        throw Error("Input must be between 0 and 100.");
    }

    switch (score) {
        case 100:
        case 90:
            return "A";
        case 80:
            return "B";
        case 70:
            return "C";
        case 60:
            return "D";
        default:
            return "F";
    }
}

module.exports = {
    getLetterGrade: getLetterGrade
};