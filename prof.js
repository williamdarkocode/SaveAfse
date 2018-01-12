var curUser;
//console.log(user);

// var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
    //if(user){
        console.log(firebase.auth().currentUser.displayName);
        curUser = user;
        //firebase.auth().currentUser.displayName;
    //}
    
});

// var aText = ["Serving the AFSE community with student developed tools." ];
//     var iSpeed = 30; // time delay of print out
//     var iIndex = 0; // start printing array at this posision
//     var iArrLength = aText[0].length; // the length of the text array
//     var iScrollAt = 20; // start scrolling up at this many lines
     
//     var iTextPos = 0; // initialise text position
//     var sContents = ''; // initialise contents variable
//     var iRow; // initialise current row
     
//     function typewriterShit()
//     {
//      sContents =  ' ';
//      iRow = 0;
//      var destination = document.getElementById("typedText");
     
//      while ( iRow == iIndex ) {
//       sContents += aText[iRow] + '<br />';
//       iRow++;
//      }
//     //  if(destination.innerHTML != null){
//     //     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//     //  }
//      destination.innerHTML = sContents + aText[0].substring(0, iTextPos) + "";
//      if ( iTextPos++ == iArrLength ) {
//       iTextPos = 0;
//       iIndex++;
//       if ( iIndex != aText.length ) {
//        iArrLength = aText[iIndex].length;
//        setTimeout("typewriterShit()", 500);
//       }
//      } else {
//       setTimeout("typewriterShit()", iSpeed);
//      }
//     }
    
    
    

    //setTimeout(function(){typewriterShit();}, 3700);

    ///////////////////////////////////////////////////////////////////

function printName() {
    var curUser2;
    var aText2;
    firebase.auth().onAuthStateChanged(function(user) {
        curUser2 = user;
        aText2 = ["Hello, " + curUser2.displayName.substring(0,curUser2.displayName.indexOf(" "))+""];

        console.log(curUser2);
        var speedOfType = 30; // time delay of print out
        var index = 0; // start printing array at this posision
        var lengthOfTxt = aText2[0].length; // the length of the text array
        var scrool = 20; // start scrolling up at this many lines
        
        var textPos = 0; // initialise text position
        var content = ''; // initialise contents variable
        var row; // initialise current row
     
  
        content =  ' ';
        row = 0;
        var destination2 = document.getElementById("typeName");
        
        while ( row ==  index ) {
        content += aText2[row] + '';
        row++;
        }
        //  if(destination.innerHTML != null){
        //     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
        //  }
        destination2.innerHTML = content + aText2[index].substring(0, textPos);
        if ( textPos++ == lengthOfTxt ) {
            textPos = 0;
        index++;
        if ( index != aText2.length ) {
        lengthOfTxt = aText2[index].length;
        setTimeout("typewriter()", 500);
        }
        } else {
        setTimeout("typewriter()", speedOfType);
     }
    
    
    
    

    //setTimeout(function(){typewriter();}, 3700);
      });
    
      }

      printName();

    //   $('#myModal').on('shown.bs.modal', function () {
    //     printName();
    //   })

    // function checkIfLoggedIn(){
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if(user == null){
    //             alert("Sign In with AFSE email to view Item.");
    //         }
    //         else{
    //             showMainToggle();
    //         }
    //     });
        
    // }
    
//     function showMainToggle(){
//         if(curUser != null){
//             // $(".btn btn-primary").data("target","#myModal");
//             // $(".btn btn-primary").data("toggle", "modal");

//             $(".modal").toggle("slow");

//     }
// }

var database = firebase.database().ref();

function updateDB(refrence,img, name, description) {
    firebase.database().ref('items/' + refrence).set({
        IMG: img,
        NAME: name,
        DESCRIPTION: description
    });
  }

var items = firebase.database().ref("items/");



function appendCard(id){
    console.log(id);
    firebase.database().ref('/items/'+id).once('value').then(function(snapshot) {
        //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
        var itmName = snapshot.val().NAME;
        var itmImg = snapshot.val().IMG;
        var itmDescription = snapshot.val().DESCRIPTION;
        clear();
        console.log(itmName + " " + itmImg + " " + itmDescription);
        $('#itemContent').append(`<div form="spree" class="card" style="width: 18rem;">
        <img class="card-img-top" src="${itmImg}" alt="${itmName}">
        <div class="card-body">
          <h5 class="card-title">${itmName}</h5>
          <p class="card-text">${itmDescription}</p>
        </div>
      </div>`);
        // ...
      });

      firebase.auth().onAuthStateChanged(function(user) {
        firebase.database().ref('/items/'+id).once('value').then(function(snapshot) {
            //var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            var itmName = snapshot.val().NAME;
            var itmImg = snapshot.val().IMG;
            var itmDescription = snapshot.val().DESCRIPTION;
          
            // ...

            $("#email").val(user.email);
            $("#fullname").val(user.displayName);
            $("#message").val("");
          });
         
      });
}

function clear(){
    while (document.getElementById("itemContent").firstChild) {
        document.getElementById("itemContent").removeChild(document.getElementById("itemContent").firstChild);
    }
    //document.getElementById('itemContent').innerHTML = " ";
}



// function updateDB(refrence,img, name, description){
//     // if(firebase.auth().currentUser.email == null || firebase.auth().currentUser.email == 'null'){
//     //     name = firebase.auth().currentUser.displayName;
//     // }
//     // else{name = firebase.auth().currentUser.email;}
    
//     var item={
//         "IMG": img,
//         "NAME":name,
//         "DESCRIPTION": description
//     }
//     console.log(item);

//     // console.log(document.getElementById(message));
//     // if(document.getElementById(message).value == null || document.getElementById(message).value.length < 1){
//     //     console.log(document.getElementById(message).innerHTML);
//     // }else{
//         database.push(item);
//     //}
    
// }

updateDB("rulers","media/materials/magRuler.jpg", "Magnetic Ruler", "Magnetic white board ruler.");
updateDB("ornaments","media/materials/ornamentsOverhead.jpg", "Desk Ornaments", "Decorate your work space with 3D printed Ornaments");
updateDB("sockets","media/materials/orangeSocket.jpg", "Electric Socket Cover", "3D printed covers for exposed electrical sockets");
updateDB("passes","media/materials/restRoomPasses.png", "Restroom Passes", "3D printed Restroom Passes customised with teacher name & classroom number & indent for post-it notes.");
updateDB("markers","media/materials/markerHolder.jpg","Marker Holder","3D printed containers for board markers and erasers.");
updateDB("binLids", "media/materials/binLid.jpg", "Bin Lid", "Raising awareness for recycling and Global Waste Pollution, with Laser Cut Bin Lids for classrooms.");
