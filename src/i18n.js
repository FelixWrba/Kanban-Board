import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import de from "./locales/de.json";
import sl from "./locales/sl.json";

const messages = {
  english: en,
  german: de,
  slang: sl,
};

const preferences = JSON.parse(localStorage.getItem("preferences") || "{}");
const language =
  preferences.language || navigator.language === "de-DE" ? "german" : "english";

const i18n = createI18n({
  legacy: false,
  locale: language,
  fallbackLocale: "english",
  messages,
});

export default i18n;
