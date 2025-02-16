const destinations = [
    { id:1, name: 'shimla', link:'./explores/shimla.html', description: 'The city of love with Eiffel Tower.' },
    { id:2 ,name: 'udaipur', image: 'https://via.placeholder.com/150?text=Rome', description: 'Explore ancient history and culture.' },
    { id: 3,name: 'Kashmir', image: 'https://via.placeholder.com/150?text=New+York', description: 'The city that never sleeps.' },
    { id: 4,name: 'manali', image: 'https://via.placeholder.com/150?text=Tokyo', description: 'Experience modern culture and technology.' },
    { id: 5, name: 'Rishikesh', image: 'https://via.placeholder.com/150?text=Sydney', description: 'Visit the iconic Sydney Opera House.' },
    { id: 6,name: 'Srinagar', image: 'https://via.placeholder.com/150?text=Tokyo', description: 'Experience modern culture and technology.' },
    { id: 7, name: 'jaipur', image: 'https://via.placeholder.com/150?text=Sydney', description: 'Visit the iconic Sydney Opera House.' },
    {id:8 , name: 'goa',image:'',description:''},
    {id:9 , name: 'darjelling',image:'',description:''},
    {id:10 , name: 'kedarnath',image:'',description:''},
    {id:11, name: 'Shilong',image:'',description:''},
];

function renderDestinations(destinationList) {
    const destinationContainer = document.getElementById('destinationContainer');
    destinationContainer.innerHTML = ''; // Clear existing destinations
    destinationList.forEach(destination => {
        const destinationCard = document.createElement('div');
        destinationCard.classList.add('col-lg-3','col-md-4', 'col-sm-6','destination-card');
        destinationCard.innerHTML = `
            <div class="card ">
             <a href="${destination.link}" class="btn-link">Explore</a>
            <div class="image-container">
                <img src="destinationima/${destination.name}.jfif" class="card-img-top destination-image" alt="${destination.name}">
                <div class="overlay">
                    <p class="card-text">${destination.description}</p>
                    
                </div>
            </div>
            </div>
        <h5 class="card-title text-capitalize ">${destination.name}</h5>
        `;
        destinationContainer.appendChild(destinationCard);
    });
}

// Render all destinations initially
renderDestinations(destinations);
function searchDestinations() {
    const searchBox = document.getElementById('searchBox').value.toLowerCase();
    const filteredDestinations = destinations.filter(destination => 
        destination.name.toLowerCase().includes(searchBox)
    );
    renderDestinations(filteredDestinations);
}

function clearSearch() {
    document.getElementById('searchBox').value = '';
    renderDestinations(destinations);
}


function searchplace(){
    
}

const colors = ['#f4f4f4', '#e3f2fd', '#ffe0b2', '#c8e6c9', '#fff9c4', ];
        let currentColorIndex = 0;

        setInterval(() => {
            document.body.style.backgroundColor = colors[currentColorIndex];
            currentColorIndex = (currentColorIndex + 1) % colors.length; // Cycle through colors
        }, 3000); // Change every 3 seconds
