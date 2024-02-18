//Todo: Make M+ M- And MC functional

let string= "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click',(e)=>{
       if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
    
        else if(e.target.innerHTML == 'c'){
            string = ""
            document.querySelector('input').value = string;
        }
    else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    
    })
})


// function addToResult(value) {
//     document.getElementById('result').value += value;
//   }

//   function clearResult() {
//     document.getElementById('result').value = '';
//   }

//   function calculate() {
//     try {
//       document.getElementById('result').value = eval(document.getElementById('result').value);
//     } catch(error) {
//       document.getElementById('result').value = 'Error';
//     }
//   }