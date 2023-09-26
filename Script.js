const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function showContactDetails(name) {
    const detailsContainer = document.querySelector('.contact_container');
    const contactContainer = document.querySelector('.contact-details');

    const contact = contacts.find((c) => c.name === name);

    detailsContainer.innerHTML = `
            <div class="details">
            <ion-icon name="arrow-back-outline" class="back-arrow" onclick="toggleDetails()"></ion-icon>
                <div  class = "menu-container" onclick="toogleDropdownMenu()">
                   <ion-icon class='menu' name="menu"></ion-icon>
                 
                   <div class = "dropdown-menu" id="dropdownMenu">
                      <ul>
                           <ion-icon class='close-icon' name="close-circle"></ion-icon>
                            <li><a href="#" onclick="deleteContact('${contact.name}')">Delete</a></li>
                            <li><a href="#">Share</a></li>
                            <li><a href="#">Block</a></li>
                      </ul>
                    </div>
                </div>
            </div>

            <div class="display_image">
                <img src = "${contact.imageSrc}">
            </div>
            <h3>${contact.name}</h3>

    
            <div class="connect_details icons">
                <div class="phone">
                    <ion-icon name="call" onclick="displayContactNumber('${contact.contactNumber}')"></ion-icon>
                    <h5>Call</h5>
                </div>
                <div class="message">
                    <ion-icon name="chatbubble-ellipses" onclick="displayMessage('${contact.whatsappNumber}')"></ion-icon>
                    <h5>Message</h5>
                </div>
                <div class="mail">
                    <ion-icon name="mail" onclick="displayEmailAddress('${contact.email}')"></ion-icon>
                    <h5>Mail</h5>
                </div>
                    </div>
                <div class="contact-details">
                    <p class="contact-number"></p>
                    <p class="whatsapp-number"></p>
                    <p class="email-address"></p>
            
                </div>
    `;

    detailsContainer.style.display = 'block';
    activeIcon = null;   // tract the current active icon
}

function displayContactNumber(contactNumber) {
    const contactNumberElement = document.querySelector('.contact-details .contact-number');
    contactNumberElement.textContent = `Contact Number: ${contactNumber}`;

    clearOtherValues(contactNumberElement);
    activeIcon = 'phone';

    const icons = document.querySelectorAll('.connect_details ion-icon');

    icons.forEach((icon) => {
        icon.classList.remove('active-icon');
    });

    const phoneIcons = document.querySelector('.connect_details .phone ion-icon');
    phoneIcons.classList.add('active-icon');

}


function displayMessage(message){
    const messageElement = document.querySelector('.contact-details .whatsapp-number');
    messageElement.textContent = `Whatsapp: ${message}`;
   
    clearOtherValues(messageElement);
    activeIcon = 'message';

    const icons = document.querySelectorAll('.connect_details ion-icon');

    icons.forEach((icon) => {
        icon.classList.remove('.active-icon');
    });

     const messageIcon = document.querySelector('.contact-details .message ion-icon');
     messageIcon.classList.add('.active-icon');
}

function displayEmailAddress(email) {
    const emailElement = document.querySelector('.contact-details .email-address');
    emailElement.textContent = `Email: ${email}`;
 
    clearOtherValues(emailElement);
    activeIcon = 'mail';

    const icons = document.querySelectorAll('.connect_details ion-icon');

    icons.forEach((icon) => {
        icon.classList.remove('active-icon');
    });

    const emailIcon = document.querySelector('.connect_details .mail ion-icon');
    emailIcon.classList.add('active-icon');
}

function clearOtherValues(activeElement){
    const elementsToClear = document.querySelectorAll('.contact-details p')
    elementsToClear.forEach((element) => { // iterate all contact-details elements
           if(element !== activeElement){
            element.textContent = '';
         }
    });

    // reset active icon when clearing values
    activeIcon = null; 

}   

