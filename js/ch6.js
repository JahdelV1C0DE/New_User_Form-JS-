//custom validation method function 

function validateCard() {
	let card = document.forms.payment.elements.credit[0];
	if (card.validity.valueMissing) {
		card.setCustomValidity("Select your credit card"); 
		} else { card.setCustomValidity(""); 
	} 
	
}

// 
function calcOrder() {
// Determine the selected model 
	let mIndex = model.selectedIndex; 
	let mValue = model.options[mIndex].value;
// Determine the selected quantity
	let qIndex = orderForm.elements.qty.selectedIndex; 
	let quantity = orderForm.elements.qty[qIndex].value;
// Model cost = model cost times quantity let modelCost = mValue*quantity;
	orderForm.elements.modelCost.value = modelCost; 
	}
	//HOW TO DEal with SELEction lists with multiple selections
	let selectedOpt = new Array(); 
	for (let i = 0; i < select.options.length; i++) 
	{ if (select.options[i].selected) { 
		selectedOpt.push(select.options[i]);
} }

//referencing a radio button option 

document.forms.orderForm.elements.plan[0];

let plan = orderForm.elements.plan; 
for (let i = 0; i < plan.length; i++) 
{ if (plan[i].checked) { 
	planValue = plan[i].value; 
	break;
} }

//Add an event listener for every form element 
for (let i = 0; i < orderForm.elements.length; i++) { 
	orderForm.elements[i].addEventListener("change", calcOrder);
}