'use strict';

const Telegram = require('telegram-node-bot');

class TodoController extends Telegram.TelegramBaseController {
    timeHandler($) {
      var _initial = '2017-11-04T16:05:28.593Z';
      var fromTime = new Date(_initial);
      var toTime = new Date();
      var differenceTravel = toTime.getTime() - fromTime.getTime();
      var seconds = Math.floor((differenceTravel) / (1000));
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);


        $.sendMessage('Time since sanctions placed:\nSeconds: ' + seconds + '\nMinutes: ' + minutes + '\nHours: ' + hours + '\nDays: ' + days);
    }


    sanctionInfo($) {
            $.sendMessage("The sanctions were placed on Ashkan Bahadoran, on the 4th of November 2017 due to multiple cases of unjust treatment of the shabab and the unwillingness to send a simple selfie. The rules are simple, as soon as the shabab recieve a selfie, all sanctions will be removed.");

    }

    hopeHandler($) {

        $.sendPhoto("https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/330074_10150280852222916_1305977_o.jpg?oh=16afb9f53c7f71123e401fb6394877f4&oe=5A63CD84");
        $.sendMessage("We must accept finite disappointment, but never lose infinite hope.");
    }

    get routes() {
        return {
            'sanctionTime': 'timeHandler',
            'sanctionInfo': 'sanctionInfo',
            'hopeReminder': 'hopeHandler'
        };
    }

    _serializeList(todoList) {
        let serialized = '*Your Todos:*\n\n';
        todoList.forEach((t, i) => {
            serialized += `*${i}* - ${t}\n`;
        });
        return serialized;
    }
}

module.exports = TodoController;
