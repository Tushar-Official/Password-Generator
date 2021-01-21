var store=document.getElementById("show");
function generateP()
{
    var pass = ''; 
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$'; 
    for(let i=0;i<=str.length;i++){
        var char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);

    }
    return pass;
}

function run() { 
    store.innerHTML = generateP(); 
} 