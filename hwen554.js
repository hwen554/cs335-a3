// HOME PAGE

async function home() {
  document.getElementById("home").style.display = "block";
  document.getElementById("login").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("book").style.display = "none";
  console.log("home");
  const fetchPromise = await fetch("https://cws.auckland.ac.nz/gas/api/Version", {
    headers: { Accept: "application/json" },
  });
  const streamPromise = await ( fetchPromise).text();
  const noQuotes = streamPromise.split('"').join("");
  //console.log(noQuotes);

  const tmp = document.getElementById("version");
  tmp.innerHTML = "@All rights reserved " + noQuotes;
}

async function login() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("book").style.display = "none";
  console.log("login");
}
async function game() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("shop").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("book").style.display = "none";
  console.log("game");
}
async function shop() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("shop").style.display = "block";
  document.getElementById("register").style.display = "none";
  document.getElementById("book").style.display = "none";
  console.log("shop");
}
async function register() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("register").style.display = "block";
  document.getElementById("book").style.display = "none";
  console.log("register");
}

async function book() {
  document.getElementById("home").style.display = "none";
  document.getElementById("login").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("register").style.display = "none";
  document.getElementById("book").style.display = "block";
  console.log("book");
}
const signUp=()=>{
  
  const comb={
    'username':document.getElementById('newName').value,
    'password':document.getElementById('newPassword').value,
    'address':document.getElementById('newAddress').value
  }
  fetch("https://cws.auckland.ac.nz/gas/api/Register",{
    method:'POST',
    headers:{
      'accept': 'text/plain',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(comb)
  }).then(result=>result.text()).then(result=>document.getElementById('feedback').innerText = result);

};

let loginState = false;
let userName = "";
let password = "";
const cLogin = () => {
  const username = document.getElementById("userNameLogin").value;
  const password = document.getElementById("passwordLogin").value;

  console.log(username);
  console.log(password);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Basic ${btoa(username + ":" + password)}`);
  console.log(btoa(username + ":" + password));
  console.log(myHeaders)
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    
  };
  fetch("https://cws.auckland.ac.nz/gas/api/VersionA", requestOptions)
    .then((response) => response.text())
    .then((result) => {
       if (result === '1.0.1 (auth)'){
        document.getElementById("loginfeedback").innerText = "Successful login!"
        document.getElementById("loginstatus").innerHTML = `<p>${username} <button onclick="logOut()">logout</button></p>`
        loginState = true
        console.log(result)
        alert("You've login!")
       }else{
        document.getElementById("loginfeedback").innerText = "Failed login!"
       }
    })
    .catch((error) => console.log("error", error));
}
const Login =() =>{
  userName = document.getElementById('userNameLogin').value;
  password = document.getElementById('passwordLogin').value;
  fetch('https://cws.auckland.ac.nz/gas/api/VersionA',{
      method:'GET',
      headers:{
          'accept':'text/plain',
          'Authorization':'Basic '+btoa(`${userName}:${password}`)
      }
  }).then(result => result.status)
    .then((result)=>{
      if(result === 200){
          document.getElementById("loginfeedback").innerText = "Successfully Login!"
          document.getElementById("loginstatus").innerHTML = `<p>${userName}<button onclick="logOut()">{logout}</button></p>`
          loginState = true
          //console.log('2.0.1 (auth)')
          //alert("Login Success! Your status is "+loginState)
          console.log(result)
          //console.log(result)
          //return "2.0.1 (auth)"
      }else{
          document.getElementById("loginfeedback").innerText = "Fail to login"
          loginState = false
          console.log(loginState)
      }
      
    });
}
/*const checklogin=()=>{
  userName = document.getElementById('userNameLogin').value;
  password = document.getElementById('passwordLogin').value;
  const xhr = new XMLHttpRequest();
  const uri = 'https://cws.auckland.ac.nz/gas/api/VersionA';
  xhr.open('GET',uri,true,userName,password);
  xhr.withCredentials = true;
  xhr.onload =()=>{
    if(xhr.status==200){
      document.getElementById("loginfeedback").innerText = "Successfully Login!"
      document.getElementById("loginstatus").innerHTML = `<p>${userName}<button onclick="logOut()">{logout}</button></p>`
      loginState = true
      console.log('2.0.1 (auth)')
      alert("Login Success! Your status is "+loginState)
    }else{
      document.getElementById("loginfeedback").innerText = "Fail to login"
      loginState = false
      console.log(loginState)
    }
  }
  xhr.send();
}*/

/*const checklog=()=>{
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("GET", "https://cws.auckland.ac.nz/gas/api/VersionA");
  xhr.setRequestHeader("Authorization", "Basic ejoxMTE=");

  xhr.send();
}*/

const logOut=()=>{
  loginState = false;
  document.getElementById("loginstatus").innerText = "";
  document.getElementById("loginfeedback").innerText = "Successful log out!";
  alert("You've log out!")
}



const writeComment=()=>{
    const comment = document.getElementById("comment").value;
    const name = document.getElementById("name").value;
    const combo = {comment,name};
    var myHeaders = new Headers();
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body:JSON.stringify(combo)
        // redirect: "follow",
    };
    fetch("https://cws.auckland.ac.nz/gas/api/Comment",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(combo)
    })
    .then(()=>getComment());
}

const getComment=()=>{
    const fetchPromise = fetch("https://cws.auckland.ac.nz/gas/api/Comments",{headers:{'content-Type':'text/html'}});
    const streamPromise = fetchPromise.then((response)=>response.text());
    streamPromise.then((data)=>{
        document.getElementById("showComments").innerHTML = data;
    })
}
const getItems =()=>{
  const fetchPromise = fetch("https://cws.auckland.ac.nz/gas/api/AllItems");
  const streamPromise = fetchPromise.then(response=>response.json());
  streamPromise.then(data=>showItems(data));
  
}

const showItems =(items)=>{
  let htmlString = `<tr><th>Pictures</th><th>Description</th></tr> `
  console.log(items);
  const showItem = (item) =>{
    htmlString +=
                  `<tr>
                    <td><img src="https://cws.auckland.ac.nz/gas/api/ItemPhoto/${item.id}"width="130"/></td>
                    <td>
                      <h3>${item.name}</h3>
                      <p>${item.description}</p>
                      <p>${item.price}</p>
                      <button onclick="buyItem(${item.id})">Buy Now</button>
                      <hr/>
                    </td>
                  </tr>`
    document.getElementById('itemTable').innerHTML = htmlString;
  }
  items.forEach(item=>showItem(item))
}

const searchItem=()=>{
  let token = document.getElementById('searchInput').value;
  if (token==""){
    getItems();
  }else{
    const fetchPromise = fetch(`https://cws.auckland.ac.nz/gas/api/Items/${token}`);
    const streamPromise = fetchPromise.then(response =>response.json());
    streamPromise.then(items=>{
      if(items.length != 0){
        showItems(items);
      }else{
        document.getElementById('itemTable').innerHTML = "";
      }
    })
  }  
}
const buyItem=(itemID)=>{
  if(loginState===false){
      alert("You need to login first")
      login();
  }{
      fetch(`https://cws.auckland.ac.nz/gas/api/PurchaseItem/${itemID}`,{
          method:'GET',
          headers:{'accept':'text/plain,application/json','Content-Type':'application/json',
          'Authorization':'Basic '+btoa(`${userName}:${password}`)}
      }).then(result =>result.json()).then(result=>{
          
          document.getElementById("fa").innerHTML = `Thank for ${result['userName']} buying ${result['productID']}`+ 
          `<div id="mdiv">
            <div onclick="close()" class="mdiv">
             <div onclick="close()" class="md"></div>
            </div>
           </div>`;
          document.getElementById("fa").style.display = "block";
          auto();
      })
  }
}
const close=()=>{
  document.getElementById('fa').style.display = "none";
}
const auto=()=>{
  setTimeout("document.getElementById('fa').style.display='none'",2600);
}
const move=(event)=>{
  event.dataTransfer.setData('text/plain',event.target.id)
}

