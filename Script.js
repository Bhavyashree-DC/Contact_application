const contacts = [
    {
        name: 'Arya',
        imageSrc: './images/arya.jpg',
        contactNumber: '6362781093',
        email: 'arya@gmail.com',
        whatsappNumber: '908765463561'
    },
    {
        name: 'Bhavish',
        imageSrc: './images/Bhavish.webp',
        contactNumber: '1234567890',
        email: 'bhavish@gmail.com',
        whatsappNumber: '654678642909'
    },
    {
      name:'Charan',
      imageSrc: './images/charan.jpg',
      contactNumber: '7896546923',
      email: 'charan@yahoo.com',
      whatsappNumber: '654678642909'
    },
    {
        name:'Divya',
        imageSrc: './images/divya1.jpg',
        contactNumber: '7676041082',
        email: 'divya@gmail.com',
        whatsappNumber: '654678642909'
    },
    {
        name:'Harshitha',
        imageSrc: './images/harshitha.jpg',
        contactNumber: '6568983492',
        email: 'harshitha@gmail.com',
        whatsappNumber: '654678642909' 
    }
    
];

function showContactDetails(name) {
    const detailsContainer = document.querySelector('.contact_container');
    const contactContainer = document.querySelector('.contact-details');

    const contact = contacts.find((c) => c.name === name);

    detailsContainer.innerHTML = `
            <div class="details">
                <ion-icon class='back_arrow' name="chevron-back" onclick="toggleDetails()"></ion-icon>
                <div  class = "menu-container" onclick="toogleDropdownMenu()">
                   <ion-icon class='menu' name="menu"></ion-icon>
                 
                   <div class = "dropdown-menu" id="dropdownMenu">
                      <ul>
                           <ion-icon class='close-icon' name="close-circle"></ion-icon>
                            <li><a href="#">Delete</a></li>
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
        icon.classList.add('active-icon');
    });
}

function displayMessage(message){
    const messageElement = document.querySelector('.contact-details .whatsapp-number');
    messageElement.textContent = `Whatsapp: ${message}`;
   
    clearOtherValues(messageElement);
    activeIcon = 'message';

    const icons = document.querySelectorAll('.connect_details ion-icon');
    icons.forEach((icon) => {
        icon.classList.add('active-icon');
    });
}

function displayVideoCall(video){
    const videoElement = document.querySelector('.contact-details .video-call');
    videoElement.textContent = `Video-call: ${video}`;
    
    clearOtherValues(videoElement);
    activeIcon = "video";

    const icons = document.querySelectorAll('.connect_details ion-icon');
    icons.forEach((icon) => {
        icon.classList.add('active-icon');
    });
}

function displayEmailAddress(email) {
    const emailElement = document.querySelector('.contact-details .email-address');
    emailElement.textContent = `Email: ${email}`;
 
    clearOtherValues(emailElement);
    activeIcon = 'mail';

    const icons = document.querySelectorAll('.connect_details ion-icon');
    icons.forEach((icon) => {
        icon.classList.add('active-icon');
    });
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

   
function closeAddContactForm(){
    const ContactForm = document.getElementById('addContactForm');
    ContactForm.style.display = 'none';
}