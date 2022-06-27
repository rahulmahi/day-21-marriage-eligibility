let b = 'male';
let g = 'female';
let gender =prompt();
 console.log("Gender :" ,gender);
let age = parseInt(prompt());
 console.log("Age :" ,age);
if(gender == b)
{
    if(age > 21)
    {
        console.log("Marriage eligibility");
    }
    else if(age == 21)
    {
        console.log("Waiting for one year");
    }
    else{
        console.log("Not eligibility");
    }
}
else if(gender == g)
{
    if(age > 18)
    {
        console.log("Marriage eligible");
    }
    else{
        console.log("Not eligible");
    }
}