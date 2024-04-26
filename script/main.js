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
  regPopupBtn = document.getElementById("regPopupBtn"),
  logInPopupBtn = document.getElementById("logInPopupBtn"),
  logInPopupBackBtn = document.getElementById("logInPopupBackBtn"),
  logOutPopup = document.getElementById("logOutPopup"),
  logOutPopupBtn = document.getElementById("logOutPopupBtn"),
  logOutPopupBackBtn = document.getElementById("logOutPopupBackBtn"),
  regMode = document.querySelector(".regMode"),
  logMode = document.querySelector(".logMode"),
  korzinaCounter = document.querySelector(".korzinaCounter");

let itogoPriceCounter = 0,
  themeImg = document.getElementById("themeImg"),
  userName = document.getElementById("userName"),
  mainFilter = 'filterAll';

/*----tovarList----------------------------*/

let tovarList = [
  {
    title: "test drive: archive",
    description: "LILDRUGHILL",
    price: 25,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fcf79a509e5d49e423cb000258fd69ccf.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "PHYSICAL PAIN",
    description: "LOVV66",
    price: 20,
    img: "https://images.genius.com/8d03ddb6670a1fbf2e39c2dd4387db1c.300x300x1.png",
    lang: "ru"
  },
  {
    title: "DAMN.",
    description: "Kendrick Lamar",
    price: 50,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ff3f77222e1b615e0a10354ea6282ff22.1000x1000x1.png",
    lang: "en"
  },
  {
    title: "WILD EA$T",
    description: "SALUKI",
    price: 50,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fb487fcefdace88d0cf74cfc770cd36ae.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "Life of a DON",
    description: "Don Toliver",
    price: 30,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F4001a0283899911145eb13d3857b8cb3.1000x1000x1.png",
    lang: "en"
  },
  {
    title: "KRISTINA",
    description: "LIL KRYSTALLL",
    price: 30,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F711e4a65113312a86fe551ffcbb34b1b.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "Sosa Muzik",
    description: "Платина",
    price: 30,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F6fa2a1df192bb6b8deee5c45bef2188e.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "Certified Lover Boy",
    description: "Drake",
    price: 35,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ffa02d8bc4c7ee74b5a1408c2be032fea.1000x1000x1.png",
    lang: "en"
  },
  {
    title: "All Babies Fly",
    description: "LILDRUGHILL",
    price: 30,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F887904ba378e1843164a6a9aa0096136.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "Tsukuyomi Dream",
    description: "ROCKET",
    price: 20,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F909b5b9875c5ab3e44b1f0d04c67bf37.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "Heroes & Villains",
    description: "Metro Boomin",
    price: 50,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F38a14946958b6dd834a697c217d89488.1000x1000x1.jpg",
    lang: "en"
  },
  {
    title: "glow",
    description: "LILDURGHILL",
    price: 25,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F2a7e62006b809ff20c9a73b44ebb2fb9.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "PHILARMONIA",
    description: "PHARAOH",
    price: 50,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fabf929ba95ac8de8f8fd67f6e6580611.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "23",
    description: "Central Cee",
    price: 35,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fe2e71c4727c43b794627d6f6e31b603a.1000x1000x1.png",
    lang: "en"
  },
  {
    title: "AA LANGUAGE",
    description: "aarne",
    price: 40,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F977075534279f0726fac84beebeb9ccb.1000x1000x1.png",
    lang: "ru"
  },
  {
    title: "PLAYERS CLUB 2",
    description: "OBLADAET",
    price: 30,
    img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F89d85810150a9bf1acd23ffaa149a5e8.1000x1000x1.png",
    lang: "ru"
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
    img: "https://i.pinimg.com/564x/a1/1d/f8/a11df85aa8e15f9e6bc05b9aedfb8046.jpg",
  },
  {
    name: "Роберт",
    message: "ура",
    img: "https://i.pinimg.com/564x/a5/c2/b8/a5c2b8f650cb989f86bfad50f7ad8e62.jpg",
  },
  {
    name: "Аня",
    message:
      "Большое спасибо! Наконецто могу послушать Анну Асти на виниле! Лучший подарок на день рождения!",
    img: "https://i.pinimg.com/564x/9f/49/f4/9f49f4a5330b92746648f88ff2d2f0e3.jpg",
  },
  {
    name: "Антон",
    message:
      "Подарили отцу Басту на виниле. Рад! 5 звезд, буду заказывать еще!",
    img: "https://www.thissongslaps.com/wp-content/uploads/2015/06/pegboard-nerds-the-wall-1.jpg",
  },
  {
    name: "Егор",
    message: "Плюс один диск в коллецию, класс!",
    img: "https://i.pinimg.com/564x/0e/c1/06/0ec10693225abd978966c3c4272a0c7e.jpg",
  },
  {
    name: "Айнур",
    message: "Товар пришел целым и не вредимым. Респект!",
    img: "https://i.pinimg.com/564x/9b/a0/af/9ba0af5d4e47d13498923c49da86c21d.jpg",
  },
];

