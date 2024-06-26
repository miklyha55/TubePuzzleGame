## Стартовый экран
Элементы:
* игровой фон
* текст с названием игры
* кнопка начала игры
Логика:
* при нажатии на кнопку происходит переход на сцену игрового уровня

## Игровой экран
Элементы:
* фоновое изображение
* игровое поле из труб и начальной и конечной точки
* опционально: таймер завершения уровня
Логика:
* При нажатии на трубе происходит ее поворот. 
* Если труба после поворота соединяется с соседними, то она может быть заполнена водой. 
* Если после поворота очередной трубы все трубы окажутся соединены между собой, уровень
считается пройденным и происходит переход на сцену завершения игры.

## Сцена завершения игры
Элементы:
* фоновое изображение
* текст сообщающий о победе (или поражении) игрока
* кнопка для перезапуска уровня
Логика:
*  при нажатии кнопки происходит перезапуск уровня
* опционально при желании можно реализовать сцену выбора разных уровней и в таком случае
после завершения одного уровня сделать переход на следующий.

## Доступные команды
| Команда | Описание |
|---------|----------|
| `npm install` | Установливает зависимости |
| `npm run start` | Запускает проект и открывает веб-сервер, и следит за изменениями |
| `npm run build` | Собирает бандл |

##  Используемые версии
* pixi 7.2.0
* tweedle.js 2.0.1