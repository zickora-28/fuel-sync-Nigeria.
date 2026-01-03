function addUpdate() {
    const station = document.getElementById('stationName').value;
    const price = document.getElementById('fuelPrice').value;
    const queue = document.getElementById('queueLevel').value;
    const time = new Date().toLocaleTimeString();

    if (station === '' || price === '') {
        alert("Please fill in all fields");
        return;
    }

    const feed = document.getElementById('updateFeed');

    // Create a new card
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <h4>${station}</h4>
        <p class="price-tag">₦${price} / Litre</p>
        <p><strong>Queue:</strong> ${queue}</p>
        <small>Reported at: ${time}</small>
    `;

    // Add to the top of the feed
    feed.prepend(card);

    // Clear inputs
    document.getElementById('stationName').value = '';
    document.getElementById('fuelPrice').value = '';
}
