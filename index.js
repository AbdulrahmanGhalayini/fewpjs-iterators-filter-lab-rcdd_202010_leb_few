
function findMatching(s ,a){


  return s.filter(item => item.toLowerCase() === a.toLowerCase());
}


function fuzzyMatch(s ,a){


  return s.filter(item => item.toLowerCase().startsWith(a.toLowerCase()));
}


function matchName(s ,a){


  return s.filter(item => item.name.toLowerCase() === a.toLowerCase());
}



