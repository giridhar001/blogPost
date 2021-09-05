
function triggerModal(){
	$('#main_div').empty()
	$('.ql-editor').empty()
	$('.ql-toolbar').remove()
	$('#createNew').modal('show')

	var modal_body_div = document.getElementById('main_div');

	var div_row = document.createElement('div');
	div_row.setAttribute('class','row g-1')
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

	// Text Editor

	var toolbarOptions = [
	  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
	  ['blockquote', 'code-block'],

	  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
	  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
	  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
	  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
	  [{ 'direction': 'rtl' }],                         // text direction

	  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
	  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

	  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
	  [{ 'font': [] }],
	  [{ 'align': [] }],

	  ['clean']                                         // remove formatting button
	];

	quill = new Quill('#editor-container', {
	  modules: {
	    toolbar: toolbarOptions

	  },
	  placeholder: 'Compose ...',
	  theme: 'snow'  
	});


}


function formSubmit(){
	name = $('#user-name').val();
	email = $('#user-email').val();
	blog_title = $('#blog-title').val();

	var name_regex = /^[a-z | A-Z]+$/
	var email_regex = /^([a-z|A-Z\d\.-]+)@([a-z|A-Z\d-]+)\.([a-z|A-Z]{2,8})(\.[a-z|A-Z]{2,8})?$/
	var title_regex = /^[a-z|A-Z\d\.-]+$/


	// If the name does'nt match the pattern then return 
	if(! name_regex.test(name)){
		return alert('name field should contain only characters')
	}
	
	if(! email_regex.test(email)){
		return alert('email is not valid')
	}

	if(! title_regex.test(blog_title)){
		return alert('title field should contain only characters and digits')
	}

	var blog_content = quill.root.innerHTML;
	var data = {
		'name':name,
		'email':email,
		'title':blog_title,
		'content':blog_content
	}

	console.log(data);
}
