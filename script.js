

function myFunction(n1,n2) {
    var i = n1;
    while (i <= n2) {
        document.getElementById("demo").innerHTML = i
        console.log(i);
        i++
        
    }
   }

function myForFunction(n1,n2) {
    var i;
    for (i = n1; i <= n2; i++) {
        console.log(i);
    }
}

function print(s) { document.getElementById('out').innerHTML += s; }
function println(s) { document.getElementById('out').innerHTML += s + '\n'; }

var size = 5,
    i, j;

for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        print("* ");
    }
    println("");
}

function printBox() {



    function print(s) { document.getElementById('hollow').innerHTML += s; }
    function println(s) { document.getElementById('hollow').innerHTML += s + '\n'; }

    var row = 4,
        column = 6,
        i, 
        j;

    for (i = 1; i <= row; i++) {
        for (j = 1; j <= column; j++) {
            if (i == 1 || i == row ||
                j == 1 || j == column)
                print("* ");
            else
                print("  ");

        }
        println("");
        console.log(printBox);
        }

}