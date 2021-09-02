function triggerModal(){
	$('#createNew').modal('show')

	var modal_body = document.getElementById('main_div');

	var main_div = document.createElement('div')
	main_div.setAttribute('id','main_div')
	modal_body.appendChild(main_div);
	
	main_div.innerHTML = "Sai";

}