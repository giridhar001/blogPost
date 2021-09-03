function triggerModal(){
	$('#main_div').empty()
	$('#createNew').modal('show')

	var modal_body_div = document.getElementById('main_div');

	// <div class="g-input">
	// 			  <input type="text" id="user-name" name="user-name" placeholder=" ">
	// 			  <label for="user-name">Username</label>
	// 		</div>

	var div_row = document.createElement('div');
	div_row.setAttribute('id','row')
	modal_body_div.appendChild(div_row);

	// Name input section

	name_div = document.createElement('div');
	name_div.setAttribute('class','g-input col-sm-12 col-md-4');
	div_row.appendChild(name_div);

	name_input = document.createElement('input');
	name_input.setAttribute('type','text');
	name_input.setAttribute('id','user-name');
	name_input.setAttribute('name','user-name');
	name_input.setAttribute('placeholder',' ');
	name_div.appendChild(name_input);

	name_label = document.createElement('label');
	name_label.setAttribute('for','user-name')
	name_label.innerHTML = "Name"
	name_div.appendChild(name_label)

	// Email input section

	email_div = document.createElement('div');
	email_div.setAttribute('class','g-input col-sm-12 col-md-4');
	div_row.appendChild(email_div);

	email_input = document.createElement('input');
	email_input.setAttribute('type','email');
	email_input.setAttribute('id','user-email');
	email_input.setAttribute('name','user-email');
	email_input.setAttribute('placeholder',' ');
	email_div.appendChild(email_input);

	email_label = document.createElement('label');
	email_label.setAttribute('for','user-email')
	email_label.innerHTML = "Email"
	email_div.appendChild(email_label)

	// Blog Title input section

	title_div = document.createElement('div');
	title_div.setAttribute('class','g-input col-sm-12 col-md-4');
	div_row.appendChild(title_div);

	title_input = document.createElement('input');
	title_input.setAttribute('type','text');
	title_input.setAttribute('id','blog-title');
	title_input.setAttribute('name','blog-title');
	title_input.setAttribute('placeholder',' ');
	title_div.appendChild(title_input);

	title_label = document.createElement('label');
	title_label.setAttribute('for','blog-title')
	title_label.innerHTML = "Blog Title"
	title_div.appendChild(title_label)

	

}