window.onload = function(){
    const searchBar = document.getElementById('searchBar');
    const searchList = document.getElementById('searchList');
    const companies = ['Apple(AAPL)', 'Cisco(CSCO)', 'Metaverse(FB)', 'Sony(SONY)', 'Google(GOOG)'];

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value;
        if (searchString !== "") {
            const filteredCompanies = companies.filter((corp) => {
                return corp.toLowerCase().includes(searchString.toLowerCase());
            });
            displayCorps(filteredCompanies)
        } else {
            searchList.innerHTML = "";
        }
    });

    const displayCorps = (corps) => {
        const htmlString = corps
            .map((corp) => {
                return `<button>${corp}</button>`;
            })
            .join('');
        searchList.innerHTML = htmlString;
    };

    let myChart = document.getElementById('myChart').getContext('2d');
    let compChart = new Chart(myChart, {
        type: 'bar',
        data: {
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge'],
            datasets: [{
                label:'Population',
                data:  [617594, 181045, 153060, 106519, 105612, 95072]
            }]
        },
        options: {}
    })
};


