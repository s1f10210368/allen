import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessageRoleEnum,
} from 'openai'

const apiKey = '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' // 提供いただいたAPIキー

const configuration = new Configuration({
  apiKey,
  organization: 'oorg-XjG23lU49K0TAYhXABzY9Z0N',
})
const openai = new OpenAIApi(configuration)

const models = {
  gpt3_5: 'gpt-3.5-turbo-0301',
}

export const chatGpt = async (content: string) => {
  console.log('GPT models', models)
  const res = await openai.createChatCompletion({
    model: models.gpt3_5,
    messages: [{ role: ChatCompletionRequestMessageRoleEnum.User, content }],
  })
  return res.data.choices[0].message?.content
}

/*const content = '世界のなかで大きい山を順番に5個出力してください'
  main(content)
  */