const settledown =(event)=>{
  if (event.dataTransfer!==null){
    const ID = event.dataTransfer.getData('text/plain')
    const rivalId = event.target.id;
    const playerId = event.target.id;
    if(rivalId===null){
      event.target.appendChild(document.getElementById(ID))
      console.log(playerId)
    }else if(rivalId!==null){
      
      
    }else{
      event.target.appendChild(document.getElementById(ID))
    }
    event.target.appendChild(document.getElementById(ID))
  }
}

const done=(event)=>{
  event.preventDefault();
  
}

const trash=(event)=>{
  if (event.dataTransfer!==null){
    const data = event.dataTransfer.getData('text/plain')
    event.target.appendChild(document.getElementById(data).remove())
  }else if(event.dataTransfer===null){

  }
}

let gameID = '';
const sGame=()=>{
  if(loginState===false){
    alert('Login first!');
    console.log('Login first!')
    login();
  }
  else{
    const fetchPromise = fetch(`https://cws.auckland.ac.nz/gas/api/PairMe`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Basic '+btoa(`${userName}:${password}`)
      }
  }).then(res=>res.json())
  fetchPromise.then(data=>{
    console.log(data);
    gameID=data.gameId;
    if(data.state==='wait'){
      console.log(data.player1)
      alert("Wait for another player to join, Check try again")
      document.getElementById("Feedback").innerText = 'Wait for another player to join. Check try again';
      document.getElementById('quit').style.display='block';
    }else{
      document.getElementById('quit').style.display='block';
      if(userName ===data.player1){
        document.getElementById('Feedback').innerText = `Great ${userName}, you are playing with ${data.player2}. Your pieces are white.Good luck!`;
        document.getElementById("tryGame").style.display = "none";
        document.getElementById("SendMyMove").style.display = "block";
        //document.getElementById('quitGame').style.display='block';
      }else if(userName!==data.player1){
        document.getElementById("Feedback").innerText = `Great ${data.player2}, you are playing with ${data.player1}. Your pieces are black.Good luck!`;
        document.getElementById("tryGame").style.display = "none";
        document.getElementById("GetTheirMove").style.display = "block";
      }else if(userName===data.player2){
        document.getElementById("Feedback").innerText = `Great ${data.player2}, You are playing with ${data.player1}. Your pieces are black.Good luck!`;
        document.getElementById("tryGame").style.display = "none";
        document.getElementById("GetTheirMove").style.display = "block";
      }else if(userName!==data.player2){
        document.getElementById("Feedback").innerText = `Great ${userName}, you are playing with ${data.player2}. Your pieces are white.Good luck!`;
        document.getElementById("tryGame").style.display = "none";
        document.getElementById("SendMyMove").style.display = "block";
      }else{
        document.getElementById("Feedback").innerText = `Great ${data.player2}, you are playing with ${data.player1}. Your pieces are white.Good luck!`;
        document.getElementById("tryGame").style.display = "none";
        document.getElementById("GetTheirMove").style.display = "block";
        //document.getElementById('quitGame').style.display='block';
      }
      console.log(data.player2)
    }
})
  }
}
let lastMove = ""; //Define a var to identify the state of movement, default value should be null.
const PostMyMove=()=>{
  // construct a combo of my movement,in case to get ready to post movement to database.
  let MyMove={
    "gameId":gameID,
    "move":document.getElementById("chess").innerHTML
  }
  /* if lastmove still be null,then popup window to indicate , if I made move, then post it to database using api with POST method.
  And get return data back and display alertion and update lastmove in html*/
  if(document.getElementById("chess").innerHTML===lastMove){
    alert("You havenot made move")
  }else{
    console.log(document.getElementById("chess").innerHTML);
    const fetchPromise = fetch(`https://cws.auckland.ac.nz/gas/api/MyMove`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Basic '+btoa(`${userName}:${password}`)
      },
      body:JSON.stringify(MyMove)
    }).then(result=>result.text())
    document.getElementById("SendMyMove").style.display = "none";
    document.getElementById("GetTheirMove").style.display = 'block';
    alert("Successfully post your move")
    lastMove = document.getElementById("chess").innerHTML;
  }
}
const TheirMove=()=>{
  /*to get rival's move using api with get method and gain return data. If data been returned shows 'no such game id' then what I did is to print exit game.Otherwise
  update and display new move in the html*/
  fetch(`https://cws.auckland.ac.nz/gas/api/TheirMove?gameId=${gameID}`,{
    method:"GET",
    headers:{
      'Authorization':'Basic '+btoa(`${userName}:${password}`)
    },
  }).then(res=>res.text()).then(data=>{
    if(data==='(no such gameId)'){
      console.log("exit game")
    }else if(data!==''){
      
      document.getElementById("chess").innerHTML = data;
      document.getElementById("SendMyMove").style.display = "block";
      document.getElementById("GetTheirMove").style.display = "none";
      alert("Successfully receive rival's move")
    }else{
      alert("Your rivals haven't move")
      console.log("Failed receive rival's move")
    }
    lastMove = document.getElementById("chess").innerHTML;
  })
}

