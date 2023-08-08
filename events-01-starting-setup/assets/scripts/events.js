const buttons = document.querySelectorAll('button');
const button = document.querySelector('button');

// button.onclick = function() {};

const buttonCLickHandler = (event) =>{
    // event.target.disable = true;
    console.log(event);
}

const anotherButtonClickHandler = ()=>{
    console.log('This was clicked!');
};

// button.onclick = buttonCLickHandler;
// button.onclick = anotherButtonClickHandler;//overwritten

const boundFn = buttonCLickHandler.bind(this);

// button.addEventListener('click',buttonCLickHandler);

// setTimeout(()=>{
//     button.removeEventListener('click',buttonCLickHandler);

// },2000)

// buttons.forEach(btn=>{
    // btn.addEventListener('click',buttonCLickHandler);
    // btn.addEventListener('mouseenter',buttonCLickHandler);
    // btn.addEventListener('mouseover',buttonCLickHandler);
// })

// window.addEventListener('scroll',event=>{
//     console.log(event);
// })

const form =document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(event);
})

const div = document.querySelector('div');

div.addEventListener('click',event=>{
    console.log('Clicked Div');
    console.log(event);
})

button.addEventListener('click',event =>{
    event.stopPropagation();
    // event.stopImmediatePropagation();
    console.log('Clicked button');;
    console.log(event)
})

const listItems = document.querySelectorAll('li');
const list =document.querySelector('ul');

// listItems.forEach((item)=>{
//     item.addEventListener('click',event=>{
//         event.target.classList.toggle('highlight');
//     });
// })

list.addEventListener('click',event=>{
    // console.log(event.currentTarget);
    // event.target.classList.toggle('highlight'); 
    event.target.closest('li').classList.toggle('highlight');
    // form.submit();
    button.click();

});

