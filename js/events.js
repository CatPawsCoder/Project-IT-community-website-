const eventList = document.querySelector('.event-list ul1');

const events = [
  {
    date: '2023-03-15',
    title: 'Web Design Workshop',
   image:  'img/ux.jpg',
     description:'Learn how to build responsive websites using HTML, CSS, and JavaScript',
          alt: 'UX design workshop image'
  },
  {
    date: '2023-03-20',
    title: 'Product Launch Event',
      image:  'img/background1.jpg',
    description:'Learn how to create new exciting IT products',
          alt: 'Product Launch Event image'
  },
  {
    date: '2023-03-25',
    title: 'Data Science Seminar',
   image:  'img/metaverse.jpg',
    description:'Discover the latest trends and techniques in data science and machine learning.',
      alt: 'Data Science  image'
  }
];


const renderEvents = () => {
  eventList.innerHTML = '';
  events.forEach(event => {
    let eventDate = new Date(event.date);
    let today = new Date();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthName = months[eventDate.getMonth()];
    let dateString = `${monthName} ${eventDate.getDate()}`;
    if (eventDate.getFullYear() !== today.getFullYear()) {
      dateString += `, ${eventDate.getFullYear()}`;
    }
    let listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="date">${dateString}</span>
      <span class="title">${event.title}</span>
     <img class="event-image" src="${event.image}" alt="${event.title}">
<span class="description">${event.description}</span>
 <button class="register-button">Register for an event</button>
    `;
    eventList.appendChild(listItem);
  });
};


renderEvents();

//  register buttons
const registerButtons = document.querySelectorAll('.register-button');

// Attach event listeners to each button
registerButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Registered
    alert(`You are now registered for ${button.parentNode.querySelector('.title').textContent}`);
  });
});
