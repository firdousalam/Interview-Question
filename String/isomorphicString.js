function isIsomorphic(a, b) {
    let arrayA = a.split('');
    let arrayB = b.split('');
    let IsoMorphicJsonAB = {};
    let IsoMorphicJsonBA = {};
    let isIsomorphicData = true;

    arrayA.forEach((data, index) => {


        if (arrayB.length >= index) {
            if (!IsoMorphicJsonAB[data] && !IsoMorphicJsonBA[data]) {

                IsoMorphicJsonAB[data] = arrayB[index];
                IsoMorphicJsonBA[arrayB[index]] = data;

            } else {

                if (IsoMorphicJsonAB[data] != arrayB[index] || IsoMorphicJsonAB[arrayB[index]] != data) {
                    isIsomorphicData = false;
                    return isIsomorphicData
                }
            }
        }
    });
    console.log("AB", IsoMorphicJsonAB);
    console.log("BA", IsoMorphicJsonBA)
    return isIsomorphicData
}



// console.log("egg, add", isIsomorphic("egg", "add"));     // true
//  console.log("foo, add",isIsomorphic("foo", "bar"));     // false
//  console.log("paper, title",isIsomorphic("paper", "title")); // true
console.log("ab, aa", isIsomorphic("ab", "aa"));       // false



function isIsomorphicMap(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map(); // map from s -> t
    const mapTS = new Map(); // map from t -> s
    console.log("here");
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // If s->t mapping exists, it must match current charT
          console.log(mapST);
    console.log(mapTS)
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) return false;
        } else {
            mapST.set(charS, charT);
        }

        // If t->s mapping exists, it must match current charS
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) return false;
        } else {
            mapTS.set(charT, charS);
        }
    }
    console.log("map data");
  

    return true;
}

console.log("using Map", isIsomorphicMap("ab", "aa"));       // false