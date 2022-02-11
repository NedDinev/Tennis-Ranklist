function tennisRanklist(input) {
  let index = 0;
  let competitions = Number(input[index]);
  index++;
  let startingPoints = Number(input[index]);
  index++;
  let competitionsResult;
  let finalPoints = 0;
  let averagePoints = 0;
  let wonCompetitions = 0;
  let percentWonCompetitions = 0;
  for (let i = 0; i < competitions; i++) {
    competitionsResult = input[index];
    index++;

    if (competitionsResult == "W") {
      competitionsResult = 2000;
      wonCompetitions += 1;
    }
    if (competitionsResult == "F") {
      competitionsResult = 1200;
    }
    if (competitionsResult == "SF") {
      competitionsResult = 720;
    }
    startingPoints = startingPoints + competitionsResult;
    averagePoints += competitionsResult;
    finalPoints = startingPoints;
  }
  averagePoints;
  percentWonCompetitions = (wonCompetitions / competitions) * 100;
  console.log(`Final points: ${finalPoints}`);
  console.log(`Average points: ${Math.floor(averagePoints / competitions)}`);
  console.log(`${percentWonCompetitions.toFixed(2)}%`);
}

tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);
