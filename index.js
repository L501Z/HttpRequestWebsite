//event listener try and catch statement to process what happens when the user clicks the button


//SWITCH TO XMHL BUTTON
window.addEventListener("DOMContentLoaded", (event) => {
    try{
        let buttonstate = document.getElementById("XML");
        if (buttonstate){
            buttonstate.addEventListener("click", XMHL);
        }
    } catch (error){
        console.log(error)
    }
});
//SWITCH TO FECTH BUTTON
window.addEventListener("DOMContentLoaded", (event) => {
    try{
        let buttonstate = document.getElementById("Fetch");
        if (buttonstate){
            buttonstate.addEventListener("click", fetchbutton);
        }
    } catch (error){
        console.log(error)
    }
});
//SEND XMLHTTPREQUEST BUTTON
window.addEventListener("DOMContentLoaded", (event) => {
    try{
        const buttonstate = document.getElementById("XMLHttpRequestButton");
        if (buttonstate){
            buttonstate.addEventListener("click", SendXMLReq);
        }
    } catch (error){
        console.log(error);
    }
});
//SEND XMLHTTPREQUEST BUTTON
window.addEventListener("DOMContentLoaded", (event) => {
    try{
        let buttonstate = document.getElementById("FetchRequest");
        if (buttonstate){
            buttonstate.addEventListener("click", SendFetchRequest);
        }
    } catch (error){
        console.log(error)
    }
});


// this function creates an object using 'XMLHttpRequest' which sends a http request to the web api

function SendXMLReq(){
    //creating url variable
    let url = document.getElementById("apilink").value;
    
    //creating an instance of 'XMLHttpRequest' called 'req'
    const req = new XMLHttpRequest();
    console.log(req.responseText);
    //adding an event listener to keep track of changes 
    req.addEventListener('readystatechange', () => {
        
        //if the state is equal to 4 we know there is data ready
        if (req.readyState === 4){
            
            if (req.status !== 200){
                console.error("bad request status code: ", req.status)

            }

            //the data we need is stored in 'responseText'
            const data = req.responseText;
            document.getElementById("output").innerHTML = req.responseText;
        }
    })
    //opening and sending the request, defining which method ('GET') and the url
    req.open('GET', url);
    req.send();

}


//this function uses the 'fetch' method to send a http request to the web api

//using async function is required to get a response
async function SendFetchRequest(){

    // REPEATED CODE EXPLORE OPTIONS!
    let url = document.getElementById("apilink").value;
    //creating 'response' and 'data' variables to obtain and store a http request and response
    const response = await fetch(url);
    const data = await response.json();
    //converting 'data' into string using 'stringify'
    const mydata = JSON.stringify(data);
    //outputting data to html page user 'innerHTML' to get inside the element and place data there in realtime
    document.getElementById("output").innerHTML = mydata;
}

// (VISUAL)FUNCTIONS FOR SWITCHING BETWEEN 'XMLHTTP' and 'FETCH' REQUESTS
//         IMPLEMENTING 'style' TO CHANGE FROM 'visible' and 'hidden'

function fetchbutton(){
    const fetchreq = document.getElementById("FetchRequest");
    fetchreq.style.visibility = 'visible';
    const xmlhreq = document.getElementById("XMLHttpRequestButton");   
    xmlhreq.style.visibility = 'hidden';
    const xml = document.getElementById("XML");   
    xml.style.visibility = 'visible';
    xml.style.opacity = '0.3';
    xml.style.transition = '0.1s';
    const fetch = document.getElementById("Fetch");   
    fetch.style.color = "black";
    fetch.style.opacity = '1';
    fetch.style.transition = '0.1s';
    const xmlpng = document.getElementById("xmlcode");   
    xmlpng.style.visibility = 'hidden';
    const fetchpng = document.getElementById("fetchcode");   
    fetchpng.style.visibility = 'visible';
    const graybox = document.getElementById("codepics");
    graybox.style.height = "500px";

    const whitebox = document.getElementById("HTTPREQUESTBOX");
    whitebox.style.height = "1400px"
}

