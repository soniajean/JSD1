//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
    //Your code goes here
    function findWords(dog_string, dog_names) {
        for (let i = 0; i < dog_string.length; i++) {
            let result = dog_string;
            if (result == true) {
                console.log("Matched dog_name\n")
            }
            else {
                console.log("No Matches\n")
            }
        }
    }
    let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
    
    let dog_names = ["Max","HAS","PuRple","dog"]
    
    findWords(dog_string, dog_names)


    //============Exercise #2 ============//
    /*Write a fucntion that takes in an array and removes every even index with a splice,
    and replaces it with the string "even index" */
    

    function replace(arr){
        for(let index=0;index<arr.length;index++){
        if(index%2==0){
        arr.splice(index,1,"even index");
        
        }
        }
        console.log(arr);
        }
        const arr=["Mat","Basketball","Rebot","Goku","Cars","Frank"];
        replace(arr);

        // Even or Odd KATA
        // ION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// def even_or_odd(number):
//   return 'Even' if number % 2 == 0 else 'Odd'

function even_or_odd(number) {
    if (number % 2 === 0) {
    return("Even");
    }
    else 
    return("Odd");
  }

  
//   Convert boolean values to strings 'Yes' or 'No'.
// def bool_to_word(boolean):
//     return "Yes" if boolean == True else "No"

function boolToWord( bool ){
    const str = bool === true ? "Yes" : "No"
    return str
      }




