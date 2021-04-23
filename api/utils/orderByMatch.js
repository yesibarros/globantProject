const orderByMatch = (matchArr, userProfile, areas, technologies) => {
  matchArr.forEach((candidate) => {
    candidate.score = 0;

    if (
      candidate.location &&
      candidate.location._id.toString() == userProfile.location.toString()
    ) {
      candidate.score++;
    }
    for (let element in candidate.areas) {
      if (areas.includes(candidate.areas[element]._id.toString())) {
        candidate.score += 2;
      }
    }

    for (let element in candidate.technologies) {
      if (
        technologies.includes(candidate.technologies[element]._id.toString())
      ) {
        candidate.score++;
      }
    }
  });

  return matchArr.sort((a, b) => b.score - a.score);
};

module.exports = orderByMatch;
