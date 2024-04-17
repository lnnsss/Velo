/*----burger----------------------------*/

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, .header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

/*----variables----------------------------*/

const body = document.querySelector("body"),
  wrapper = document.querySelector(".wrapper"),
  mainContent = document.getElementById("main_container"),
  logoBtn = document.getElementById("logoBtn"),
  catalogBtn = document.getElementById("catalogBtn"),
  addBtn = document.getElementById("addBtn"),
  korzinaBtn = document.getElementById("korzinaBtn"),
  reviewsBtn = document.getElementById("reviewsBtn"),
  aboutBtn = document.getElementById("aboutBtn"),
  logInBtn = document.getElementById("logInBtn"),
  logInName = document.getElementById("logInName"),
  themeBtn = document.getElementById("themeBtn"),
  logInPopup = document.getElementById("logInPopup"),
  logInPopupBtn = document.getElementById("logInPopupBtn"),
  logInPopupBackBtn = document.getElementById("logInPopupBackBtn"),
  logOutPopup = document.getElementById("logOutPopup"),
  logOutPopupBtn = document.getElementById("logOutPopupBtn"),
  logOutPopupBackBtn = document.getElementById("logOutPopupBackBtn"),
  korzinaCounter = document.querySelector(".korzinaCounter");

let itogoPriceCounter = 0,
  themeImg = document.getElementById("themeImg"),
  userName = document.getElementById("userName");

/*----tovarList----------------------------*/

let tovarList = [
  {
    title: "test drive: archive",
    description: "LILDRUGHILL",
    price: 20,
    img: "testDrive",
  },
  {
    title: "PHYSICAL PAIN",
    description: "LOVV66",
    price: 25,
    img: "physicalPain",
  },
  {
    title: "KRISTINA",
    description: "LIL KRYSTALLL",
    price: 30,
    img: "kristina",
  },
  {
    title: "WILD EA$T",
    description: "SALUKI",
    price: 50,
    img: "wildEast",
  },
  {
    title: "Sosa Muzik",
    description: "Платина",
    price: 30,
    img: "sosaMuzik",
  },
  {
    title: "Tsukuyomi Dream",
    description: "ROCKET",
    price: 25,
    img: "tsukuyomiDream",
  },
  {
    title: "All Babies Fly",
    description: "LILDRUGHILL",
    price: 30,
    img: "allBabiesFly",
  },
  {
    title: "Swag Season 2",
    description: "ROCKET",
    price: 50,
    img: "swagSeason2",
  },
  {
    title: "glow",
    description: "LILDURGHILL",
    price: 30,
    img: "glow",
  },
  {
    title: "PHILARMONIA",
    description: "PHARAOH",
    price: 50,
    img: "philarmonia",
  },
  {
    title: "AA LANGUAGE",
    description: "aarne",
    price: 50,
    img: "aaLanguage",
  },
  {
    title: "PLAYERS CLUB 2",
    description: "OBLADAET",
    price: 30,
    img: "playersClub2",
  },
];

/*----korzinaList----------------------------*/

let korzinaList = [];

/*----rewiesList----------------------------*/

let reviewsList = [
  {
    name: "Тимур",
    message:
      "Спасибо за товар! Все качественно! Сначала думал это скам, но заказал. Не разочарован!",
    img: "r1",
  },
  {
    name: "Роберт",
    message: "Ну..",
    img: "r2",
  },
  {
    name: "Аня",
    message:
      "Большое спасибо! Наконецто могу послушать Анну Асти на виниле! Лучший подарок на день рождения!",
    img: "r3",
  },
  {
    name: "Антон",
    message:
      "Подарили отцу Басту на виниле. Рад! 5 звезд, буду заказывать еще!",
    img: "r4",
  },
  {
    name: "Егор",
    message: "Плюс один диск в коллецию, класс!",
    img: "r5",
  },
  {
    name: "Айнур",
    message: "Товар пришел целым и не вредимым. Респект!",
    img: "r6",
  },
];

/*----light--theme--------------------------*/

themeImg.src = "images/dayIcon.png";

/*----func----theme------------------------*/