/*----rewiesList----------------------------*/

let usersList = {
  "l1lines": "qwerty123", 
  "ronaldo777": "messiNoob"
};

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
};

/*----func----pageCleaner------------------------*/

function pageCleaner() {
  mainContent.innerHTML = "";
};

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
};

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
};

/*----func----catalogPage------------------------*/

function catalogPage() {
  mainContent.innerHTML = `
    <div class="pa1">
        <div class="_container pa1_container">
            <h2 class="tittle leftTxt">Каталог</h2>
            <div class="catalog_header">
                <h2 class="tittle leftTxt">Альбомы</h2>
                <div class="filters" id="filters">
                  <div class="filter" id="filterAll">All</div>
                  <div class="filter" id="filterRu">Ru</div>
                    <div class="filter" id="filterEn">En</div>
                    <div class="filter" id="filterSmall">до 25$</div>
                    <div class="filter" id="filterBig">от 25$</div>
                </div>
            </div>
            <div class="tovars">
            </div>
        </div>
    </div>
  `;
  document.getElementById(mainFilter).classList.add("active");
  const filters = document.getElementById("filters");
  filters.addEventListener("click", (e) => {
    let clickedFilter = e.target.getAttribute("id");
    if (clickedFilter == "filterAll" || clickedFilter == "filterRu" || clickedFilter == "filterEn" || clickedFilter == "filterSmall" || clickedFilter == "filterBig") {
      mainFilter = clickedFilter;
      document.getElementById("filterAll").classList.remove("active");
      document.getElementById("filterRu").classList.remove("active");
      document.getElementById("filterEn").classList.remove("active");
      document.getElementById("filterSmall").classList.remove("active");
      document.getElementById("filterBig").classList.remove("active");
      document.getElementById(mainFilter).classList.add("active");
      displayTovars();
    }
  });
};

/*----func----displayTovars------------------------*/

function displayTovars() {
  let displayTovar = "";
  const tovars = document.querySelector(".tovars");

  if (tovarList.length === 0) {
    document.getElementsByClassName("pa1_container").innerHTML += ``;
  }
  tovars.innerHTML = "";
  tovarList.forEach(function (item, i) {
    displayTovar = `
        <div class="tovar ${item.lang}" id="item_${i}">
            <img src=${item.img} alt="tovar" class="tovar_image">
            <h4 class="tovar_title">${item.title}</h4>
            <span class="tovar_description">${item.description}</span>
            <span class="tovar_price">${item.price}$</span>
            <button class="tovar_btn" id="m_${i}" onclick="addToKorzina(event)">В корзину</button>
        </div>
        `;
    if (mainFilter == "filterAll") {
      tovars.innerHTML += displayTovar;    
    }
    else if (mainFilter == "filterRu") {
      if (item.lang == "ru") {
        tovars.innerHTML += displayTovar; 
      }
    }
    else if (mainFilter == "filterEn") {
      if (item.lang == "en") {
        tovars.innerHTML += displayTovar; 
      }
    }
    else if (mainFilter == "filterSmall") {
      if (item.price <= 25) {
        tovars.innerHTML += displayTovar; 
      }
    }
    else if (mainFilter == "filterBig") {
      if (item.price > 25) {
        tovars.innerHTML += displayTovar; 
      }
    }
  });
};