function XMHL(){
    const btndisp = document.getElementById("XMLHttpRequestButton");
    btndisp.style.visibility = 'visible';
    const btndisp1 = document.getElementById("FetchRequest");   
    btndisp1.style.visibility = 'hidden';
    const btndisp2 = document.getElementById("Fetch");   
    btndisp2.style.visibility = 'visible';
    btndisp2.style.opacity = '0.3';
    btndisp2.style.transition = '0.1s';
    const btndisp3 = document.getElementById("XML");   
    btndisp3.style.color = "black";
    btndisp3.style.opacity = '1';
    btndisp3.style.transition = '0.1s';
    
    const xmlpng = document.getElementById("xmlcode");   
    xmlpng.style.visibility = 'visible';

    const fetchpng = document.getElementById("fetchcode");   
    fetchpng.style.visibility = 'hidden';

    const graybox = document.getElementById("codepics");
    graybox.style.height = "860px";

    const whitebox = document.getElementById("HTTPREQUESTBOX");
    whitebox.style.height = "1700px"
}


// CREATING THE FUNCTION THAT ACCEPTS MORE PARAMETERS INCLUDING METHOD CHANGE

window.addEventListener("DOMContentLoaded", (event) => {
    try{
        let buttonstate = document.getElementById("CreateRequest");
        if (buttonstate){
            buttonstate.addEventListener("click", CreateReq);
        }
    } catch (error){
        console.log(error)
    }
});
window.addEventListener("DOMContentLoaded", (event) => {
    try{
        let buttonstate = document.getElementById("AddHeader");
        if (buttonstate){
            buttonstate.addEventListener("click", addheaders);
        }
    } catch (error){
        console.log(error)
    }
});
window.addEventListener("DOMContentLoaded", (event) => {
    try{
        let buttonstate = document.getElementById("AddBody");
        if (buttonstate){
            buttonstate.addEventListener("click", addbody);
        }
    } catch (error){
        console.log(error)
    }
});
//CREATING A FUNCTION TO START THE REQUEST PROCESS


function addheaders(){
    let headername = document.getElementById("headname").value;
    let headervalue = document.getElementById("headvalue").value;
    let data = document.getElementById("headerviewer").value;

    if (data){
        data = data + "\n" + headername + ":" + headervalue;
    }
    else{
        data = data + headername + ":" + headervalue;
    }
    document.getElementById("headerviewer").innerHTML = data;
}
function addbody(){
    let bodyname = document.getElementById("bodyname").value;
    let bodyvalue = document.getElementById("bodyvalue").value;
    let data = document.getElementById("bodyviewer").value;
    
    if (data){
        data = data + "\n" + bodyname + ":" + bodyvalue;
    }
    else{
        data = data + bodyname + ":" + bodyvalue;
    }
    document.getElementById("bodyviewer").innerHTML = data;
}


async function CreateReq(){

    let url = document.getElementById("urlinput").value;
    let headers = document.getElementById("headerviewer").value;
    let body = document.getElementById("bodyviewer").value;
    body = headers.split("\n").join(":").split(":");
    let method = document.getElementById("method").value;
    let headersarray = headers.split("\n").join(":").split(":");

    if (method =="PUT"){
        PutRequest(url,headersarray,body,method);   
    }
    if (method =="GET"){
        GetRequest(url,headersarray,body,method);}
    else{
        PostRequest(url,headersarray,body,method);
    }


}

async function PutRequest(url,allheaders,body,method){

    console.log(allheaders);
    try{
        const response = await fetch(url,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id : 1,
                title : "Updated Title"
            }) 
        });
        const data = await response.json();
        const mydata = JSON.stringify(data);
        console.log(mydata)
    }catch(error){
        console.log(error)
    }
}


async function GetRequest(url,allheaders,body,method){

        console.log(allheaders);

        try{
            const response = await fetch(url,{
                method: "GET"
            });
            const data = await response.json();
            const mydata = JSON.stringify(data);
            console.log(mydata)
        }catch(error){
            console.log(error)
        }
}
async function PostRequest(url,allheaders,body,method){

    const HeadersPost = new Headers();
    const HeadersPost2 = new Headers();
    const HeadersPost3 = new Headers();
    HeadersPost.append(allheaders[0] , allheaders[1]);
    HeadersPost2.append(allheaders[2] , allheaders[3]);
    HeadersPost3.append( allheaders[4] , allheaders[5]);

    try{

        let myid = "32470a542af446d28328465d23ef3521";
        let mysecret = "fd390070de78473fae3b8ec55e738990";
        let myurl = "https://localhost:4000/";
        

        const response = await fetch(url,{
            method: "POST",

            headers : HeadersPost,  
            headers : HeadersPost2,
            headers : HeadersPost3,
            /*data: {
              "grant_type":    "authorization_code",
              "code":          code,
              "redirect_uri":  myurl,
              "client_secret": mysecret,
              "client_id":     myid,
            }*/
        });
        const data = await response.json();
        const mydata = JSON.stringify(data);
        console.log(mydata)
    }catch(error){
        console.log(error)
    }
}