function theme() {
  let actualTheme = /[^/]*$/.exec(themeImg.src)[0];
  if (actualTheme == "dayIcon.png") {
    themeImg.src = "images/nightIcon.png";
  } else {
    themeImg.src = "images/dayIcon.png";
  }
  body.classList.toggle("nightTheme");
}

/*----func----pageCleaner------------------------*/

function pageCleaner() {
  mainContent.innerHTML = "";
}

/*----func----addToKorzina------------------------*/

function addToKorzina() {
  korzinaCounter.classList.add("active");
  let itemId = event.target.getAttribute("id").replace(/\D/g, "");
  let res = tovarList[itemId];
  let newKorzinaItem = {
    title: res.title,
    description: res.description,
    price: res.price,
    img: res.img,
  };
  korzinaList.push(newKorzinaItem);
  korzinaCounter.innerHTML = korzinaList.length;
  itogoPriceCounter = 0;
  korzinaList.forEach(function (res) {
    itogoPriceCounter += res.price;
  });
}

/*----func----mainPage------------------------*/

function mainPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="pa1_container">
            <h1 class="mainTittle">Velo</h1>
            <span class="podTittle">Cайт по продаже виниловых пластинок лучших артистов страны</span>
        </div>
    </div>
    <div class="pa2">
        <div class="_container pa2_container">
            <h3 class="miniTittle">Добро пожаловать в мир винила!</h3>
            <p class="paragraph">Добро пожаловать на наш сайт, посвященный удивительному миру виниловых пластинок! Мы - ваш надежный партнер в поиске и покупке качественных и коллекционных виниловых записей. Здесь вы найдете широкий ассортимент музыкальных жемчужин различных жанров, от классики до современных хитов.</p>
            <h3 class="miniTittle">Откройте для себя новые звуки</h3>
            <p class="paragraph">Погрузитесь в атмосферу настоящего звука с виниловыми пластинками! Наслаждайтесь теплым и насыщенным звучанием, которое придает музыке особую глубину и теплоту. Наша коллекция включает в себя как классические альбомы легендарных исполнителей, так и редкие издания, которые станут украшением любой музыкальной коллекции.</p>
            <h3 class="miniTittle">Покупайте с уверенностью</h3>
            <p class="paragraph">Мы гордимся тем, что предлагаем только высококачественные виниловые пластинки, прошедшие тщательный отбор и проверку. У нас вы можете быть уверены в подлинности каждой пластинки и ее отличном звучании. Наслаждайтесь музыкой в ее лучшем виде с нашими виниловыми записями и добавьте неповторимый шарм в свою аудио-коллекцию!</p>
        </div>
    </div>
    <div class="pa3">
        <div class="pa3_container">
        </div>
    </div>
    <div class="pa4">
        <div class="_container pa4_container">
            <h3>Почему выбирают нас?</h3>
            <ul class="pa4_ul">
                <li class="pa4_li"><span class="pa4_li_tittle">Широкий выбор: </span>Наш магазин предлагает широкий ассортимент виниловых пластинок различных жанров, от классики до современных хитов. Мы постоянно пополняем свой каталог новыми релизами и редкими изданиями, чтобы вы могли найти именно то, что искали.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Качество и подлинность: </span>Мы уделяем особое внимание качеству и подлинности каждой пластинки. Каждая пластинка проходит тщательный отбор и проверку, чтобы гарантировать нашим клиентам только лучшее.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Лучшие цены: </span>Наш магазин предлагает конкурентоспособные цены на все виниловые пластинки, чтобы вы могли приобрести желаемый альбом по доступной цене.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Быстрая доставка: </span>Мы гарантируем быструю и надежную доставку виниловых пластинок в любую точку страны. Вы можете быть уверены, что ваша заказ придет вовремя и в идеальном состоянии.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Клиентская поддержка: </span>Наш магазин известен своей отличной клиентской поддержке. Если у вас возникнут какие-либо вопросы или проблемы, наши специалисты всегда готовы помочь и ответить на все ваши вопросы.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Благотворительность: </span>При покупке виниловых пластинок в нашем магазине, вы можете принимать участие в благотворительных акциях и помогать тем, кто нуждается в помощи. Мы уверены, что музыка может объединить людей и делать мир лучше.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Комплексное обслуживание: </span>В нашем магазине вы можете не только купить виниловые пластинки, но и получить комплексное обслуживание по подбору и настройке музыкального оборудования. Наши специалисты помогут вам выбрать идеальный вариант на подарок или для коммерческого использования.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Наушники: </span>В комплекте с виниловыми пластинками могут поставляться наушники к инструменту, адаптер переменного тока, пюпитр. Производитель обязательно кладет руководство пользователя с инструкциями по подключению, использованию, устранению типовых неполадок.</li>
                <li class="pa4_li"><span class="pa4_li_tittle">Эксклюзивные издания: </span>Наш магазин предлагает эксклюзивные грампластинки в подарок ценителям качественного винила и хорошей музыки. Вы можете быть уверены, что при покупке у нас, вы получите не только качественную пластинку, но и уникальный подарок.</li>
            </ul>
        </div>
    </div>
    `;
}

/*----func----catalogPage------------------------*/

function catalogPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="_container pa1_container">
            <h2 class="tittle leftTxt">Каталог</h2>
            <h2 class="tittle albumsTittle">Альбомы</h2>
            <div class="tovars">
            </div>
        </div>
    </div>
    `;
}

