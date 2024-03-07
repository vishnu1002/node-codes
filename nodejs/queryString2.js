
const url = require("url");

const urlQuery = "https://www.google.com/search?q=apple&rlz=1C1CHZN_enIN1097IN1097&oq=apple&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyEwgBEC4YgwEYxwEYsQMY0QMYgAQyEwgCEC4YgwEYxwEYsQMY0QMYgAQyCggDEAAYsQMYgAQyEAgEEAAYgwEYsQMYgAQYigUyCggFEAAYsQMYgAQyBggGEEUYPDIGCAcQRRg80gEHNjQwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8";

const parsedUrl = url.parse(urlQuery, true);
const query = parsedUrl.query;

let jsonFormat = JSON.stringify(query);

let objectFormat = JSON.parse(jsonFormat);

console.log(jsonFormat);
console.log(objectFormat);
