export const articles = [
    { id: 1, title: 'District heating', text: '', author: 'Leanne Graham' },
    { id: 2, title: 'District cooling', text: '', author: 'Ervin Howell' },
    { id: 3, title: 'DHC', text: '', author: 'Clementine Bauch' },
];

articles.forEach(article => {
    article.text = `Text of ${article.title}`;
});