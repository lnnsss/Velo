/*----burger----------------------------*/

$(document).ready(function() {
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

/*----variables----------------------------*/

const body = document.querySelector("body"),
    wrapper = document.querySelector(".wrapper"),
    mainContent = document.getElementById("main_container"),
    logoBtn = document.getElementById("logoBtn"),
    glavnayaBtn = document.getElementById("glavnayaBtn"),
    addBtn = document.getElementById("addBtn"),
    korzinaBtn = document.getElementById("korzinaBtn"),
    reviewsBtn = document.getElementById("reviewsBtn"),
    aboutBtn = document.getElementById("aboutBtn"),
    logInBtn = document.getElementById("logInBtn"),
    logInName = document.getElementById("logInName"),
    themeBtn = document.getElementById("themeBtn"),
    popup = document.getElementById("popup"),
    popupBtn = document.getElementById("popupBtn"),
    korzinaCounter = document.querySelector(".korzinaCounter");

let itogoPriceCounter = 0,
    themeImg = document.getElementById("themeImg");

/*----tovarList----------------------------*/

let tovarList = [
    {
        title: "test drive: archive",
        description: "LILDRUGHILL",
        price: 20,
        img: "testDrive"
    },
    {
        title: "PHYSICAL PAIN",
        description: "LOVV66",
        price: 25,
        img: "physicalPain"
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
        title: "Sosa Muzik",
        description: "Платина",
        price: 30,
        img: "sosaMuzik"
    },
    {
        title: "Tsukuyomi Dream",
        description: "ROCKET",
        price: 25,
        img: "tsukuyomiDream"
    },
    {
        title: "All Babies Fly",
        description: "LILDRUGHILL",
        price: 30,
        img: "allBabiesFly"
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
        title: "AA LANGUAGE",
        description: "aarne",
        price: 50,
        img: "aaLanguage"
    },
    {
        title: "PLAYERS CLUB 2",
        description: "OBLADAET",
        price: 30,
        img: "playersClub2"
    }
];

/*----korzinaList----------------------------*/

let korzinaList = [];

/*----rewiesList----------------------------*/

let reviewsList = [
    {
        name: "Тимур",
        message: "Спасибо за товар! Все качественно! Сначала думал это скам, но заказал. Не разочарован!",
        img: "r1"
    },
    {
        name: "Роберт",
        message: "Ну..",
        img: "r2"
    },
    {
        name: "Аня",
        message: "Большое спасибо! Наконецто могу послушать Анну Асти на виниле! Лучший подарок на день рождения!",
        img: "r3"
    },
    {
        name: "Антон",
        message: "Подарили отцу Басту на виниле. Рад! 5 звезд, буду заказывать еще!",
        img: "r4"
    },
    {
        name: "Егор",
        message: "Плюс один диск в коллецию, класс!",
        img: "r5"
    },
    {
        name: "Айнур",
        message: "Товар пришел целым и не вредимым. Респект!",
        img: "r6"
    }
];

/*----light--theme--------------------------*/

themeImg.src  = "images/dayIcon.png";

/*----func----theme------------------------*/

function theme() {
    let actualTheme = /[^/]*$/.exec(themeImg.src)[0];
    if (actualTheme == "dayIcon.png") {
        themeImg.src = "images/nightIcon.png";
    } else {
        themeImg.src = "images/dayIcon.png";
    };
    body.classList.toggle("nightTheme");
};

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
            <img src="images/covers/${item.img}.jfif" alt="tovar" class="tovar_image">
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
    };
    
    /*----редактирование--поля--цена------------------------*/
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
        price: parseInt(albumPrice.value),
        img: "defaultVinyl"
    };

    console.log("dfgdg");
    tovarList.push(newAlbum);
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
                    <img src="images/covers/${item.img}.jfif" alt="tovar" class="korzina_tovar_image">
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

/*----func----clearKorzina------------------------*/

function clearKorzina() {
    itogoPriceCounter = 0;
    korzinaList = [];
    korzinaPage();
    displayKorzinaItems();
    korzinaCounter.innerHTML = korzinaList.length;
};

/*----func----korzinaPage------------------------*/

function korzinaPage() {
    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <div class="korzinaHeader">
                <h2 class="tittle">Корзина</h2>
                <span id="clearKorzina" onclick="clearKorzina()">Очистить корзину</span>
            </div>
            <div class="korzina">
            </div>
            <div class="buyFooter _container">
                <div class="buyFooter_left">
                    <span id="itogo">Итого:</span>
                    <span id="itogoPrice">${itogoPriceCounter}$</span>
                </div>
                <div class="buyFooter_right">
                    <button class="buyFooter_btn id="buyBtn">Купить</button>                
                </div>
            </div>      
        </div>
    </div>
    `;
};

/*----func----reviewsPage------------------------*/

function reviewsPage() {

    mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h2 class="tittle leftTxt">Отзывы</h2>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
    `;

    /*----swiper-js---------------------------*/
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
};

/*----func----displayReviews------------------------*/

function displayReviews() {
    let displayReview = '';
    const reviews = document.querySelector(".swiper-wrapper");

    if (reviewsList.length === 0) {
        document.getElementsByClassName("pa1_container").innerHTML += ``;
    };
    reviewsList.forEach(function(review, i) {
        displayReview = `
        <div class="swiper-slide review" id="review_${i}">
            <img src="images/reviews/${review.img}") class="review_image">
            <h5 class="review_autor">${review.name}</h5>
            <p class="review_message">${review.message}</p>
        </div>
        `;

        reviews.innerHTML += displayReview;
    });
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

/*----func----logInMenu------------------------*/

function logInMenu() {
    wrapper.classList.add("lock");
    popup.classList.add("active");
};

/*----func----logIn------------------------*/

function logIn() {
    let login = document.getElementById("login"),
        password = document.getElementById("password");

    /*----сброс--------------------*/
    function reset() {
        login.value = "";
        password.value = "";
        wrapper.classList.remove("lock");
        popup.classList.toggle("active");
    };

    /*----валидация--------------------*/
    if (Boolean(login.value) == false || Boolean(password.value) == false ) {
        alert("Все поля должны быть заполнены.");
        reset();
        return;
    }; 
    if (login.value.length < 6) {
        alert("Логин должен состоять как минимум из 6 символов.");
        reset();
        return;
    }; 
    if (password.value.length < 8) {
        alert("Пароль должен состоять как минимум из 8 символов.");
        reset();
        return;
    }; 
    if (Boolean(login.value) && Boolean(password.value)) {
        alert(`${login.value}, добро пожаловать!`);
        logInName.innerHTML = login.value;
        logInName.classList.add("active");
        logInBtn.classList.add("hidden");
        reset();
        return;
    }; 
};

/*----func----logIn------------------------*/

function logOut() {
    logInName.classList.remove("active");
    logInBtn.classList.remove("hidden");
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
    pageCleaner();
    addPage();
});

korzinaBtn.addEventListener("click", function() {
    pageCleaner();
    korzinaPage();
    displayKorzinaItems();
});

reviewsBtn.addEventListener("click", function() {
    reviewsPage();
    displayReviews();
});

aboutBtn.addEventListener("click", function() {
    pageCleaner();
    aboutPage();
});

logInBtn.addEventListener("click", function() {
    logInMenu();
});

popupBtn.addEventListener("click", function() {
    logIn();
});

themeBtn.addEventListener("click", function() {
    theme();
});

logInName.addEventListener("click", function() {
    logOut();
})

/*----basic----------------------------*/

tovarsPage();
displayTovars();
