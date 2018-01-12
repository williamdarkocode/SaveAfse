const user = firebase.auth().currentUser;
console.log(user);



$(".card").hide();
$("#firebaseui-auth-container").hide();
//$('.alert').hide();
//$(document).ready(function(){
    // set up text to print, each item in array is new line
// $("#myModal").fadeIn();


var listOfTools = "listTools";
var aText = new Array(
    "Serving the AFSE community with student developed tools." 
    // "These tools include:",
    // `<ul>
    //     <li class='${listOfTools}'>3D printed Restroom Passes</li>
    //     <li class='${listOfTools}'>Laser-cut bin lids</li>
    //     <li class='${listOfTools}'>Maker Holders and other writing utencil containers</li>
    //     <li class='${listOfTools}'>Magnetic whiteboard rulers</li>
    //     <li class='${listOfTools}'>Exposed electric socket covers</li>
    //     <li class='${listOfTools}'>3D printed desk ornaments</li>
    // <ul>`
    );
    var iSpeed = 30; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedText");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
    //  if(destination.innerHTML != null){
    //     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    //  }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    

    setTimeout(function(){typewriter();}, 3700);
//});



/////gradual show of tile items and signup btns

// setTimeout(function(){
//    var time = 1;
    // for(var i = 0; i < 6; i++){
    //     //$("p:nth-child(3)")
    //     var idx = i;
    //     setTimeout(function(){
    //         $(".card:eq(`idx`)").fadeIn(1000);
    //     }, time);
    //     time+=1;
    // }  

    var arb = 1;

    var baseTime = 5000;
    setTimeout(function(){
        $(".card:eq(0)").fadeIn(1000);
        }, (baseTime+1000)*arb);
    
    setTimeout(function(){
        $(".card:eq(1)").fadeIn(1000);;
        }, (baseTime+2000)*arb);

  setTimeout(function(){
        $(".card:eq(2)").fadeIn(1000);;
        }, (baseTime+3000)*arb);

        
    setTimeout(function(){
        $(".card:eq(3)").fadeIn(1000);;
        }, (baseTime+4000)*arb);

    setTimeout(function(){
        $(".card:eq(4)").fadeIn(1000);;
        }, (baseTime+5000)*arb);

    setTimeout(function(){
        $(".card:eq(5)").fadeIn(1000);;
        }, (baseTime+6000)*arb);

    setTimeout(function(){
        $("#firebaseui-auth-container").fadeIn(1000);;
        }, (baseTime+7000)*arb);

    
// }, 5000);




////

var provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const signUpBtn = document.getElementById("firebaseui-auth-container");

signUpBtn.addEventListener('click', e => {


firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    
    var token = result.credential.accessToken;
    // The signed-in user info.
    user = result.user;
    //showMainToggle();
   // arb=0;
    
    console.log(user);

    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

});



var database = firebase.database().ref();




function signOutOnLoad(){
    if(user){
        firebase.auth().signOut();
    }
}

// window.onload = signOutOnLoad();

window.onload = null;

const viewItmBtn = document.getElementsByClassName("btn btn-primary");


// $(".btn btn-primary").click(function(){
//     if(!user){
//         alert("Sign In with AFSE email to view Item.");
//     }
// });


function checkIfLoggedIn(){
    if(!user){
        alert("Sign In with AFSE email to view Item.");
    }
}

function showMainToggle(){
    if(user){
        $(".btn btn-primary").data("target","#myModal");
        $(".btn btn-primary").data("toggle", "modal");
    }
}


// viewItmBtn.addEventListener('click', e => {
//     $('.alert').fadeIn(1000);
// });