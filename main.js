var images=["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i=0;
function Update(){

var UpdatedImage=  images [i];
var Updatedname=  names [i];
 document.getElementById("family").src=UpdatedImage;
 document.getElementById("Member").innerHTML=Updatedname;
 i++;
 var number=5
 if(i>number){
     i=0;
 }
}

