const contacts = [
    {
        name: 'Arya',
        imageSrc: './Images/arya.jpg',
        contactNumber: '6362781093',
        email: 'arya@gmail.com',
        whatsappNumber: '908765463561'
    },
    {
        name: 'Bhavish',
        imageSrc: './Images/bhavish.jpeg',
        contactNumber: '1234567890',
        email: 'bhavish@gmail.com',
        whatsappNumber: '654678642909'
    },
    {
      name:'Charan',
      imageSrc: './Images/charan.jpg',
      contactNumber: '7896546923',
      email: 'charan@yahoo.com',
      whatsappNumber: '654678642909'
    },
    {
        name:'Divya',
        imageSrc: './Images/divya.jpg',
        contactNumber: '7676041082',
        email: 'divya@gmail.com',
        whatsappNumber: '654678642909'
    },
    {
        name:'Harshitha',
        imageSrc: './Images/harshi.jpg',
        contactNumber: '6568983492',
        email: 'harshitha@gmail.com',
        whatsappNumber: '654678642909' 
    }
    
];

function showContactDetails(name,imageSrc){
    const detailsContainer =document.querySelector('.contact_container');
    const showContactDetails = document.querySelector('.contact-details')
     
    const contact = contacts.find((c) => c.name === name);

    detailsContainer.innerHTML =`
    <div class="details">
        <ion-icon class='back_arrow' name="chevron-back"></ion-icon>
        <ion-icon class="star-icon" name="star"></ion-icon>
        <ion-icon class='menu' name="menu"></ion-icon>
    </div>
    <div class="display_image">
        <img src = "${contact.imageSrc}">
    </div>
    <h3>${contact.name}</h3>

    <div class="connect">
       <div class="connect_details icons">
           <div class="phone">
                <ion-icon name="call"></ion-icon>
                <h5>Call</h5>
            </div>
            <div class="message">
                <ion-icon name="chatbubble-ellipses"></ion-icon>
                <h5>Message</h5>
            </div>
            
            <div class="video">
                <ion-icon name="videocam"></ion-icon>
                <h5>Video</h5>
            </div>
        
            <div class="mail">
                <ion-icon name="mail"></ion-icon>
                <h5>Mail</h5>
            </div>
            
       </div>
    </div>
   
     `;

     // Show the contact container
     detailsContainer.style.display = 'block';
 }
 