/*----func----displayTovars------------------------*/

function displayTovars() {
  let displayTovar = "";
  const tovars = document.querySelector(".tovars");

  if (tovarList.length === 0) {
    document.getElementsByClassName("pa1_container").innerHTML += ``;
  }
  tovarList.forEach(function (item, i) {
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
}

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

  /*----редактирование--поля--цена------------------------*/
  if (Number(albumPrice.value) + 0 != Number(albumPrice.value)) {
    alert(`Поле "цена" должно содержать числовое значение!`);
    return;
  }

  /*----проверка--поля--цена--на--отрицательное--значение------------------*/
  if (Number(albumPrice.value) < 10) {
    alert(`Цена не может быть ниже 10$!`);
    return;
  }

  let newAlbum = {
    title: albumTitle.value,
    description: albumDescription.value,
    price: parseInt(albumPrice.value),
    img: "defaultVinyl",
  };

  tovarList.push(newAlbum);
  pageCleaner();
  catalogPage();
  displayTovars();
}

/*----func----addPage------------------------*/

function addPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="_container pa1_container">
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
  addNewAlbumBtn.addEventListener("click", function () {
    addNewAlbum();
  });
}

/*----func----displayKorzinaItems------------------------*/

function displayKorzinaItems() {
  let displayKorzinaItem = "";
  const korzina = document.querySelector(".korzina");

  if (korzinaList.length == 0) {
    korzina.innerHTML = `
            <span id="pusto">Пусто</span>
        `;
  } else {
    korzinaList.forEach(function (item, i) {
      displayKorzinaItem = `
            <div class="korzinaItem">
                <div class="korzina_tovar_image_div">
                    <img src="images/covers/${item.img}.jfif" alt="tovar" class="korzina_tovar_image">
                </div>
                <h3 class="korzina_tovar_title">${item.title}</h3>
                <h4 class="korzina_tovar_description">${item.description}</h4>
                <h4 class="korzina_tovar_price">${item.price}$</h4>
                <span class="korzina_tovar_del" id="d_${i}" onclick="delFromKorzina(event)">&times;</span>
            </div>
            `;

      korzina.innerHTML += displayKorzinaItem;
    });
  }
}

/*----func----delFromKorzina------------------------*/

function delFromKorzina() {
  let itemId = event.target.getAttribute("id");
  if (korzinaList.length == 0) {
    korzinaList = [];
    korzinaCounter.classList.remove("active");
  } else {
    korzinaList.splice(itemId.replace(/\D/g, ""), 1);
  }
  itogoPriceCounter = 0;
  korzinaList.forEach(function (res) {
    itogoPriceCounter += res.price;
  });
  korzinaPage();
  displayKorzinaItems();
  korzinaCounter.innerHTML = korzinaList.length;
}

/*----func----clearKorzina------------------------*/

function clearKorzina() {
  itogoPriceCounter = 0;
  korzinaList = [];
  korzinaPage();
  displayKorzinaItems();
  korzinaCounter.innerHTML = korzinaList.length;
}

