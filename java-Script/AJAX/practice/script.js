let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState = 4 && this.status == 200){
        myFunction(this.responseText)
    }
}

xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
xhttp.send();

function myFunction(data){
    console.log(data);
}

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function(){
    if(this.readyState = 4 && this.status == 200){
        myFunction(this.responseText)
    }   
}
xhttp2.open("POST", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
function myFunction2(data){
    console.log(data);
}