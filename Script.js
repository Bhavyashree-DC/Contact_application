let activeIcon = null; 

let isEditMode = false;

const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

function showContactDetails(name) {
    const detailsContainer = document.querySelector('.contact_container');
    
    const contact = contacts.find((c) => c.name === name);

    detailsContainer.innerHTML = `
            <div class="details">
            <ion-icon name="arrow-back-outline" class="back-arrow" onclick="toggleDetails()"></ion-icon>

                <div class = "menu-container"onclick="toogleDropdownMenu()">
                   <ion-icon class='menu' name="ellipsis-vertical"></ion-icon> 
                   <div class = "dropdown-menu" id="dropdownMenu">
                      <ul>
                           <ion-icon class='close-icon' name="close-circle"></ion-icon>
                            <li>
                                 <ion-icon class="menu-icon" name="trash"></ion-icon>
                                 <a href="#" onclick="deleteContact('${contact.name}')">Delete</a>
                            </li>
                            <li>
                                <ion-icon class="menu-icon" name="share"></ion-icon>
                                <a href="#">Share</a>
                            </li>
                            <li>
                                <ion-icon class="menu-icon" name="close"></ion-icon>
                                <a href="#">Block</a>
                            </li>
                      </ul>
                    </div>
                </div>
            </div>

            <div class="display_image">
                <img src = "${contact.imageSrc}">
            </div>
            <h3 id="contactName">${contact.name}</h3>

    
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
            
                <div class="contact_info">
                    <p class="contact-number"></p>
                   
                    <p class="whatsapp-number"></p>
                   
                    <p class="email-address"></p>
                </div>
            </div>
        
                <div class="edit-container">
                    <ion-icon class='edit' name="create" onclick="openEditContactForm('${contact.name}')"></ion-icon>
                </div>
                `;

                
                detailsContainer.style.display = 'block';
                activeIcon = null; // track the current active icon
                contactIndex = contacts.indexOf(contact);

 
}



