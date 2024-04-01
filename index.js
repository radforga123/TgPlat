const TelegramBotAPI = require("node-telegram-bot-api/lib/telegram");

const token = "6401012791:AAGOExzVbKYQClS3E68mZVJL7Zf-5AaRKkg";

const bot = new TelegramBotAPI(token, { polling: true });

const chats = {};
const questions = {};
answCount = 0;

const Ques1Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "t1",
        },
      ],
      [
        {
          text: "2",
          callback_data: "f1",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f1",
        },
      ],
    ],
  }),
};

const Ques2Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f2",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t2",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f2",
        },
      ],
    ],
  }),
};

const Ques3Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "t3",
        },
      ],
      [
        {
          text: "2",
          callback_data: "f3",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f3",
        },
      ],
    ],
  }),
};

const Ques4Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f4",
        },
      ],
      [
        {
          text: "2",
          callback_data: "f4",
        },
      ],
      [
        {
          text: "3",
          callback_data: "t4",
        },
      ],
    ],
  }),
};

const Ques5Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f5",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t5",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f5",
        },
      ],
    ],
  }),
};

const Ques6Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f6",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t6",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f6",
        },
      ],
    ],
  }),
};

const Ques7Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f7",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t7",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f7",
        },
      ],
    ],
  }),
};

const Ques8Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f8",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t8",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f8",
        },
      ],
    ],
  }),
};

const Ques9Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f9",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t9",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f9",
        },
      ],
    ],
  }),
};

const Ques10Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "1",
          callback_data: "f10",
        },
      ],
      [
        {
          text: "2",
          callback_data: "t10",
        },
      ],
      [
        {
          text: "3",
          callback_data: "f10",
        },
      ],
    ],
  }),
};

const ItogOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: "Подвести итоги", callback_data: "1" }]],
  }),
};

ResetTest = (ChatID) => {
  bot.sendMessage(ChatID, "Reset");
  questions[ChatID] = 1;
};

Question1 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "1 В какой графе декларации на товары осуществляется исчисление таможенных платежей?\n1.	в графе 47\n2.	в графе 54\n3.	в графе В",
    Ques1Options
  );
  questions[ChatID] = 1;
};

Question2 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "2 3%, но не менее 1 евро за кг - это\n1.	специфическая ставка пошлины\n2.	комбинированная ставка пошлины\n3.	адвалорная ставка пошлины",
    Ques2Options
  );
  questions[ChatID] = 2;
};

Question3 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "3 Каким законодательством устанавливаются ставки ввозных таможенных пошлин?\n1.	решением Комиссии ЕАЭС\n2.	законодательством государства-члена Союза\n3.	Таможенным кодексом ЕАЭС",
    Ques3Options
  );
  questions[ChatID] = 3;
};

Question4 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "4 При исчислении таможенных пошлин, налогов, специальных, антидемпинговых, компенсационных пошлин в таможенной декларации пересчет иностранной валюты в рубли производится по курсу ЦБ, действующему на день:\n1.	ввоза товаров на таможенную территорию ЕАЭС\n2.	помещения товара на СВХ\n3.	регистрации таможенной декларации таможенным органом",
    Ques4Options
  );
  questions[ChatID] = 4;
};

Question5 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "5 Каким законодательством устанавливаются ставки вывозных таможенных пошлин? \n1.	решением Комиссии ЕАЭС\n2.	законодательством государства-члена Союза\n3.	Таможенным кодексом ЕАЭС",
    Ques5Options
  );
  questions[ChatID] = 5;
};

Question6 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "6 В Российской Федерации не применяются:\n1.	антидемпинговые пошлины\n2.	транзитные пошлины\n3.	сезонные пошлины",
    Ques6Options
  );
  questions[ChatID] = 6;
};

Question7 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "7 При помещении товаров под таможенную процедуру выпуск для внутреннего потребления ставка НДС в размере 10% применяется в отношении:\n1.	нефтепродуктов\n2.	товаров детского ассортимента\n3.	алкогольной продукции",
    Ques7Options
  );
  questions[ChatID] = 7;
};

Question8 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "8 К таможенным сборам не относятся:\n1.	таможенные сборы за таможенное сопровождение\n2.	таможенные сборы за выдачу лицензии таможенными органами\n3.	таможенные сборы за хранение",
    Ques8Options
  );
  questions[ChatID] = 8;
};

Question9 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "9 Ставки таможенных сборов за осуществление таможенного сопровождения морского, речного или воздушного судна равны:\n1.	20000 рублей за каждые 100 километров\n2.	20000 рублей независимо от расстояния перемещения\n3.	2000 рублей за каждые 100 километров",
    Ques9Options
  );
  questions[ChatID] = 9;
};

Question10 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "10 Таможенные сборы за таможенные операции исчисляет:\n1.	таможенный орган\n2.	декларант\n3.	физическое лицо",
    Ques10Options
  );
  questions[ChatID] = 10;
};

Q11 = (ChatID) => {
  bot.sendMessage(ChatID, "Поздравляю,можно подвести итоги", ItogOptions);
  questions[ChatID] = 11;
};

Itog = (ChatID) => {
  bot.sendMessage(
    ChatID,
    `Поздравляем с проходением теста. Ваш результат ${chats[ChatID]} баллов из 20`
  );
};
bot.setMyCommands([
  { command: "/start", description: "Начальное приветсвие" },
  { command: "/test", description: "Запустить тест по международному праву" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const ChatID = msg.chat.id;
  if (text == "/start") {
    return bot.sendMessage(
      ChatID,
      `Здравствуйте, ${msg.from.first_name}. Добро пожаловать в бот-тест по предмету "Таможенные платежи".`
    );
  }
  if (text == "/test") {
    return Question1(ChatID);
  }

  if (text == "/reset") {
    return ResetTest(ChatID);
  }
});

bot.on("callback_query", async (msg) => {
  const data = msg.data;
  const ChatID = msg.message.chat.id;
  if (questions[ChatID] == 1) {
    if (data == "t1") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 1");
      chats[ChatID] = 2;
      return setTimeout(() => {
        Question2(ChatID);
      }, 2000);
    } else if (data == "f1") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      chats[ChatID] = 0;
      return setTimeout(() => {
        Question2(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 2) {
    if (data == "t2") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 2");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question3(ChatID);
      }, 2000);
    } else if (data == "f2") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question3(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 3) {
    if (data == "t3") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 1");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question4(ChatID);
      }, 2000);
    } else if (data == "f3") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question4(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 4) {
    if (data == "t4") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 3");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question5(ChatID);
      }, 2000);
    } else if (data == "f4") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question5(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 5) {
    if (data == "t5") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 3");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question6(ChatID);
      }, 2000);
    } else if (data == "f5") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question6(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 6) {
    if (data == "t6") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 2");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question7(ChatID);
      }, 2000);
    } else if (data == "f6") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question7(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 7) {
    if (data == "t7") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 2");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question8(ChatID);
      }, 2000);
    } else if (data == "f7") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question8(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 8) {
    if (data == "t8") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 2");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question9(ChatID);
      }, 2000);
    } else if (data == "f8") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question9(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 9) {
    if (data == "t9") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 2");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question10(ChatID);
      }, 2000);
    } else if (data == "f9") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question10(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 10) {
    if (data == "t10") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - 2");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Q11(ChatID);
      }, 2000);
    } else if (data == "f10") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");

      return setTimeout(() => {
        Q11(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 11 && data == 1) {
    return Itog(ChatID);
  }
});
