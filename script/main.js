/*----burger----------------------------*/

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

/*----variables----------------------------*/

const mainContent = document.getElementById("main_container"),
    logoBtn = document.getElementById("logoBtn"),
    glavnayaBtn = document.getElementById("glavnayaBtn"),
    addBtn = document.getElementById("addBtn"),
    korzinaBtn = document.getElementById("korzinaBtn");

/*----tovarList----------------------------*/

const tovarList = [
    {
        title: "test drive: archive",
        description: "LILDRUGHILL",
        price: 20,
        img: "testDrive"
    },
    {
        title: "Free Rio 2",
        description: "OG Buda",
        price: 25,
        img: "freeRio2"
    },
    {
        title: "KRISTINA",
        description: "LIL KRYSTALLL",
        price: 30,
        img: "kristina"
    },
    {
        title: "WILD EA$T",
        description: "SALUKI",
        price: 50,
        img: "wildEast"
    },
    {
        title: "All Babies Fly",
        description: "LILDRUGHILL",
        price: 30,
        img: "allBabiesFly"
    },
    {
        title: "Tsukuyomi Dream",
        description: "ROCKET",
        price: 25,
        img: "tsukuyomiDream"
    },
    {
        title: "rEVOLVE",
        description: "LILDRUGHILL",
        price: 30,
        img: "revolve"
    },
    {
        title: "Swag Season 2",
        description: "ROCKET",
        price: 50,
        img: "swagSeason2"
    },
    {
        title: "glow",
        description: "LILDURGHILL",
        price: 30,
        img: "glow"
    },
    {
        title: "PHILARMONIA",
        description: "PHARAOH",
        price: 50,
        img: "philarmonia"
    },
    {
        title: "QWERTY LANG",
        description: "Boulevard Depo",
        price: 50,
        img: "qwertyLang"
    },
    {
        title: "PHREQUENCY",
        description: "PHARAOH",
        price: 30,
        img: "phrequency"
    }
];

/*----korzinaList----------------------------*/

const korzinaList = [];

/*----func----pageCleaner------------------------*/

function pageCleaner() {
    mainContent.innerHTML = "";
};

/*----func----addToKorzina------------------------*/

function addToKorzina() {
    let itemId = event.target.getAttribute('id')[2];
    let res = tovarList[itemId];
    let newKorzinaItem = {
        title: res.title,
        description: res.description,
        price: res.price,
        img: res.img
    };
    korzinaList.push(newKorzinaItem);
    console.log(newKorzinaItem);
}

/*----func----tovarsPage------------------------*/

function tovarsPage() {
    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h1 class="mainTittle">Velo</h1>
            <span class="podTittle">Cайт по продаже виниловых пластинок лучших артистов страны</span>
            <h2 class="tittle albumsTittle">Альбомы</h2>
            <div class="tovars">
            </div>
        </div>
    </div>
    `;
};

/*----func----displayTovars------------------------*/

function displayTovars() {
    let displayTovar = '';
    const tovars = document.querySelector(".tovars");

    if (tovarList.length === 0) document.getElementsByClassName("pa1_container").innerHTML += ``;
    tovarList.forEach(function(item, i) {
        displayTovar = `
        <div class="tovar" id="item_${i}">
            <img src="images/${item.img}.jfif" alt="tovar" class="tovar_image">
            <h4 class="tovar_title">${item.title}</h4>
            <span class="tovar_description">${item.description}</span>
            <span class="tovar_price">${item.price}$</span>
            <button class="tovar_btn" id="m_${i}" onclick="addToKorzina(event)">В корзину</button>
        </div>
        `;

        tovars.innerHTML += displayTovar;
    });
};

/*----func----addNewAlbum------------------------*/

function addNewAlbum() {
    const albumTitle = document.getElementById("albumTitle"),
    albumDescription = document.getElementById("albumDescription"),
    albumPrice = document.getElementById("albumPrice");

    if (!albumTitle.value || !albumDescription.value || !albumPrice.value) return;
    
    let newAlbum = {
        title: albumTitle.value,
        description: albumDescription.value,
        price: albumPrice.value,
        img: "defaultVinyl"
    };

    console.log("dfgdg");
    tovarList.push(newAlbum);
    localStorage.setItem('tovar', JSON.stringify(tovarList));
    pageCleaner();
    tovarsPage();
    displayTovars();
};

/*----func----addPage------------------------*/

function addPage() {
    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h2 class="tittle addTittle">Добавьте свой релиз!</h2>
            <form action="" class="addForm">
                <div class="addForm_container">
                    <label for="albumTitle" class="addFormLabel">Название</label>
                    <input type="text" id="albumTitle" class="addFormInput" placeholder="WILD EA$T">
                    <label for="albumDescription" class="addFormLabel">Артист</label>
                    <input type="text" id="albumDescription" class="addFormInput" placeholder="SALUKI">
                    <label for="albumPrice" class="addFormLabel">Цена ($)</label>
                    <input type="text" id="albumPrice" class="addFormInput" placeholder="50">
                    <button class="addNewAlbumBtn" id="addNewAlbumBtn">Добавить</button>
                </div>
            </form>            
        </div>
    </div>
    `;

    const addNewAlbumBtn = document.getElementById("addNewAlbumBtn");
    addNewAlbumBtn.addEventListener("click", function() {
        addNewAlbum();
    })
};

/*----func----displayKorzinaItems------------------------*/

function displayKorzinaItems() {
    let displayKorzinaItem = '';
    const korzina = document.querySelector(".korzina");

    if (tovarList.length === 0) document.getElementsByClassName("pa1_container").innerHTML += ``;
    korzinaList.forEach(function(item, i) {
        displayKorzinaItem = `
        <div class="korzinaItem">
            <div class="korzina_tovar_image_div">
                <img src="images/${item.img}.jfif" alt="tovar" class="korzina_tovar_image">
            </div>
            <h3 class="korzina_tovar_title">${item.title}</h3>
            <h4 class="korzina_tovar_description">${item.description}</h4>
            <h4 class="korzina_tovar_price">${item.price}$</h4>
            <span class="korzina_tovar_del" id="d_${i}" onclick="delFromKorzina(event)">X</span>
        </div>
        `;

        korzina.innerHTML += displayKorzinaItem;
    });
};

/*----func----delFromKorzina------------------------*/

function delFromKorzina() {
    if (korzinaList.length == 1) {
        korzinaList = [];
    } else {
        delete korzinaList[event.target.getAttribute('id')[2]];
    }
    korzinaPage();
    displayKorzinaItems();
};

/*----func----korzinaPage------------------------*/

function korzinaPage() {
    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h2 class="tittle korzinaTittle">Корзина</h2>
            <div class="korzina">
            </div>        
        </div>
    </div>
    `;
};

/*----btnsListen----------------------------*/

logoBtn.addEventListener("click", function() {
    pageCleaner();
    tovarsPage();
    displayTovars();
});

glavnayaBtn.addEventListener("click", function() {
    pageCleaner();
    tovarsPage();
    displayTovars();
});

addBtn.addEventListener("click", function() {
    addPage();
});

korzinaBtn.addEventListener("click", function() {
    pageCleaner();
    korzinaPage();
    displayKorzinaItems();
});

/*----basic----------------------------*/

tovarsPage();
displayTovars();