/*----func----addNewAlbum------------------------*/

function addNewAlbum() {  
  const albumTitle = document.getElementById("albumTitle"),
    albumDescription = document.getElementById("albumDescription"),
    albumPrice = document.getElementById("albumPrice"),
    albumLang = document.querySelector('input[name="lang"]:checked');

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
    img: "https://avatars.mds.yandex.net/i?id=241ddc9de18088109ae647e2a00cce83087e871e-7755287-images-thumbs&n=13",
    lang: albumLang.value
  };

  tovarList.push(newAlbum);
  pageCleaner();
  catalogPage();
  displayTovars();
};

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
                  <div class="formLang">
                      <span class="addFormLabel">Язык</span>
                      <div class="langRadio">
                          <label for="radioRu">
                              <input type="radio" id="radioRu" name="lang" value="ru" checked />
                              Ru
                          </label>
                          <label for="radioEn">
                              <input type="radio" id="radioEn" name="lang" value="en" />
                              En
                          </label>
                      </div>
                  </div>
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
};

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
                    <img src=${item.img} alt="tovar" class="korzina_tovar_image">
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
};

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
};

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
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      220: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
};

/*----func----displayReviews------------------------*/

function displayReviews() {
  let displayReview = "";
  const reviews = document.querySelector(".swiper-wrapper");

  reviewsList.forEach(function (review, i) {
    displayReview = `
        <div class="swiper-slide review" id="review_${i}">
            <img src=${review.img} class="review_image">
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
        <div class="_container pa1_container">
            <h2 class="tittle leftTxt aboutTittle">О нас</h2>
            <p class="about_paragraph">Однажды в центре Санкт-Петербурга молодой человек по имени Тимур открыл небольшой магазин виниловых пластинок. 
                У Тимура всегда была страсть к музыке и уникальному звуку, который создают виниловые пластинки. Он верил, что душа музыки слышна более 
                четко на виниле, и он хотел поделиться этим опытом с другими.</p>
            <p class="about_paragraph">Магазин Тимура, который он назвал "Velo", располагался в уютном уголке города, окруженный кафе, 
                    книжными магазинами и художественными галереями. Магазин был убежищем для любителей музыки, местом, где они могли найти редкие и 
                    эксклюзивные виниловые пластинки различных жанров, включая джаз, рок, блюз и электронную музыку. Тимур тщательно отбирал свою коллекцию,
                    выбирая только лучшие пластинки со всего мира. Он также убедился в том, что предлагает широкий спектр цен, чтобы каждый мог позволить 
                себе насладиться магией винила.</p>
            <div class="about_gallery_one">
                <img src="images/aboutPage/5" alt="pic1" class="gallery_one_item1" />
                <img src="images/aboutPage/3" alt="pic2" class="gallery_one_item2" />
            </div>
            <p class="about_paragraph">Любовь Тимура к музыке и его преданность предоставлению лучшего возможного опыта для своих клиентов быстро сделали 
                Velo популярным местом назначения для любителей музыки в Санкт-Петербурге. Люди приезжали из всего города, чтобы просмотреть 
                обширную коллекцию магазина, поговорить с Тимуром о своих любимых артистах и послушать пластинки на высококачественной звуковой системе 
                магазина.</p>
            <p class="about_paragraph">Когда репутация магазина росла, Тимур начал проводить мероприятия и концерты, приглашая местных музыкантов 
                выступать и делиться своей музыкой с сообществом. Магазин стал центром живой музыки Санкт-Петербурга, местом, где артисты и поклонники 
                могли соединяться и делиться своей страстью к музыке.</p>
            <div class="about_gallery_two">
                <div class="gallery_two_item1"></div>
                <div class="gallery_two_item2"></div>
                <div class="gallery_two_item3"></div>
            </div>
            <p class="about_paragraph">Несмотря на вызовы, связанные с ведением малого бизнеса на конкурентном рынке, Тимур оставался преданным своему 
                видению создания пространства, где музыка могла быть празднована и наслаждаться во всей своей красе. Он продолжал расширять свою 
                коллекцию, добавляя новые и увлекательные пластинки на полки магазина, и никогда не снижал качества своих товаров или обслуживания.</p>
            <p class="about_paragraph">Годы проходили, и Velo стал уважаемым учреждением в Санкт-Петербурге, местом, где любители музыки могли 
                найти утешение и вдохновение. Магазин Тимура был свидетельством вечной силы музыки и уникального магии виниловых пластинок. 
                И пока существовали люди, ценящие красоту музыки, Макс знал, что Velo всегда будет иметь место в их сердцах.</p>
        </div>
    </div>
    `;
};

/*----func----logInMenu------------------------*/

function logInMenu() {
  wrapper.classList.add("lock");
  logInPopup.classList.add("active");
};

/*----func----reset----------------*/

function reset() {
  document.getElementById("login").value = "";
  document.getElementById("password").value  = "";
  wrapper.classList.remove("lock");
  logInPopup.classList.toggle("active");
};

/*----func----reg------------------------*/

function reg() {
  let login = document.getElementById("login").value.trim(),
    password = document.getElementById("password").value.trim();

  /*----валидация--------------------*/
  if (usersList[login] !== undefined) {
    alert("Пользователь с таким логином уже зарегистрирован на сайте.");
    reset();
    return;
  }
  if (Boolean(login) == false || Boolean(password) == false) {
    alert("Все поля должны быть заполнены.");
    reset();
    return;
  }
  if (login.length < 6) {
    alert("Логин должен состоять как минимум из 6 символов.");
    return;
  }
  if (password.length < 8) {
    alert("Пароль должен состоять как минимум из 8 символов.");
    return;
  }
  if (Boolean(login) && Boolean(password)) {
    alert(`${login}, вы зарегистрированы!`);
    usersList[login] = password;
    return;
  }
  
};

/*----func----logIn------------------------*/

function logIn() {
  let login = document.getElementById("login").value.trim(),
    password = document.getElementById("password").value.trim();

  if (usersList[login] == undefined) {
    alert(`Нету пользователя с логином ${login}!`);
    return;
  };
  if (usersList[login] !== undefined && usersList[login] !== password) {
    alert(`Неверный пароль!`);
    return;
  };
  if (usersList[login] !== undefined && usersList[login] == password) {
    alert(`${login}, добро пожаловать!`);
    logInName.innerHTML = login;
    userName.innerHTML = login;
    logInName.classList.add("active");
    logInBtn.classList.add("hidden");
    return;
  };
};

/*----func----logOutMenu------------------------*/

function logOutMenu() {
  logOutPopup.classList.add("active");
  wrapper.classList.add("lock");
};

/*----func----logOut------------------------*/

function logOut() {
  logInName.classList.remove("active");
  logInBtn.classList.remove("hidden");
  logOutPopup.classList.remove("active");
  wrapper.classList.remove("lock");
};

/*----func----logInBack------------------------*/

function logInBack() {
  wrapper.classList.remove("lock");
  logInPopup.classList.remove("active");
};

/*----func----logOutBack------------------------*/

function logOutBack() {
  logOutPopup.classList.remove("active");
  wrapper.classList.remove("lock");
};

/*----func----regModeActive------------------------*/

function regModeActive() {
  logMode.classList.remove("active");
  regMode.classList.add("active");
  logInPopupBtn.classList.add("hidden");
  regPopupBtn.classList.remove("hidden");  
};

/*----func----logModeActive------------------------*/

function logModeActive() {
  regMode.classList.remove("active");
  logMode.classList.add("active");
  regPopupBtn.classList.add("hidden");
  logInPopupBtn.classList.remove("hidden");
};

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

regPopupBtn.addEventListener("click", function () {
  reg();
  reset();
});

logInPopupBtn.addEventListener("click", function () {
  logIn();
  reset();
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

logOutPopupBackBtn.addEventListener("click", function () {
  logOutBack();
});

logInPopupBackBtn.addEventListener("click", function () {
  logInBack();
});

regMode.addEventListener("click", function() {
  regModeActive();
});

logMode.addEventListener("click", function() {
  logModeActive();
});

/*----basic----------------------------*/

mainPage();
displayTovars();