let weights = [];

// Lataa tallennetut painot sivun alkaessa
if (localStorage.getItem('weights')) {
    weights = JSON.parse(localStorage.getItem('weights'));
    updateWeightList();
}

function saveWeight() {
    const username = document.getElementById('username').value;
    const weight = parseFloat(document.getElementById('weight').value);

    if (username === '' || isNaN(weight)) {
        alert('Syötä kelvollinen käyttäjänimi ja paino.');
        return;
    }

    // Tallenna paino käyttäjälle
    weights.push({ user: username, weight });

    // Päivitä näyttö
    updateWeightList();

    // Tallenna painot Local Storageen
    localStorage.setItem('weights', JSON.stringify(weights));
}

function updateWeightList() {
    const weightList = document.getElementById('weight-list');
    weightList.innerHTML = '';
    weights.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = entry.user + ': ' + entry.weight + ' kg';
        weightList.appendChild(li);
    });
}
