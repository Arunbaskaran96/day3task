var marks = [ 90, 80, 70, 60, 50]; 
for ( var i = 0; i<marks.length; i++) {
    console.log("i=", i, marks[i]);
}


for ( var i in marks) {
    console.log("i=", i, marks[i]);
}

for ( var val of marks) {
    console.log(val);
}


marks.forEach(function (mark) {
    console.log(mark);
});



//find the highest mark?

var max = 0;
for ( var mark of marks) {
    if (mark > max) {
        max = mark
    }
}
console.log(max)