function displayContactInfo(methodName, value) {

    console.log('Function called'); // Add this line
    const contactInfoElement = document.querySelector('.contact-details');

    contactInfoElement.classList.add('show-background');

    // Clear existing content
    contactInfoElement.innerHTML = '';

    // Create and add the header
    const header = document.createElement('p');
    header.textContent = 'Contact Info';
    header.style.fontSize = '30px'; 
    header.style.color = '#fff'; 
    header.style.padding = '20px';
    header.style.marginTop = '-50px'; 
    
    contactInfoElement.appendChild(header);

    // // Create and add the line
    // const line = document.createElement('div');
    // line.style.borderTop = '3px solid #fff';
    // line.style.marginTop = '5px';
    
    // contactInfoElement.appendChild(line);

    switch (methodName) {

        case 'Call':
            const callContainer = document.createElement('div');
            callContainer.style.display = 'flex';
            callContainer.style.alignItems = 'center';
            callContainer.style.padding = '10px';
        
            const callIcon = document.createElement('i');
            callIcon.classList.add('fa', 'fa-solid', 'fa-square-phone');
            callIcon.style.fontSize = '30px';
            callIcon.style.color = '#f7f7f7';
            callIcon.style.marginRight = '20px';

            const textIconContainer = document.createElement('div');
            textIconContainer.style.display = 'flex';
            textIconContainer.style.padding = '10px';
        
            const telegramIcon = document.createElement('i');
            telegramIcon.classList.add('fa', 'fa-brands', 'fa-telegram');
            telegramIcon.style.fontSize = '27px';
            telegramIcon.style.color = '#f7f7f7';
            telegramIcon.style.marginRight = '20px';
        
            const contactNumber = document.createElement('p');
            contactNumber.textContent = ` ${value}`;
            contactNumber.style.fontSize = '25px';
            contactNumber.style.color = '#fff';
        
            const contactvoiceNumber = document.createElement('p');
            contactvoiceNumber.textContent = value;
            contactvoiceNumber.style.fontSize = '25px';
            contactvoiceNumber.style.color = '#fff';
        
            callContainer.appendChild(callIcon);
            callContainer.appendChild(contactNumber);

            textIconContainer.appendChild(telegramIcon);
            textIconContainer.appendChild(contactvoiceNumber);
        
            contactInfoElement.appendChild(callContainer);
            contactInfoElement.appendChild(textIconContainer);
        
            break;
        

        case 'Message':

            const msgContainer = document.createElement('div');
            msgContainer.style.display = 'flex';
            msgContainer.style.padding = '10px'; 

            const whatsappicon = document.createElement('i');
            whatsappicon.classList.add('fa', 'fa-brands', 'fa-square-whatsapp');
            whatsappicon.style.fontSize = '27px';
            whatsappicon.style.color = '#f7f7f7';
            whatsappicon.style.marginRight = '20px';

            const voiceIconContainer = document.createElement('div');
            voiceIconContainer.style.display = 'flex';
            voiceIconContainer.style.padding = '10px';
        
            const voiceIcon = document.createElement('i');
            voiceIcon.classList.add('fa', 'fa-solid', 'fa-video');
            voiceIcon.style.fontSize = '27px';
            voiceIcon.style.color = '#f7f7f7';
            voiceIcon.style.marginRight = '20px';

            const whatsappNumber = document.createElement('p');
            whatsappNumber.textContent = value;
            whatsappNumber.style.fontSize = '25px';
            whatsappNumber.style.color = '#fff';

            const videoCallNumber = document.createElement('p');
            videoCallNumber .textContent = value;
            videoCallNumber .style.fontSize = '25px';
            videoCallNumber .style.color = '#fff';
            
            msgContainer.appendChild( whatsappicon);
            msgContainer.appendChild(whatsappNumber);

            voiceIconContainer.appendChild(voiceIcon);
            voiceIconContainer.appendChild(videoCallNumber);
        
            contactInfoElement.appendChild(msgContainer);
            contactInfoElement.appendChild(voiceIconContainer);

        break;

        case 'Mail':
            const emailAddress = document.createElement('p');
            const mailicon = document.createElement('i');
            mailicon.classList.add('fas', 'fa-envelope-open-text'); 
            mailicon.style.fontSize = '31px';
            mailicon.style.color = '#f7f7f7';
            mailicon.style.marginRight = '20px';
        
            const emailText = document.createElement('span'); 
            emailText.textContent = value;
            emailText.style.fontSize = '23px';
            emailText.style.color = '#fff';
        
            emailAddress.appendChild(mailicon);
            emailAddress.appendChild(emailText);
            contactInfoElement.appendChild(emailAddress);
        break;
        
        default:
            break;
    }
}



function displayContactNumber(contactNumber) {
    clearContactInfo();
    displayContactInfo('Call', contactNumber); 
}

function displayMessage(message) {
    clearContactInfo();
    displayContactInfo('Message', message);
}

function displayEmailAddress(email) {
    clearContactInfo();
    displayContactInfo('Mail', email);
}


