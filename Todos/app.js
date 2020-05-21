const addForm = document.querySelector('.add');
const list=document.querySelector('.todos');
const popup=document.querySelector('.popup-wrapper');
const close=document.querySelector('.popup-close');
const container=document.querySelector('.container');
const formSearch=document.querySelector('.search input');

const generateTemplate = (todo) =>{
const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`;
list.innerHTML +=html;
};
addForm.addEventListener('submit', e => {
e.preventDefault();
const todo = addForm.add.value.trim();
if(todo.length){
generateTemplate(todo);
addForm.reset();
}
else{
addForm.addEventListener('submit' , e => {
    e.preventDefault();
popup.style.display='block';
});
}
});
close.addEventListener('click' , e => {
    e.preventDefault();
popup.style.display='none';
     });
     popup.addEventListener('click' , e => {
        e.preventDefault();
        popup.style.display='none';
         });

         //delete the todo list
         list.addEventListener('click' , (e) => {
             if(e.target.classList.contains('delete')){
e.target.parentElement.remove();
             }
         });

         const filterTodos=(term) =>{
             Array.from(list.children)
             .filter((todo) =>!todo.textContent.includes(term))
                 .forEach((todo)=>todo.classList.add('filtered'));


             Array.from(list.children)
          .filter((todo) => todo.textContent.includes(term))
                 .forEach((todo)=>todo.classList.remove('filtered'));

         };

         //keyup event
formSearch.addEventListener('keyup' , ()=>{
const term=formSearch.value.trim();
filterTodos(term);
});