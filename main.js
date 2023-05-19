var namesOfPeople = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	namesOfPeople.push(GuestName);

	console.log(GuestName);
        
    console.log(namesOfPeople);
    var lenghtOfName = namesOfPeople.length;
    console.log(lenghtOfName);
	document.getElementById("displayName").innerHTML=namesOfPeople.toString();
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