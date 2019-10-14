const name = 'Sarthak Singhal';
const age = 250;
const city = 'San Jose';
const job = 'Software Engineer';

let html;

// html = '<ul>'+
//         '<li> Name : '+ name+'</li>'+
//         '<li> Age : '+ age+'</li>'+
//         '<li> Job : '+ job+'</li>'+
//         '<li> City : '+ city+'</li>'+
//         '</ul>'

function hello(){
    return 'hello';
}

html = `
        <ul>
        <li> Name : ${name}</li>
        <li> Age : ${age}</li>
        <li> Job : ${job}</li>
        <li> City : ${city}</li>
        <li> Sum : ${2+2}</li>
        <li> Function : ${hello()}</li>
        <li> Name : ${age<30?'UNDER 30':'Over 30'}</li>
        </ul>



`

document.body.innerHTML = html;