const quit=()=>{
  logOut();
  document.getElementById("SendMyMove").style.display = "none";
  document.getElementById("GetTheirMove").style.display = "none";
  document.getElementById("quit").style.display = "none";
  document.getElementById("tryGame").style.display = "block";
  document.getElementById("game").style.display = "none";
  document.getElementById("chess").innerHTML;
  if(loginState===false){
    login();
  }
}
/*let gameID = '';
const start=()=>{
  if(loginState===false){
    alert('Login first!');
    signUp();
  }else{
    fetch(`https://cws.auckland.ac.nz/gas/api/PairMe`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Basic '+btoa(`${userName}:${password}`)
      }
    }).then(result=>result.json()).then(data=>{
      console.log(data);
      gameID=data.gameId;
      if(data.state==='wait'){
        console.log(data.player1)
        document.getElementById("gameFeedback").innerText = 'Wait for another player to join';
        document.getElementById('leave').style.display='block';
      }else{
        document.getElementById('leave').style.display='block';
        if(userName ===data.player1){
          document.getElementById('gameFeedback').innerText = `Great ${userName}, you are playing with ${data.player2}`;
          document.getElementById("start").style.display = "none";
          document.getElementById("mymove").style.display = "block";
        }/*else if(userName!==data.player1){
          document.getElementById("gameFeedback").innerText = `Great ${data.player2}, youdasdasd are playing with ${data.player1}`;
          document.getElementById("start").style.display = "none";
          document.getElementById("theirmove").style.display = "block";
        }else if(userName===data.player2){
          document.getElementById("gameFeedback").innerText = `Great ${data.player2}, You are playing with ${data.player1}`;
          document.getElementById("start").style.display = "none";
          document.getElementById("theirmove").style.display = "block";
        }else{
          document.getElementById("gameFeedback").innerText = `Great ${data.player2}, you are playing with ${data.player1}`;
          document.getElementById("start").style.display = "none";
          document.getElementById("theirmove").style.display = "block";
        }
        console.log(data.player2);
      }
    })
  }
}
let lastMove = "";
const mymove=()=>{
  let comb={
    "gameID":gameID,
    "move":document.getElementById("chess").innerHTML
  }
  if(document.getElementById("chess").innerHTML===lastMove){
    alert("You haven't made move");
  }else{
    console.log(document.getElementById("chess").innerHTML);
    fetch(`https://cws.auckland.ac.nz/gas/api/MyMove`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Basic '+btoa(`${userName}:${password}`)
      },
      body:JSON.stringify(comb)
    }).then(result=>result.text())
    document.getElementById("mymove").style.display = "none";
    document.getElementById("theirmove").style.display = 'block';
    lastMove = document.getElementById("chess").innerHTML;
  }
}
const theirmove=()=>{
  const fetchPromise = fetch(`https://cws.auckland.ac.nz/gas/api/TheirMove?gameId=${gameID}`,{
    method:"POST",
    headers:{
      'Authorization':'Basic '+btoa(`${userName}:${password}`)
    },
  }).then(res=>res.text()).then(data=>{
    if(data==='(no such gameId)'){
      console.log("exit game")
    }else if(data===''){
      alert('Your opps havenot move')
    }else{
      document.getElementById("chess").innerHTML = data;
      document.getElementById("mymove").style.display = "block";
      document.getElementById("theirmove").style.display = "none";
    }
    lastMove = document.getElementById("chess").innerHTML;
  })
}*/
const loading=()=>{
  //lastMove = document.getElementById("chess").innerHTML;
  lastMove = document.getElementById("chess").innerHTML;
  home();
  getItems();
  getComment();
}
window.onload = loading;
//home();
