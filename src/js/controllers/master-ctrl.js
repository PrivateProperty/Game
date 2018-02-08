/**
 * Master Controller
 */

angular.module('RDash')
    .controller('MasterCtrl', ['$scope', '$cookieStore', MasterCtrl])
    .controller('MapCtrl', ['$scope', 'gameService', MapCtrl])
    .controller('TableCtrl', ['$scope', 'gameService', TableCtrl])
    .service('gameService', myService);

function myService() {

    this.cityComputerAll = ['Аахен',
        'Абу-Даби',
        'Агадир',
        'Агиос-Николаос',
        'Аделаида',
        'Аджман',
        'Айя-Напа',
        'Акаба',
        'Акапулько',
        'Аккра',
        'Аланья',
        'Албена',
        'Александрия',
        'Алеппо',
        'Алжир',
        'Аликанте',
        'Алма-Ата (Алматы)',
        'Альмерия',
        'Амальфи',
        'Амман',
        'Амстердам',
        'Андора-Ла-Велья',
        'Анкара',
        'Анкона',
        'Анкоридж',
        'Анталия',
        'Антверпен',
        'Антиб',
        'Багдад',
        'Бад-Гаштайн',
        'Бад-Хофгаштайн',
        'Базель',
        'Баку',
        'Балчик',
        'Бангалор',
        'Бангкок',
        'Банско',
        'Бар',
        'Бари',
        'Барселона',
        'Бейрут',
        'Белград',
        'Белек',
        'Белосток',
        'Белфаст',
        'Бенидорм',
        'Берген',
        'Берлин',
        'Берн',
        'Бильбао',
        'Бирмингем',
        'Бишкек',
        'Бланес',
        'Богота',
        'Бодрум',
        'Бока-Чика',
        'Болонья',
        'Бонн',
        'Бордо',
        'Боровец',
        'Бостон',
        'Бразилиа',
        'Братислава',
        'Брашов',
        'Бремен',
        'Брест',
        'Брисбен',
        'Бристоль',
        'Брно',
        'Брюгге',
        'Брюссель',
        'Будапешт',
        'Будва',
        'Ванкувер',
        'Варадеро',
        'Варна',
        'Варшава',
        'Вашингтон',
        'Веллингтон',
        'Вена',
        'Венеция',
        'Верона',
        'Вильнюс',
        'Виннипег',
        'Висбаден',
        'Вифлеем',
        'Вроцлав',
        'Вьентьян',
        'Гент',
        'Генуя',
        'Герат',
        'Гетеборг',
        'Глазго',
        'Гоа',
        'Гонконг',
        'Гонолулу',
        'Гранада',
        'Гран-Канария',
        'Грац',
        'Гренобль',
        'Гуантанамо',
        'Гуанчжоу',
        'Гудаута',
        'Гулрыпш',
        'Далянь',
        'Дамаск',
        'Дананг',
        'Дар-эс-Салам',
        'Дахаб',
        'Дебрецен',
        'Дели',
        'Денпасар',
        'Детройт',
        'Джайпур',
        'Джакарта',
        'Джерба',
        'Джидда',
        'Дидим',
        'Днепропетровск',
        'Донецк',
        'Елените',
        'Ереван',
        'Загреб',
        'Задар',
        'Закинтос',
        'Закопане',
        'Зальбах-Хинтерглем',
        'Зальцбург',
        'Запорожье',
        'Зеефельд',
        'Зёльден',
        'Золотые Пески',
        'Иерусалим',
        'Измир',
        'Иматра',
        'Инсбрук',
        'Ираклион',
        'Исламабад',
        'Йокогама',
        'Йоханнесбург',
        'Кабул',
        'Кавала',
        'Кадис',
        'Каир',
        'Калгари',
        'Калифея',
        'Калькутта',
        'Кальяри',
        'Канберра',
        'Кандагар',
        'Канкун',
        'Канны',
        'Каппадокия',
        'Капри',
        'Каракас',
        'Карачи',
        'Карловы Вары',
        'Карлсруэ',
        'Касабланка',
        'Катания',
        'Кейптаун',
        'Кельн',
        'Кемер',
        'Керкира',
        'Киев',
        'Кито',
        'Китцбюэль',
        'Кишинев',
        'Клагенфурт',
        'Колимбия',
        'Лагос',
        'Лангкави',
        'Лансароте',
        'Ла-Пас',
        'Ла-Пинеда',
        'Ларнака',
        'Лас-Вегас',
        'Лас-Пальмас-де-Гран-Канария',
        'Лассити',
        'Лахти',
        'Лейпциг',
        'Ленгенфельд',
        'Ливерпуль',
        'Ливорно',
        'Лидс',
        'Лилль',
        'Лима',
        'Лимассол',
        'Линдос',
        'Линц',
        'Лион',
        'Лиссабон',
        'Ллорет-де-Мар',
        'Лодзь',
        'Лозанна',
        'Лондон',
        'Лос-Анджелес',
        'Луанда',
        'Лугано',
        'Луганск',
        'Майами',
        'Майорка',
        'Майрхофен',
        'Макади Бей',
        'Малага',
        'Мале',
        'Мальме',
        'Манавгат',
        'Манаус',
        'Манила',
        'Манчестер',
        'Марианские Лазни',
        'Марса-Алам',
        'Марсель',
        'Маскат',
        'Махдия',
        'Махмутлар',
        'Медина',
        'Мекка',
        'Мельбурн',
        'Мерида',
        'Мессина',
        'Мехико',
        'Мешхед',
        'Мииму атолл',
        'Милан',
        'Минск',
        'Мишкольц',
        'Нанкин',
        'Нант',
        'Нассау',
        'Неаполь',
        'Несебр',
        'Нетания',
        'Никосия',
        'Ницца',
        'Нови-Сад',
        'Новый Афон',
        'Новый Орлеан',
        'Нойштифт',
        'Нувейба',
        'Нью-Йорк',
        'Оломоуц',
        'Ольборг',
        'Ордино-Аркалис',
        'Орлеан',
        'Орхус',
        'Осака',
        'Осло',
        'Острава',
        'Оттава',
        'Оулу',
        'Охрид',
        'Очамчира',
        'Памуккале',
        'Панама',
        'Пардубице',
        'Париж',
        'Патры',
        'Паттайя',
        'Пафос',
        'Пекин',
        'Пелопоннес',
        'Пенанг',
        'Перт',
        'Пескара',
        'Пиза',
        'Пицунда',
        'Плайя-дель-Кармен',
        'Пловдив',
        'Пльзень',
        'Пномпень',
        'Раа атолл',
        'Рабат',
        'Равда',
        'Регенсбург',
        'Рейкьявик',
        'Реймс',
        'Ресифи',
        'Ретимно',
        'Рига',
        'Риека',
        'Рим',
        'Римини',
        'Рио-де-Жанейро',
        'Рованиеми',
        'Родос',
        'Росток',
        'Роттердам',
        'Санта-Круз-де-Тенерифе',
        'Санто-Доминго',
        'Сантьяго',
        'Сантьяго-де-Куба',
        'Сан-Франциско',
        'Санья',
        'Саппоро',
        'Сарагоса',
        'Сарыкамыш',
        'Сассари',
        'Сафага',
        'Святой Влас',
        'Себу',
        'Севастополь',
        'Севилья',
        'Сеул',
        'Сиэтл',
        'Тайбэй',
        'Таллин',
        'Тампере',
        'Таранто',
        'Таррагона',
        'Ташкент',
        'Тбилиси',
        'Тебриз',
        'Тегеран',
        'Тель-Авив',
        'Тенерифе',
        'Теплице',
        'Тиват',
        'Тирана',
        'Токио',
        'Томар',
        'Торонто',
        'Тосса-де-Мар',
        'Трабзон',
        'Триест',
        'Улан-Батор',
        'Урумчи',
        'Утрехт',
        'Ухань',
        'Фаафи атолл',
        'Фалираки',
        'Фамагуста',
        'Фанес',
        'Фантхьет',
        'Фару',
        'Фетхие',
        'Филадельфия',
        'Флоренция',
        'Фрайбург',
        'Франкфурт-на-Майне',
        'Фрипорт',
        'Хаа Алифу атолл',
        'Хайфа',
        'Хаммамет',
        'Ханой',
        'Ханья',
        'Харбин',
        'Харьков',
        'Хевиз',
        'Хельсинки',
        'Херсониссос',
        'Хошимин',
        'Хуа Хин',
        'Хургада',
        'Хьюстон',
        'Хэйхэ',
        'Цель-ам-Зее',
        'Церматт',
        'Цюрих',
        'Ченнаи',
        'Чешме',
        'Чиангмай',
        'Чикаго',
        'Чунцин',
        'Шанхай',
        'Шарджа',
        'Шарм-эль-Шейх',
        'Шеньжень',
        'Шеньян',
        'Штутгарт',
        'Щецин',
        'Эдинбург',
        'Эдмонтон',
        'Эйлат',
        'Эльблонг',
        'Эль-Гуна',
        'Эль-Пас-де-ла-Каса',
        'Эрзурум',
        'Эр-Рияд',
        'Ялиссос',
        'Янгон',
        'Яссы'];
    this.cityComputer = [];
    this.cityFromUser = [];
    this.cityAll = [''];
    this.won = "Текущий результат";
    this.lastCity = '';
    this.setTimer = "";
    this.warn = ""
}