function toogleDropdownMenu(){
    var dropdownMenu = document.getElementById("dropdownMenu");
    var menuIcon = document.querySelector(".menu-container .menu");
    var closeIcon = document.querySelector(".menu-container .close-icon");
    if(dropdownMenu.style.display === "block"){
            dropdownMenu.style.display = "none";
            menuIcon.style.display = "block";
            closeIcon.style.display = "none";
    }
    else{
            dropdownMenu.style.display = "block";
            menuIcon.style.display = "none";
            closeIcon.style.display = "block"

    }
}

function toggleDetails(){
    var contactContainer = document.querySelector('.contact_container');
    contactContainer.style.display = 'none';
}

function openAddContactForm(){
    const addContactForm = document.getElementById("addContactForm");

    // Toggle the form's display
    if (addContactForm.style.display === "block") {
        addContactForm.style.display = "none";
    } else {
        addContactForm.style.display = "block";
    }
}

function updateContactList() {
    const contactList = document.querySelector('.contact-list');
    
    // Clear the existing contact list
    contactList.innerHTML = '';

    // Group contacts by alphabet letter
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (const letter of alphabet) {
        const contactsStartingWithLetter = contacts.filter((contact) =>
            contact.name.toUpperCase().startsWith(letter)
        );

        if (contactsStartingWithLetter.length > 0) {
            const contactGroup = document.createElement('div');
            contactGroup.className = 'contact-group';
            contactGroup.setAttribute('data-letter', letter);

            const alphabetDiv = document.createElement('div');
            alphabetDiv.className = 'alphabet';
            alphabetDiv.textContent = letter;

            const ul = document.createElement('ul');
            ul.innerHTML = contactsStartingWithLetter.map((contact) => `
                <li onclick="showContactDetails('${contact.name}')">
                    <img src="${contact.imageSrc}">${contact.name}
                </li>
            `).join('');

            contactGroup.appendChild(alphabetDiv);
            contactGroup.appendChild(ul);
            contactList.appendChild(contactGroup);
        }
    }
}

function addNewContact(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contactNo").value;
    const whatsappNumber =document.getElementById("whatsappNo").value;
    const imageSrc = document.getElementById("imageSrc").value.trim();


    // Check if the imageSrc is empty, and if so, set a default image source
    const defaultImageSrc = `https://placehold.it/100x100/555555/ffffff?text=${name.substring(0, 2).toUpperCase()}`;
    const newImageSrc = imageSrc ? imageSrc : defaultImageSrc;

    const newContact = {
        name: name,
        email: email,
        contactNumber: contactNumber,
        whatsappNumber: whatsappNumber,
        imageSrc: newImageSrc, // Use the generated image source
    };

   
    contacts.push(newContact);

    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    updateContactList();

    closeAddContactForm();
}


function closeAddContactForm(){
    const ContactForm = document.getElementById('addContactForm');
    ContactForm.style.display = 'none';
 }


 function filterContacts() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();

    const contactGroups = document.querySelectorAll('.contact-group');

    let noResutFound = true;

    contactGroups.forEach(group => {
        const contactItems = group.querySelectorAll('ul li'); // Select contact items within the current group
        let hasVisibleContacts = false; // track if any item in the group is visible 

        contactItems.forEach(item => {
            const contactName = item.textContent.toLowerCase();
            if (contactName.includes(filter)) {
                item.style.display = "block"; // show item matches with search query
                hasVisibleContacts = true;
                noResutFound = false;
            } else {
                item.style.display = "none";
            }
        });

        const alphabetDiv = group.querySelector('.alphabet');
        if (hasVisibleContacts || filter === '') {
            alphabetDiv.style.display = 'block';
        } else {
            alphabetDiv.style.display = 'none';
        }
    });

    const noResutElement = document.getElementById('noResultsFound');
    if(noResutFound){
        noResutElement.style.display = 'block';
    }
    else{
        noResutElement.style.display = 'none';
    }
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterContacts);


function deleteContact(name){
    const index = contacts.findIndex((c) => c.name === name);

    if(index !== -1){
        contacts.splice(index, 1); // remove the contact from the array
    
        localStorage.setItem('contacts' ,JSON.stringify(contacts)); // updating local storage

        updateContactList(); // update contact-list 
            
        toggleDetails();
    }
}
 window.addEventListener('load', updateContactList);