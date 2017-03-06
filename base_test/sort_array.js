  var collection = [
    "a", "a", "a",
    "e", "e", "e", "e", "e", "e", "e",
    "h", "h", "h", "h", "h", "h", "h[3]", "h", "h",
    "t", "t-2", "t", "t", "t", "t", "t", "t", "t[10]",
    "f", "f", "f", "f", "f", "f", "f", "f", "f",
    "c:8",
    "g", "g", "g", "g", "g", "g", "g",
    "b", "b", "b", "b", "b", "b",
    "d-5"
  ];
  var re = {};
  for(var i=0,v,l = collection.length; v = collection[i],i<l; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    console.log(rv);
    if (!re[rv[1]])
        re[rv[1]] = 0;
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  console.log(re);