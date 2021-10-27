var names = "Pratik Thapa, Hari Kumar Karki, Shyam Govind Sharma, Wilson Karki, Baladev Thapa";

var namesArray = names.split(", ");

function compare(a, b) {
    var aName = a.split(" ");
    var bName = b.split(" ");

    var aLastName = aName[aName.length - 1];
    var bLastName = bName[bName.length - 1];

    if (aLastName < bLastName) {
        return -1;
    }
    if (aLastName < bLastName) {
        return -1;
    }
    return 0;
}

namesArray.sort(compare);

console.log(namesArray);