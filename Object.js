let user={
name:'Aditi',
age:21,
location:'Banglore',
occupation:'software enginner',
blogs:['hi i am fine','how r you'],
login:function(){
    console.log('user logged in');
},
logout:function(){
    console.log('user loged out');
},
logblog:function(){
    console.log('here are the questions:');
    this.blogs.forEach(blog => {
        console.log(blog);
    });
}
};
user.logblog();
//user.login();
//user.logout();
/*console.log(user);
console.log(typeof user);
user.age=22;
console.log(user.age);
user['name']='Poonam';
console.log(user['name']);*/

