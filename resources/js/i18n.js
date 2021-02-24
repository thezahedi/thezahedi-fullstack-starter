import Vue from "vue";
import i18n from "vue-i18n";

Vue.use(i18n);

function loadLocaleMessages() {
    const locales = require.context(
        "./locales",
        true,
        /[A-Za-z0-9-_,\s]+\.json$/i
    );
    const messages = {};
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i);
        if (matched && matched.length > 1) {
            const locale = matched[1];
            messages[locale] = locales(key);
        }
    });
    return messages;
}

export default new i18n({
    locale: process.env.VUE_APP_I18N_LOCALE || "fa",
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "fa",
    messages: loadLocaleMessages(),
    silentTranslationWarn: true,
    silentFallbackWarn: true
});
