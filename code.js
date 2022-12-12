
// exercise 1 - hello world

function hello(){

    console.log("hello world");
}

hello();

// exercise 2 - quadrupler

function quadrupler(numval){

    return(4*numval);
}

console.log(quadrupler(5));
console.log(quadrupler(10));
console.log(quadrupler(3));
console.log(quadrupler(8));
console.log(quadrupler(-7));

//exercise 3 - String functions

function welcome( firstName, lastName){

    
    return(`hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}, how can I help you`);
}


let fname="MARTYN";
let sname="foster";


console.log(welcome(fname,sname));


//exercise 4 - fahrenheit to centigrade conversion

function tempConv(temp){

    return( (temp-32)/1.8);
}

let far = 212;

console.log("temp of "+far+" is "+tempConv(far)+" degrees in centigrade");

// Exercise 5 - Dog year calculator


let age=57;
let name2="martyn";


function dogYearCalc(myAge){

    let dogYears=0;

    if( (myAge-15)>=0){
        myAge -= 15;
        dogYears++;

        if((myAge-9)>=0){
            myAge -= 9;
            dogYears++
        }
        
    }
    else if((myAge-9)>=0){
        myAge -=9;
        dogYears++;
    }
    
    dogYears += Math.floor(myAge/5);

    return(dogYears);
}

    console.log(`${name2} your age in dog years is ${dogYearCalc(age)}`);


// Exercise 6 - lesser of two numbers

let aa=-5;
let bb=-5;

function min( a,b){

    if ((b-a)>=0){ return(a)}
    else
     {
        return(b);
     }
}

console.log(`The lesser of ${aa} and ${bb} is ${min(aa,bb)}`);


// Exercise 7 - raising a number to a power

let intval = 5.6;
let power = 3.45;

function pow(i,p){

    return(Math.pow(i,p));
}

console.log(`${intval} raised to the power ${power} is ${Math.round(pow(intval,power)*1000)/1000}`);


// Exercise 8 - very advanced calculator, everyone will want one!



function calculator( a,b,c){
    console.log(a,b,c);
    if( (typeof(a)!="number") || (typeof(c)!="number")){
        console.error(`one or both parameters ${a},${c} are invalid`);
        return("Err");
    }
    else if (!( (b=='+')||(b=='-')||(b=='*')||(b=='/'))){
        console.error(`operator ${b} not recognised use '+','-','*' or '/' `);
        return("Err");    // '+','-','*' or '/'
    }
    else
    {
        if (b=='+'){
             return(a+c);
        }
        else if( b=='-'){
            return(a-c);
        }
        else if( b=='*'){
            return(a*c);
        }
        else
        {
            return(a/c);
        }

    }
}

let valArray= [ [5,'-',8],
                [-15,'-',-7],
                [17,'+',-9],
                [-11,'+',23],
                [5,'*',-3],
                [10,'*',3],
                [5,'/',-2],
                [24,'/',6],
                [5,'**',8],
                [5,'2',8],
                ['45','*',8],
                [5,'+','x']]

for( i=0; i<valArray.length; i++){
    console.log(`Result is ${calculator(valArray[i][0],valArray[i][1],valArray[i][2])}`);
}                






