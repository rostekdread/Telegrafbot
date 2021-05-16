import express from 'express'
import { PORT, TOKEN } from './config.js'
import Telegraf from 'telegraf'
import { getMainMenu, sizePriceKeyboard } from './keyboards.js'


const app = express()
const bot = new Telegraf(TOKEN)

bot.start(ctx => {
    ctx.reply('Welcome, bro', getMainMenu())
})


bot.hears('Каталог', ctx => {
    ctx.replyWithPhoto(
        'https://akprod.i.etsystatic.com/21830356/r/il/c434dc/3092324609/il_794xN.3092324609_lqbi.jpg',
        {
            caption: 'У нас доступны следущие размеры. А также мы можем изготовить кроватку под ваш размер!'
        }
    )
})
bot.hears('Размерная сетка', ctx => {
    ctx.replyWithPhoto(
        'https://akprod.i.etsystatic.com/21830356/r/il/a9c22d/3044597628/il_794xN.3044597628_7s74.jpg',
        {
            caption: 'У нас доступны следущие размеры. А также мы можем изготовить кроватку под ваш размер!'
        }
    )
})

bot.hears('Доступные цвета древесины и ткани', ctx => {
    ctx.replyWithPhoto(
        'https://akprod.i.etsystatic.com/21830356/r/il/8f3081/3063449686/il_794xN.3063449686_n06u.jpg',
        {
            caption: 'У нас дуступно 5 цветов дерева и 21 цвет ткани!'
        }
    )
})

bot.hears('Связь с Менеджером', ctx => {
    ctx.reply ('Ожидайте в течении 5 минут вам ответит наш менеджер!')
})

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))