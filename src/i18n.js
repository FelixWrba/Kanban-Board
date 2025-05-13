import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import de from "./locales/de.json";
import sl from "./locales/sl.json";

const messages = {
  english: en,
  german: de,
  slang: sl,
};

const i18n = createI18n({
  legacy: false,
  locale: "english",
  fallbackLocale: "english",
  messages,
});

export default i18n;
