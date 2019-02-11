'use strict';

const Telegram = require('telegram-node-bot'),
    PersistentMemoryStorage = require('./adapters/PersistentMemoryStorage'),
    storage = new PersistentMemoryStorage(
        `${__dirname}/data/userStorage.json`,
        `${__dirname}/data/chatStorage.json`
    ),
    tg = new Telegram.Telegram('437673534:AAGMa8ZRuN3PwaSPnLjNuPYBb-ISyKXSC94', {
        storage: storage
    });

const TodoController = require('./controllers/todo')
    , OtherwiseController = require('./controllers/otherwise');

const todoCtrl = new TodoController();

tg.router.when(new Telegram.TextCommand('/time', 'sanctionTime'), todoCtrl)
    .when(new Telegram.TextCommand('/info', 'sanctionInfo'), todoCtrl)
    .when(new Telegram.TextCommand('/hope', 'hopeReminder'), todoCtrl)
    .otherwise(new OtherwiseController());

function exitHandler(exitCode) {
    storage.flush();
    process.exit(exitCode);
}

process.on('SIGINT', exitHandler.bind(null, 0));
process.on('uncaughtException', exitHandler.bind(null, 1));
