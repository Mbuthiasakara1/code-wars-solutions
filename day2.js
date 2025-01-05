// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5

function BracketCombinations(num){
      function backtrack(openCount,closeCount){
        if(openCount == num && closeCount == num){
            return 1
        }

        let count = 0;
        if(openCount<num){
            count +=backtrack(openCount +1 ,closeCount)
        }
        if(closeCount<openCount){
            count+=backtrack(openCount,closeCount+1)
        }
        return count
      }


    return backtrack(0,0)
}

console.log(BracketCombinations(3))