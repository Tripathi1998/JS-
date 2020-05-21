const title='Best reads of 2020';
const author='Aditi';
const likes=30;

//concatination way
let result='This is'+title+'or'+author+'has'+likes;
console.log(result);

//template string way
let result1=`This is ${title} of ${author} which has ${likes} likes`;
console.log(result1);

//html template

let html=`
<h1>Titles</h1>
<p>This blog by ${author}</p>
<span> has ${likes} likes</span>
`;
console.log(html);