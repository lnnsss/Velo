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
    korzinaBtn = document.getElementById("korzinaBtn"),
    aboutBtn = document.getElementById("aboutBtn"),
    korzinaCounter = document.querySelector(".korzinaCounter");

let itogoPriceCounter = 0;

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
    korzinaCounter.classList.add("active");
    let itemId = event.target.getAttribute('id').replace(/\D/g, "");;
    let res = tovarList[itemId];
    let newKorzinaItem = {
        title: res.title,
        description: res.description,
        price: res.price,
        img: res.img
    };
    korzinaList.push(newKorzinaItem);
    korzinaCounter.innerHTML = korzinaList.length;
    itogoPriceCounter = 0;
    korzinaList.forEach(function(res) {
        itogoPriceCounter += res.price;
    });
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

    if (tovarList.length === 0) {
        document.getElementsByClassName("pa1_container").innerHTML += ``;
    };
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

    /*----проверка--на--заполненность--полей----------------------*/
    if (!albumTitle.value || !albumDescription.value || !albumPrice.value) {
        alert("Все поля должны быть заполнены!");
        return;
    }

    /*----проверка--поля--цена------------------------*/
    if (Number(albumPrice.value) + 0 != Number(albumPrice.value)) {
        alert(`Поле "цена" должно содержать числовое значение!`)
        return;    
    }; 

    /*----проверка--поля--цена--на--отрицательное--значение------------------*/
    if (Number(albumPrice.value) < 10) {
        alert(`Цена не может быть ниже 10$!`)
        return;    
    }; 

    
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

    if (korzinaList.length == 0) {
        korzina.innerHTML = `
            <span id="pusto">Пусто</span>
        `;
    } else {
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
    }
};

/*----func----delFromKorzina------------------------*/

function delFromKorzina() {
    let itemId = event.target.getAttribute('id');
    if (korzinaList.length == 0) {
        korzinaList = [];
        korzinaCounter.classList.remove("active");
    } else {
        korzinaList.splice(itemId.replace(/\D/g, ""), 1);
    };
    itogoPriceCounter = 0;
    korzinaList.forEach(function(res) {
        itogoPriceCounter += res.price;
    });
    korzinaPage();
    displayKorzinaItems();
    korzinaCounter.innerHTML = korzinaList.length;
};

/*----func----korzinaPage------------------------*/

function korzinaPage() {
    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h2 class="tittle leftTxt">Корзина</h2>
            <div class="korzina">
            </div>
            <div class="buyFooter _container">
                <div class="buyFooter_left">
                    <span id="itogo">Итого:</span>
                    <span id="itogoPrice">${itogoPriceCounter}$</span>
                </div>
                <div class="buyFooter_right">
                    <button class="buyFooter_btn">Купить</button>                
                </div>
            </div>      
        </div>
    </div>
    `;
};

/*----func----aboutPage------------------------*/

function aboutPage() {
    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h2 class="tittle leftTxt">О нас</h2>
            <span class="aboutSpan">Ну и что я здесь должен был написать?<br>Я бедный студент...</span>
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

aboutBtn.addEventListener("click", function() {
    pageCleaner();
    aboutPage();
});

/*----basic----------------------------*/

tovarsPage();
displayTovars();