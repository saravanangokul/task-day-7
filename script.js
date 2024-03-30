//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//a.Get all the countries from Asia continent /region using Filter function:-

let request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload=function(){
    let data=request.response;
    let result=JSON.parse(data);
    let ans=result.filter((a)=>a.region==="Asia");
    let final=ans.map((ele)=>console.log(ele.name.common));
}

// b.Get all the countries with a population of less than 2 lakhs using Filter function:-

let request2= new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true);
request2.send();
request2.onload=function(){
    let data=request2.response;
    let result=JSON.parse(data);
    let ans1=result.filter((b)=>b.population<200000);
    let final1=ans1.map((ele)=>console.log(ele.name.common));
}

// c.Print the following details name, capital, flag, using forEach function:-

let request3= new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true);
request3.send();
request3.onload=function(){
    let data=request3.response;
    let result=JSON.parse(data);
    let ans2=result.forEach((ele)=>console.log(`"name":${ele.name.common},"capital":${ele.capital},"flag":${ele.flag}`));
} 


//d.Print the total population of countries using reduce function:-

let request4= new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all",true);
 request4.send();
 request4.onload=function(){
    let data =request4.response;
    let result=JSON.parse(data);
    let ans3=result.reduce((acc,curr)=>acc+curr.population,0)
 console.log(ans3);
}

//e.Print the country that uses US dollars as currency:-

let request5= new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true);
request5.send();
request5.onload=function(){
    let data=request5.response;
    let result=JSON.parse(data);
    let currency=result.filter((value)=>value.currencies && value.currencies.USD)
    currency.forEach((value)=>console.log(value.name.common));
}


 