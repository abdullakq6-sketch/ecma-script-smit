var firstNames = ["Abdullah ", "Yasir ", "Warda ", "Liaba "];
var lastNames = ["Zzz", "Dogbone", "Burp", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        var full = firstNames[i] + lastNames[j];
        fullNames.push(full);
        console.table("final : " + full);

    }
}
