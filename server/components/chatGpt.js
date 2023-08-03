"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGpt = void 0;
const openai_1 = require("openai");
const apiKey = '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'; // 提供いただいたAPIキー
const configuration = new openai_1.Configuration({
    apiKey,
    organization: 'oorg-XjG23lU49K0TAYhXABzY9Z0N',
});
const openai = new openai_1.OpenAIApi(configuration);
const models = {
    gpt3_5: 'gpt-3.5-turbo-0301',
};
const chatGpt = async (content) => {
    var _a;
    console.log('GPT models', models);
    const res = await openai.createChatCompletion({
        model: models.gpt3_5,
        messages: [{ role: openai_1.ChatCompletionRequestMessageRoleEnum.User, content }],
    });
    return (_a = res.data.choices[0].message) === null || _a === void 0 ? void 0 : _a.content;
};
exports.chatGpt = chatGpt;
/*const content = '世界のなかで大きい山を順番に5個出力してください'
  main(content)
  */
