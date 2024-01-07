const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value === '')
        {alert("You must write something!")}
    else
    {
        let li = document.createElement("li");         //li naam k ek variable se humne ek li create ki
        li.innerHTML = inputBox.value;            //input box ki value humne li main input kr di.                 //inputBox ki value hum humare li variable main dalenge       
        listContainer.appendChild(li);                 //phir hum humare li ko list container main append karenge
        let span = document.createElement("span");    //span is a basic container mostly used for styling with CSS. It has not inherent styling options.
        //so , upar humne ek span naam ka variable create kiya aur uske help se we created a span jiske andar humne 'x' sign ko input kiya with help the spcl code.
        span.innerHTML = "\u00d7";                    //this code is code of a cross sign
        li.appendChild(span);
    }
    inputBox.value = "";        //we used this so that we can empty the input box and create an empty space.
    saveData();                //whenever we add a new task, it will save the updated content in the browser.
}

listContainer.addEventListener("click", function(e)         //yaha pe e is the parameter joh usse receive hota hai
{
    if(e.target.tagName === "LI")               //Tagname tells us ki selected part IMG hai, JS hai, LI hai or else kya hai.
    {                                           //The target property returns the element where the event occured.
        //Therefore, upar parameter ka tagname return kiya humne with help of target and then check kiya ki voh tagname LI hi hai na?
        e.target.classList.toggle("checked");   //It removes an existing token from the list and returns false. If the token doesn't exist,it's added and the function returns true.
        saveData();                             //we want to save the data even after we cut through the text.
    }                                           //upar hum checked classs name ko toggle kar rahe hai.
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();       //agar element SPAN hai (matlab X sign) toh hum parentElement ko target krke usse hi uda denge
        saveData();                            //we want to save data even after removing the parentElement
    }
},false);

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);         //yaha hum localStorage main container k inner value ko add kar denge.
    //setItem: when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
    //Syntax for setItem: setItem(keyName, keyValue)
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");       //yaha hum localStorage se data le rahe hai aur listContainer k innerHTML main display kr rahe hai.
    //getItem: When passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
}

showTask();