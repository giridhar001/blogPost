function modalView(name,email,title,content){
	$('#modalBody').empty();
	$('#ModalLongTitle').empty();
	$('#viewBlog').modal('show');
	
	// modal title
	var modalTitle = document.getElementById('modalTitle')
	modalTitle.innerHTML = title;

	// modal body
	var modalBody = document.getElementById('modalBody');

	authorInfoDiv = document.createElement('div');
	modalBody.appendChild(authorInfoDiv);
	authorInfoDiv.setAttribute('class','row gx-0 infoDiv');

	namePara = document.createElement('p');
	authorInfoDiv.appendChild(namePara)
	namePara.setAttribute('class','text-muted')

	// <i class="fas fa-pen-nib"></i>
	nameIcon = document.createElement('i');
	namePara.appendChild(nameIcon)
	nameIcon.setAttribute('class','fas fa-pen-nib text-muted');
	namePara.innerHTML += " "+name;


	emailPara = document.createElement('p');
	authorInfoDiv.appendChild(emailPara)	
	emailPara.setAttribute('class','text-muted')

	// <i class="fas fa-envelope-open-text"></i>
	emailIcon = document.createElement('i');
	emailPara.appendChild(emailIcon)
	emailIcon.setAttribute('class','fas fa-envelope-open-text text-muted');
	emailPara.innerHTML += " "+email;

	// content div

	contentDiv = document.createElement('div')
	modalBody.appendChild(contentDiv);
	contentDiv.innerHTML = content;
	
}