function TableCtrl($scope, gameService) {
    $scope.gameService = gameService;
    $scope.hide = function () {
        if (gameService.won == "Текущий результат") return true
    };
    $scope.reStart = function () {
        window.location.reload();
        window.location.href = '#/'
    }
}

function MapCtrl($scope, gameService) {

    $scope.gameService = gameService;
    $scope.map = ymaps.ready(function () {

        //Узнавать координаты
        /*  var myGeocoder = ymaps.geocode(cityX);
         myGeocoder.then(
         function (res) {
         console.log('Координаты объекта :' + res.geoObjects.get(0).geometry.getCoordinates());
         },
         function (err) {
         alert('Ошибка');
         }
         );
         console.log(myGeocoder);
         */

        // В функцию поступает пространство имен, которое содержит все запрощенные при инициализации модули.
        var myMap = new ymaps.Map('map', {
            center: [30, 20],
            zoom: 2
            // В данном примере карта создается без контролов, так как те не были загружены при инициализации API.

        });
        myMap.behaviors.disable('scrollZoom');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
    });

    $scope.game = function (fromUser) {
        if (gameService.cityAll[1]) {
            var fromComp = gameService.cityAll[gameService.cityAll.length - 1].slice(-1);
            if (fromComp == "ъ" || fromComp == "ь" || fromComp == "ы") {
                fromComp = gameService.cityAll[gameService.cityAll.length - 1].slice(-2, -1)
            }
            if (fromUser.slice(0, 1).toLowerCase() !== fromComp) {
                return alert(" Введите город на букву " + fromComp.toUpperCase())
            }
        }
        gameService.cityFromUser.push(fromUser);
        gameService.cityAll.push(fromUser);
        clearTimeout(gameService.setTimer);
        $scope.compucterStep(fromUser);
    };

    $scope.isCyrillic = function (text) {
        return /[а-я]/i.test(text);
    };

    $scope.checkCity = function (cityX) {
        if(cityX.slice(0, 1) === cityX.slice(0, 1).toLowerCase()){
            alert("Введите город с ЗАГЛАВНОЙ буквы")
       }else{
            if ($scope.isCyrillic(cityX)) {
                if (gameService.cityAll.indexOf(cityX) > 0) {
                    alert('Такой город уже был, введите другой')
                } else {
                    $scope.game(cityX);
                    $scope.reset();
                }
            } else {
                alert(" Введите город на русском языке ")
            }
        }
    };

    $scope.reset = function () {
        $scope.FromUser = '';
    };

    $scope.hide = function () {
        if (gameService.won != "Текущий результат") return true
    };

    $scope.compucterStep = function (fromUser) {
        var x = fromUser.slice(-1).toLowerCase();
        if (x == "ъ" || x == "ь" || x == "ы") {
            x = fromUser.slice(-2, -1).toLowerCase()
        }
        for (var i = 0; i < gameService.cityComputerAll.length; i++) {
            if (x === gameService.cityComputerAll[i].slice(0, 1).toLowerCase()) {
                gameService.cityComputer.push(gameService.cityComputerAll[i]);
                gameService.cityAll.push(gameService.cityComputerAll[i]);
                gameService.cityComputerAll.splice(i, 1);
                gameService.lastCity =  gameService.cityAll[gameService.cityAll.length - 1];
                gameService.warn = " У Вас есть 1 минута. Текущий город  ";
                gameService.setTimer = setTimeout(function () {
                    gameService.won = ' В следующий раз повезет. Попробуй снова ';
                    $scope.hide();
                    window.location.href = '#/tables'
                }, 60000);
                break
            } else if (!gameService.cityComputerAll[i + 1]) {
                gameService.won = "Поздравляем!!! Вы победили!";
                clearTimeout(gameService.setTimer);
                $scope.hide();
                window.location.href = '#/tables'
            }
        }
    };
}

function MasterCtrl($scope, $cookieStore) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function () {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function (newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = !$cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function () {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function () {
        $scope.$apply();
    };
}