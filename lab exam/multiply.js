function validatenumber(n2){
        if(n2>0){
            return true;

        }else{
            return false;
        }
}


function calculate(choice){ 

    const num1 = parseInt(document.getElementById("num1").value);

    

    if(choice === "m"){
        const num2 = parseInt(document.getElementById("num2").value);
        const result = num1 * num2 ;


        document.getElementById("answer").innerHTML= "Multiplication is : " + result ;
        document.getElementById("result").value= result
    }else{

        const num2 = parseInt(document.getElementById("num2").value);
        let flag = validatenumber(num2);
        if(flag){
            
            const result = num1 / num2 ;

            document.getElementById("answer").innerHTML=" Division is : " + result

            document.getElementById("result").value= result
        }else{

            document.getElementById("answer").innerHTML=" Enter  a non zero number !"
        }

    }

}
