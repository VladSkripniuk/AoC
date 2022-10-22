// 1. read input from file input.txt
// 2. read line from input.txt
// 3. set n to length of line
// 4. create array counter_ones with 2^n elements, set all elements to 0
// 5. create array counter_zeros with 2^n elements, set all elements to 0
// 6. set index to 0
// 6. for charecter in line
// 7.     if charecter is 0 then increment counter_zeros[index], set index to 2*index + 2
// 8.     if charecter is 1 set increment counter_ones[index], set index to 2*index + 2
// 9 set gamma_rate to 0
// 10. set epsilon_rate to 0
// set index to 0
// 11. for i i range 0 to n
// 12.     if counter_zeros[index] <= counter_ones[index] then set gamma_rate to gamma_rate + 2^(n-i), index = 2*index + 2
// 13.     else set index = 2*index + 1
// 14. for i i range 0 to n
// 15.     if counter_zeros[index] > counter_ones[index] then set epsilon_rate to epsilon_rate + 2^(n-i), index = 2*index + 2
// 16.     else set index = 2*index + 1
// 17. print gamma_rate * epsilon_rate
// 18. exit
// Language: typescript
// Path: day3/part1/day3_part1.ts
function main() {
    // print("Hello World");
    console.log("Hello World");
    // const  fs  =  require ( "fs" );
    // // 1. read input from file input.txt
    // let  input  =  fs . readFileSync ( "input_small.txt" ,  "utf-8" );
    // let  counter_ones  =  new  Array (1024 ) . fill ( 0 );
    // let  counter_zeros  =  new  Array (1024 ) . fill ( 0 );
    // // for line in input
    // let  n  =  0;
    // for  ( let  line  of  input . split ( " \n")){
    //     // set n to length of line
    //     n  =  line . length;
    //     // set index to 0
    //     let  index  =  0 ;
    //     // for charecter in line
    //     for  ( let  i  =  0 ;  i  <  n;  i ++ ) {
    //         // if charecter is 0 then increment counter_zeros[index], set index to 2*index + 1
    //         if  ( line [ i ]  ==  "0" ) {
    //             counter_zeros [ index ] ++ ;
    //             index  =  2 * index  +  1 ;
    //         }
    //         // if charecter is 1 set increment counter_ones[index], set index to 2*index + 2
    //         else  {
    //             counter_ones [ index ] ++ ;
    //             index  =  2 * index  +  2 ;
    //         }
    //     }
    // }
    // // set gamma_rate to 0
    // let  gamma_rate  =  0 ;
    // // set epsilon_rate to 0
    // let  epsilon_rate  =  0 ;
    // // set index to 0
    // let index  =  0 ;
    // // for i i range 0 to n
    // for  ( let  i  =  0 ;  i  <  n;  i ++ ) {
    //     // if counter_zeros[index] <= counter_ones[index] then set gamma_rate to gamma_rate + 2^(n-i), index = 2*index + 2
    //     if  ( counter_zeros [ index ]  <=  counter_ones [ index ]) {
    //         gamma_rate  +=  2 ** ( n-1 - i );
    //         index  =  2 * index  +  2 ;
    //     }
    //     // else set index = 2*index + 1
    //     else  {
    //         index  =  2 * index  +  1 ;
    //     }
    // }
    // for  ( let  i  =  0 ;  i  <  n;  i ++ ) {
    //     // if counter_zeros[index] <= counter_ones[index] then set gamma_rate to gamma_rate + 2^(n-i), index = 2*index + 2
    //     if  ( counter_zeros [ index ]  >  counter_ones [ index ]) {
    //         epsilon_rate  +=  2 ** ( n-1 - i );
    //         index  =  2 * index  +  2 ;
    //     }
    //     // else set index = 2*index + 1
    //     else  {
    //         index  =  2 * index  +  1 ;
    //     }
    // }
    // // create a new heading 1 element
    // let heading = document.createElement('h1');
    // heading.textContent = (gamma_rate  *  epsilon_rate).toString();
    // // add the heading the document
    // document.body.appendChild(heading);
    // console . log ( gamma_rate );
    // console . log ( epsilon_rate );
    // // print gamma_rate * epsilon_rate
    // console . log ( gamma_rate  *  epsilon_rate );
}
