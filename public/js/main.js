const numberInput = document.getElemntById('number'),
 textInput = document.getElemntById('msg'),
 button = document.getElemntById('button'),
 response = document.querySelector('.response');


 button.addEventListener('click', send, false);

 function send(){
 	const number = numberInput.value.replace(/\D/g, '')
 	const text = textInput.value;

 	fetch('/', {
 		method: 'post',
 		headers: {
 			'Content-type': 'application/json'
 		},
 		body: {JSON.stringify({number: number, text: text})}
 	})
 }