var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Update the HTML
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('pool');
elRooms.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;