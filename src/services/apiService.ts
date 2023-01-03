// import { ArticleType } from '../types/article';
//
// const ARTICLE_DATA_MOCK = {
//     title: 'Luc Dupanloup',
//     text: `Luc Dupanloup, pseud. Dupa (ur. 13 lutego 1945 w Montignies-sur-Sambre, zm. 8 listopada 2000 w Ottignies) – belgijski rysownik, twórca postaci Cubitusa (w niektórych krajach znanej też jako Dommel).
// Luc Dupanloup studiował na Akademii Sztuk Pięknych w Brukseli w latach 60. Karierę rozpoczął w 1968, kiedy to stworzył postać Cubitusa dla belgijskiego magazynu "Tintin". Od tego czasu przygody sympatycznego, puszystego, białego psa stały się bardzo popularne i przyniosły sukces komercyjny. Jako asystent Grega, Dupanloup pracował również nad innymi komiksami, takimi jak Fifi, Fleurette, Luc Junior, Tootsy i Achille Talon.
// W roku 1972 Dupanloup przejął popularną serię "Chlorophylle" od Raymonda Macherota (z tekstem napisanym przez Grega i Bobiego de Groota). Napisał w tym czasie również scenariusz dla serii "Éric". W 1973 został nagrodzony Crayon d'Argent. W roku 1980 roku Dupanloup stworzył popularną serię "Kiky" o kierowcy ciężarówki.
// W 1994 La Poste (belgijska poczta) wypuściła specjalny, okolicznościowy znaczek pocztowy z Cubitusem.`,
// };

const API_ENDPOINT = 'https://pl.wikipedia.org/api/rest_v1/page/random/summary';

export const fetchArticle = async () => {
    const response = await fetch(API_ENDPOINT);
    return response.json();
}
