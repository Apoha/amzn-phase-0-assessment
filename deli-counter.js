// 1. Write your functions here


//2. Example Usage

const katzDeli = []


                    ///////// 1 FUNCTION takeANumber ///////////////////

function takeANumber(arr, name){
 arr.push(name)
   console.log (` Welcome, ${name}. You are number ${arr.length} in line.`) 
}



takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.

takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.

takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.
//console.log (katzDeli)








                  //////////  2- FUNCTION LINE    ////////////


    function line (arr){
      
        const newLine = arr.map(function(client, index){
          let i;
      if(i = null){
       console.log("The line is currently empty.") 
        } else if (i< arr.length){
          
    return ` ${index+1}.${client}`
          
          }
        }).join(' ')

  console.log("The line is currently:" + newLine) 
}

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

        






                       ////////////  3- FUNCTION NOWSERVING   //////////////

                       

function nowServing(arr){
   
     console.log ('currently serving: ' + arr[0])
       arr.shift()
}

nowServing(katzDeli) //=> "Currently serving Ada."
//console.log(katzDeli)




line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"
//console.log(katzDeli)



takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

//console.log(katzDeli)  


line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"


nowServing(katzDeli) //=> "Currently serving Grace."
//console.log(katzDeli)



line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"
