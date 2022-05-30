// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC_JXTKi6E8FgAc1xigzhG20snK0rtqbBg",
      authDomain: "qwitter-92aa9.firebaseapp.com",
      databaseURL: "https://qwitter-92aa9-default-rtdb.firebaseio.com",
      projectId: "qwitter-92aa9",
      storageBucket: "qwitter-92aa9.appspot.com",
      messagingSenderId: "897937724236",
      appId: "1:897937724236:web:948577df0c598a0648b5e9"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr></hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}