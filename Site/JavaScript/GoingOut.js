var inputPlace=" ";
var inputTime=0;
var inputArriveTime =0;
var confirmation=""
var confirmBox = document.getElementById("confirmBlank");
confirmBox.style.display = "none";
var confirmButtn = document.getElementById("confirmButton");

function GetPlace(){
     inputPlace = document.getElementById("visitPlace").value
            
}

function GetArriveTime(){
    inputArriveTime = document.getElementById("arriveTime").value

}

function GetVisitTime(){
      
    inputTime = document.getElementById("visitTime").value
 
}



function ToConsole(){
    console.log("visit place= " + inputPlace)
    console.log("arrive time= " + inputArriveTime +" mins")
    console.log("visit time= " + inputTime +" mins")
}

function ShowConfimation(){

    confirmation="Please confirm:<br><br>" +"-Place: " +inputPlace + "<br>-Arrive time: "+inputArriveTime+" mins"+ "<br>-Visit time: "+inputTime +" mins"
    document.getElementById('confirm').innerHTML = confirmation
    confirmBox.style.display = "block"
}

document.getElementById('EnterButton').onclick = () => {
    
    GetPlace();
    GetArriveTime();
    GetVisitTime();
    ShowConfimation();
    
}

document.getElementById('confirmButton').onclick = () => {
    ToConsole();
    getJSON('http://91.181.93.103:3040/get/area')
    document.getElementById('confirm').innerHTML = "<br><br>Thank you for your contribution!<br><br>"
    document.getElementById('cancelButton').innerHTML = "Back"
    confirmButtn.style.display ="none"
}
document.getElementById('cancelButton').onclick = () => {
    confirmButtn.style.display ="initial"
    confirmBox.style.display = "none"
    document.getElementById('cancelButton').innerHTML = "Cancel"
}

var getJSON = function(url) {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://91.181.93.103:3040/get/area";
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    
};
function myFunction(arr) {
    console.log(arr);
  }