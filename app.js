const add = document.getElementById('add');
const mainContent = document.getElementById('content-border');
const deleteNote = document.getElementById('delete');
const editNote = document.getElementById('edit')
const textArea = document.getElementById('type');
const textContainer = document.getElementById('textarea')

// ////// Event Listeners
add.addEventListener('click', function () {
  mainContent.appendChild(note())
})



deleteNote.addEventListener('click', deleteFunction)

editNote.addEventListener('click', editFunction)


///// Add a Note
// creates svg icon componenet
function componentsRights() {
  const div = document.createElement('div')
  div.className = 'components-right'
  div.innerHTML = `<svg id="delete" onclick="deleteFunction()" class="delete icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
  <path d="M16.56 22H7.44C6.91 22 6.47 21.59 6.44 21.06L5.5 6H18.5L17.56 21.06C17.53 21.59 17.09 22 16.56 22Z" clip-rule="evenodd" fill="#ffffff" fill-rule="evenodd" undefined="1"></path>
  <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1" stroke="#000000" d="M5.5 6H18.5"></path>
  <path d="M8.5 3C8.5 2.44772 8.94772 2 9.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3V4C15.5 4.55228 15.0523 5 14.5 5H9.5C8.94772 5 8.5 4.55228 8.5 4V3Z" fill="#ffffff" clip-rule="evenodd" fill-rule="evenodd" undefined="1"></path>
  <path d="M19.5 6H4.5C4.22 6 4 5.78 4 5.5V3.5C4 3.22 4.22 3 4.5 3H19.5C19.78 3 20 3.22 20 3.5V5.5C20 5.78 19.78 6 19.5 6Z" clip-rule="evenodd" fill="#ffffff" fill-rule="evenodd" undefined="1"></path>
  </svg>
  <svg id="edit" onclick="editFunction()" class="edit icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-reactroot="">
    <path fill="#ffffff" d="M19.229 8.65903L15.341 4.77097L5.01001 15.11L8.89001 18.99L19.229 8.65903Z" undefined="1"></path>
    <path fill="#ffffff" d="M5.01 15.11L8.89 18.99L2 22L5.01 15.11Z" undefined="1"></path>
    <path fill="#ffffff" d="M19.2301 8.66001L15.3401 4.77001L17.8101 2.30001C18.2001 1.91001 18.8301 1.91001 19.2201 2.30001L21.6901 4.77001C22.0801 5.16001 22.0801 5.79001 21.6901 6.18001L19.2301 8.66001Z" undefined="1"></path>
    <path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1" stroke="#000000" d="M5.01001 15.11L8.89001 18.99"></path>
    <path stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1" stroke="#000000" d="M19.2301 8.66002L15.3401 4.77002"></path>
  </svg>`;
  return div;
}

// Creates component that contains components with svgs
function components() {
  const div = document.createElement('div');
  div.className = 'components'
  div.appendChild(componentsRights());
  return div;
}

function paragraph() {
  const paragraph = document.createElement('p')
  paragraph.setAttribute('id', 'text')
  paragraph.innerText = 'Add your text here'
  return paragraph;
}

// Create notes to be added
function addNote() {
  const div = document.createElement('div')
  div.className = 'text-content'
  div.setAttribute('id', 'text-content')
  div.appendChild(paragraph());
  return div;
  }

// Creates note div
function note() {
  const div = document.createElement('div')
  div.classList.add('note', 'border')
  div.appendChild(components())
  div.appendChild(addNote());
  return div;
}


function deleteFunction() {
  const deleteThis = deleteNote.closest('.note')
  console.log(deleteThis)
  deleteThis.remove()
}

function editFunction() {
  textContainer.style.display = 'flex'
  textAreaFunction()
}


function textAreaFunction(text, e) {
  textarea.addEventListener('click', function() {
    textarea.innerText= ' ';
  })
  textArea.addEventListener('keypress', function() {
    if (e.key === 'enter') {
       return text = textarea.innerText;
    }
  })
 

}