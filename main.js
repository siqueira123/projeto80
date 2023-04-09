var names = ["roberto","adalberto","pedro","tênia","bambí"]

var guestName = document.getElementById("name1").ariaValueMax;
names.push(guestName);

names.sort();

function searching()
{
    var s=document.getElementById("s1").value

    var found=0;
    var j;

    for(j=0; j<names.length; j++)
    {
        if(s==names[j]){
            found=found+1
        }
    }
    document.getElementById("p2").innerHTML = "nome encontrado"+found+"vez(es)";
    console.log("nome encontrado"+found+ "vez(es)");
}
function submit()
{
    nameOfNames = [];
    var displayNames = [];

    for (var j = 1; j <= 4; j++)
    {
        var nameOfNames = document.getElementById("caixaDeTexto"+j).value;
        console.log(names);
        namesy.push(caixaDeTexto);
    }

    console.log(names);

    var lenghtOfNames = names.lenght;
    console.log(lenghtOfNames);

    for  (var k = 0; k <lenghtOfNames; k++)
    {
        displayNames.push("<h4>Name - "+ names[k] + "</h4>");
        console.log(displayNames);
    }

    console.log(displayNames);
    document.getElementById("displayNameWithComes").innerHTML = displayStudentArray;

    var removeComas = displayStudentArray.join("div");
    console.log(removeCommas);
    document.getElementById("semDiv").innerHTML = removeCommas;

    document.getElementById("submitButton").style.display = "none";
    doccument.getElementById("sortButton").style.display = "inline-block";
}