/*----func----korzinaPage------------------------*/

function korzinaPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="_container pa1_container">
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
}

/*----func----reviewsPage------------------------*/

function reviewsPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="_container pa1_container">
            <h2 class="tittle leftTxt">Отзывы</h2>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                </div>
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
}

/*----func----displayReviews------------------------*/

function displayReviews() {
    let displayReview = "";
    const reviews = document.querySelector(".swiper-wrapper");

    reviewsList.forEach(function (review, i) {
    displayReview = `
        <div class="swiper-slide review" id="review_${i}">
            <img src="images/reviews/${review.img}") class="review_image">
            <h5 class="review_autor">${review.name}</h5>
            <p class="review_message">${review.message}</p>
        </div>
        `;

    reviews.innerHTML += displayReview;
    });
}

/*----func----aboutPage------------------------*/

function aboutPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="_container pa1_container">
            <h2 class="tittle leftTxt">О нас</h2>
            <span class="aboutSpan">Ну и что я здесь должен был написать?<br>Я бедный студент...</span>
        </div>
    </div>
    `;
}

/*----func----logInMenu------------------------*/

function logInMenu() {
  wrapper.classList.add("lock");
  logInPopup.classList.add("active");
}

/*----func----logIn------------------------*/

function logIn() {
  let login = document.getElementById("login"),
    password = document.getElementById("password");

  /*----сброс--------------------*/
  function reset() {
    login.value = "";
    password.value = "";
    wrapper.classList.remove("lock");
    logInPopup.classList.toggle("active");
  }

  /*----валидация--------------------*/
  if (Boolean(login.value) == false || Boolean(password.value) == false) {
    alert("Все поля должны быть заполнены.");
    reset();
    return;
  }
  if (login.value.length < 6) {
    alert("Логин должен состоять как минимум из 6 символов.");
    reset();
    return;
  }
  if (password.value.length < 8) {
    alert("Пароль должен состоять как минимум из 8 символов.");
    reset();
    return;
  }
  if (Boolean(login.value) && Boolean(password.value)) {
    alert(`${login.value}, добро пожаловать!`);
    logInName.innerHTML = login.value;
    userName.innerHTML = login.value;
    logInName.classList.add("active");
    logInBtn.classList.add("hidden");
    reset();
    return;
  }
}

/*----func----logOutMenu------------------------*/

function logOutMenu() {
  logOutPopup.classList.add("active");
  wrapper.classList.add("lock");
}

/*----func----logOut------------------------*/

function logOut() {
  logInName.classList.remove("active");
  logInBtn.classList.remove("hidden");
  logOutPopup.classList.remove("active");
  wrapper.classList.remove("lock");
}

/*----func----logInBack------------------------*/

function logInBack() {
  wrapper.classList.remove("lock");
  logInPopup.classList.remove("active");
}

/*----func----logOutBack------------------------*/

function logOutBack() {
  logOutPopup.classList.remove("active");
  wrapper.classList.remove("lock");
}

/*----btnsListen----------------------------*/

logoBtn.addEventListener("click", function () {
  pageCleaner();
  mainPage();
});

catalogBtn.addEventListener("click", function () {
  pageCleaner();
  catalogPage();
  displayTovars();
});

addBtn.addEventListener("click", function () {
  pageCleaner();
  addPage();
});

korzinaBtn.addEventListener("click", function () {
  pageCleaner();
  korzinaPage();
  displayKorzinaItems();
});

reviewsBtn.addEventListener("click", function () {
  reviewsPage();
  displayReviews();
});

aboutBtn.addEventListener("click", function () {
  pageCleaner();
  aboutPage();
});

logInBtn.addEventListener("click", function () {
  logInMenu();
});

logInPopupBtn.addEventListener("click", function () {
  logIn();
});

themeBtn.addEventListener("click", function () {
  theme();
});

logInName.addEventListener("click", function () {
  logOutMenu();
});

logOutPopupBtn.addEventListener("click", function () {
  logOut();
});

logInPopupBackBtn.addEventListener("click", function () {
  logInBack();
});

logOutPopupBackBtn.addEventListener("click", function () {
  logOutBack();
});

/*----basic----------------------------*/

mainPage();
displayTovars();
