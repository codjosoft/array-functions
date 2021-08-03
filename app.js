const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// companies.forEach(function(company) {
//   console.log(company.name);
// });

//filter age > 21    #old style for loop
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 21) {
//     canDrink.push(ages[i]);
//   }
// }

    //new style filter
  // const canDrink = (ages.filter(function(age) {
  //   return age > 21;
  // }));

//or ES6
 const canDrink = ages.filter(age => age > 21);
  console.log(canDrink);

//filter company with category = "Retail"
const RetailCompanies = companies.filter(company => company.category === "Retail");

// console.log(RetailCompanies)

//filter company with category =  start > 1979 and < 1990
const eightiesCompany = companies.filter(company => company.start > 1979 && company.start < 1990);
//  console.log(eightiesCompany);

//filter company with category =  end - start > 10
const tenYearsCompany = companies.filter(company => company.end - company.start >= 10);
//  console.log(tenYearsCompany);

//map

//map company to array of names with start and end years
const companyNames = companies.map(company => {
  return [company.name, company.start, company.end];
})
// console.log(companyNames);

//map ages to array of squareroots
const agesSquared = ages.map(age => {
  return Math.sqrt(age);
})
//  console.log(agesSquared);

//map ages to array of squareroots and map age to array of ages * 2
const agesSquaredTimesTwo = ages.map(age => {
  return Math.sqrt(age) * 2;
})
//  console.log(agesSquaredTimesTwo);

//or
const agesSquared1 = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
//  console.log(agesSquared1);

//sorting

// sort company by start year
const sortedCompany = companies.sort((a, b) => {
  return a.start - b.start;
})
//  console.log(sortedCompany);

//sort ages by age
const sortedAges = ages.sort((a, b) => {
  return a - b;
})
// console.log(sortedAg  es);


//reduce 


//reduce age sum
const sum = ages.reduce((a, b) => {
  return a + b;
})
//  console.log(sum);

//reduce total years for all comapnies
const totalYears = companies.reduce((total, company)  => 
   total + ( company.end - company.start), 0);


// const sumCompany = companies.reduce((a  , b) => {
//   return a.start + b.end;
// })

   console.log(totalYears);




