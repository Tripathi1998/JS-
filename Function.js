function greet(){
    console.log('Hello there');
}
greet();
const speak=function(){
    console.log('Good day');
};
speak();
speak();
speak();

const calarea=function(radius){
    let area=3.14*radius**2;
    return area;
};
const area=calarea(5);
console.log(area);