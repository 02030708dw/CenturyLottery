import { createI18n } from 'vue-i18n'
import { cn } from './cn.js'
import { en } from './en.js'

const messages = { cn, en }
const LANG_KEY = 'LANG'

const getDefaultLocale = () => {
    const localLang = localStorage.getItem(LANG_KEY)
    if (localLang && messages[localLang]) {
        return localLang
    }
    return 'cn'
}

const i18n = createI18n({
    legacy: false,
    messages,
    locale: getDefaultLocale(),
    fallbackLocale: 'cn',
    fallbackWarn: false,
    missingWarn: false,
})

export default i18n
