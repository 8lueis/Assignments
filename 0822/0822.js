const player = [{
    title: '이명헌',
    category: 'point-guard',
    position: '3학년',
    img: '#',
    desc: '접미어 뿅'
},
{
    title: '정우성',
    category: 'small-forward',
    position: '2학년',
    img: '/0822/img/우성.png',
    desc: '우케테 야루'
}
]

// DOM
const sectionCenter = document.querySelector('.section-center');
const containerBtn = document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function() {
displayPlayerItems(player);
displayPlayerButtons();
});

function displayPlayerItems(playerItems) {
let displayPlayer = playerItems.map(function(item) {
    return `<article class="player-item">
    <div class="img-info">
        <img src="${item.img}" alt="${item.title}">
    </div>
    <div class="item-info">
        <header>
            <h2>${item.title}</h2>
            <h4 class="price">${item.position}</h4>
        </header>
        <p class="item-text">
            ${item.desc}
        </p>
    </div>
</article>`
});

displayPlayer = displayPlayer.join("");
sectionCenter.innerHTML = displayPlayer;

function displayPlayerButtons() {
    const categories = player.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
            console.log(values, item);
        }
        return values
    }, ['all'])

    console.log(categories);

    const categoryBtns = categories.map(function(category) {
            return ` <button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
        })
        .join("");

    containerBtn.innerHTML = categoryBtns;

    const filterBtns = containerBtn.querySelectorAll('.filter-btn');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            const category = e.currentTarget.dataset.id;
            const playerCategory = player.filter(function(playItem) {
                if (playerItems.category === category) {
                    return playerItems;
                }
            });
            if (category === 'all') {
                displayPlayerItems(player);
            } else {
                displayPlayerItems(playerCategory);
            }
        });
    });

};



};