function clearContactInfo() {
    const contactInfoElements = document.querySelectorAll('.contact-details');

    contactInfoElements.forEach((contactInfoElement) => {
        const contactMethods = contactInfoElement.querySelectorAll('.contact_info p');
        contactMethods.forEach((method) => {
            method.textContent = '';
        });

        contactInfoElement.classList.remove('show-background');
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


function openAddContactForm() {
    const addContactForm = document.getElementById("addContactForm");
  
    isEditMode = false;

    clearContactForm();

    addContactForm.style.display = 'block'; 
}

function openEditContactForm(name) {
    const addContactForm = document.getElementById("addContactForm");
    // const contactIndex = document.getElementById('contactIndex');


    isEditMode = true;

    const contact =contacts[contactIndex];
    if (contact) {

        const index = contacts.indexOf(contact);
        contactIndex = index;  

        // Set form fields based on contact data
        document.getElementById('name').value = contact.name;
        document.getElementById('contactNo').value = contact.contactNumber;
        document.getElementById('email').value = contact.email;
        document.getElementById('whatsappNo').value = contact.whatsappNumber;
        document.getElementById('imageSrc').value = contact.imageSrc;

        addContactForm.style.display = 'block';
    }
}


function updateContactList() {
    const contactList = document.querySelector('.contact-list');
   
    contactList.innerHTML = '';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (const letter of alphabet) {
        const contactsStartingWithLetter = contacts.filter((contact) => 
            contact.name.toUpperCase().startsWith(letter)   //filter contact array that matches current letter
        );
 
        if (contactsStartingWithLetter.length > 0) {  // create div element with contact-group classname & assign current letter to it as data attribute
            const contactGroup = document.createElement('div');
            contactGroup.className = 'contact-group';
            contactGroup.setAttribute('data-letter', letter);

            const alphabetDiv = document.createElement('div');
            alphabetDiv.className = 'alphabet';
            alphabetDiv.textContent = letter; // creates div ele to display contacts 

            const ul = document.createElement('ul');  // it holds contacts entries 
            ul.innerHTML = contactsStartingWithLetter.map((contact) => `
                <li onclick="showContactDetails('${contact.name}')">
                    <img class="contact-image" src="${contact.imageSrc}">
                    <span class="contact-name">${contact.name}</span>
                </li>
            `).join('');

            contactGroup.appendChild(alphabetDiv);
            contactGroup.appendChild(ul);
            contactList.appendChild(contactGroup); // appends all elements To contactGroup & next to contact-list
        }
    }
}

function submitContactForm(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contactNo").value;
    const whatsappNumber =document.getElementById("whatsappNo").value;
    const imageSrc = document.getElementById("imageSrc").value.trim();


    const defaultImageSrc = `https://placehold.it/100x100/f6859b/ffffff?text=${name.substring(0, 2).toUpperCase()}`;
    const newImageSrc = imageSrc ? imageSrc : defaultImageSrc; // checks whether img src has values 

    const newContact = {
        name: name,
        email: email,
        contactNumber: contactNumber,
        whatsappNumber: whatsappNumber,
        imageSrc: newImageSrc, // Use the generated image source
    };

    if (isEditMode) {
        // Update the contact in the contacts array
        if (contactIndex !== undefined) {
            contacts[contactIndex] = newContact;
            updateLocalStorage(); // Update localStorage after modifying the contacts array
        }
    }
    else{
        contacts.push(newContact);
        updateLocalStorage(); //
    }
    
    
    updateContactList();

    clearContactForm();

    closeAddContactForm();
}

function updateLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

function filterContacts() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase();

    const contactGroups = document.querySelectorAll('.contact-group');

    contactGroups.forEach(group => {
        const contactItems = group.querySelectorAll('ul li');

        let hasVisibleContacts = false; // Track if any item in the group is visible

        contactItems.forEach(item => {
            const contactName = item.textContent.toLowerCase();
            if (contactName.includes(filter)) {
                item.classList.add('matched'); // Apply styling to matching contacts
                item.classList.remove('hidden'); // Remove hidden class
                hasVisibleContacts = true;
            } else {
                item.classList.remove('matched'); // Remove styling from non-matching contacts
                item.classList.add('hidden'); // Add hidden class to hide text content
            }
        });

        const alphabetDiv = group.querySelector('.alphabet');
        alphabetDiv.style.display = 'block'; // Always show alphabet labels

        if (!hasVisibleContacts) {
            alphabetDiv.style.display = 'none'; // Hide alphabet label if no visible contacts in the group
        }
    });

    const noResultElement = document.getElementById('noResultsFound');
    const allContactsHidden = document.querySelectorAll('ul li.hidden').length === contactGroups.length;

    if (allContactsHidden) {
        noResultElement.style.display = 'block';
    } else {
        noResultElement.style.display = 'none';
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
    

function clearContactForm() {
    document.getElementById('name').value = '';
    document.getElementById('contactNo').value = '';
    document.getElementById('email').value = '';
    document.getElementById('whatsappNo').value = '';
    document.getElementById('imageSrc').value = '';
}

function closeAddContactForm(){
    const ContactForm = document.getElementById('addContactForm');
    ContactForm.style.display = 'none';
 }

 window.addEventListener('load', updateContactList);