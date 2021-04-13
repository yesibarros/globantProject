const orderByMatch = (matchArr, userProfile, areas, technologies) => {
  matchArr.forEach((candidate) => {
    candidate.score = 0;
    
   //console.log("locations", userProfile.location)
    if (
      candidate.location._id.toString() == userProfile.location.toString()
    ) {
      candidate.score++;
    }
    for (let element in candidate.areas) {
   //console.log("console log 1",candidate.areas[element]._id.toString())
     
      if (areas.includes(candidate.areas[element]._id.toString())) {
        candidate.score += 2;
        // candidate.score += candidate.areas[element].areaWeight;
      }
    }

    for (let element in candidate.technologies) {
      //console.log("console log 2",candidate.technologies[element]._id.toString())
      if (
        technologies.includes(candidate.technologies[element]._id.toString())
      ) {
        candidate.score++;
        // candidate.score += candidate.technologies[element].technologyWeight;
      }
    }
  });

  return matchArr.sort((a, b) => b.score - a.score);
};

module.exports = orderByMatch;
