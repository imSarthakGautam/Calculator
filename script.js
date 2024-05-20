// Logic :
/*
represent each number key by some variables
represent each function key by some variables

*/
let cstring = ""
let buttons = document.querySelectorAll(".btn");
let input = document.querySelector(".input");
let output =document.querySelector(".output");
// input.innerHTML=cstring;
console.log(buttons);
let arrBtn= Array.from(buttons)
let flag=0;
//For each buttons on click

arrBtn.forEach( button => {
    let key=button.querySelector('span')
    key.addEventListener('click', function(ev){
        console.log(ev.target.textContent);

        if( ev.target.textContent=="="){
            cstring=eval(cstring)
            output.innerHTML=cstring;
            
        }
        else if (ev.target.textContent=="DEL"){
             cstring= cstring.substring(0,cstring.length-1)
             input.innerHTML=cstring;
        
            }
        else if (ev.target.textContent=="AC"){
            cstring="";
            input.innerHTML=cstring;
            output.innerHTML='0';
        }
        else if  (ev.target.textContent=="()"){
            // input.value=cstring;
            if (flag==0){
            cstring =cstring + '(';
            flag=1;}
            else{
                cstring =cstring + ')'; 
                flag=0;
            }
            //expression in terms of number + -*()
            input.innerHTML=cstring


        } else {
           
            // input.value=cstring;
            cstring =cstring + ev.target.textContent;
            //expression in terms of number + -*()
            input.innerHTML=cstring
        }

    }); 
});