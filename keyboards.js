import Markup from 'telegraf/markup.js'
export function getMainMenu() {
    return Markup.keyboard([
        ['Каталог', 'Размерная сетка'],
        ['Доступные цвета древесины и ткани'],
        ['Связь с Менеджером']
    ]).resize().extra()
}
export const sizePriceKeyboard = Markup.inlineKeyboard([
    Markup.callbackButton('XS'),
    Markup.callbackButton('S'),
    Markup.callbackButton('M'),
    Markup.callbackButton('L'),
    Markup.callbackButton('XL')
], {columns: 5}).extra()