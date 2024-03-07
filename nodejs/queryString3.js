
const url = require('url');

const queryString = "https://www.google.com/search?q=Amrita&sca_esv=392d47dac646a17a&rlz=1C1CHZN_enIN1090IN1090&ei=IYLpZc6xHKiYjuMP_sKvyA0&ved=0ahUKEwiOxozv5OGEAxUojGMGHX7hC9kQ4dUDCBA&uact=5&oq=Amrita&gs_lp=Egxnd3Mtd2l6LXNlcnAiBkFtcml0YTIREC4YgAQYigUYkQIYsQMYgwEyCxAuGIAEGLEDGIMBMg4QLhiABBjHARivARiOBTIOEC4YgAQYxwEYrwEYjgUyCxAuGIAEGLEDGIMBMggQLhixAxiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyIBAuGIAEGIoFGJECGLEDGIMBGJcFGNwEGN4EGN8E2AEESO9sUKcXWN9pcAJ4AZABA5gBkAKgAeYLqgEGMC4xMC4xuAEDyAEA-AEBmAIJoAL8CKgCFMICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgITEC4YgAQYigUYQxjIAxiwA9gBAcICGRAuGIAEGIoFGEMYxwEY0QMYyAMYsAPYAQHCAhAQABiABBiKBRhDGLEDGIMBwgIQEC4YQxiDARixAxiABBiKBcICChAAGIAEGIoFGEPCAg4QLhiABBixAxiDARjlBMICCxAuGLEDGIAEGOUEwgILEC4YgAQYsQMY5QTCAhMQLhhDGIAEGIoFGOoCGLQC2AECwgITEC4YgAQYigUYQxjqAhi0AtgBAsICExAAGIAEGIoFGEMY6gIYtALYAQLCAhYQABgDGI8BGOUCGOoCGLQCGIwD2AEDwgIWEC4YAxiPARjlAhjqAhi0AhiMA9gBA8ICChAuGIAEGIoFGEPCAhYQLhiABBiKBRhDGLEDGIMBGMcBGNEDwgIOEC4YgAQYigUYsQMYgwHCAgUQLhiABMICGRAuGIAEGIoFGEMYlwUY3AQY3gQY3wTYAQTCAg0QABiABBiKBRhDGLEDwgIOEC4YgwEY1AIYsQMYgATCAggQLhiABBixA8ICJRAuGIAEGIoFGEMYsQMYgwEYxwEY0QMYlwUY3AQY3gQY4ATYAQTCAg4QLhiABBiKBRiRAhixA5gDDIgGAZAGFLoGBggBEAEYCLoGBAgCGAe6BgYIAxABGAq6BgYIBBABGBSSBwUyLjYuMaAH74EC&sclient=gws-wiz-serp"

const parsedUrl = new URL(queryString);
const searchParams = parsedUrl.searchParams;

const queryDict = {};
searchParams.forEach((value, key) =>{
    queryDict[key] = value;
});

console.log(queryDict);
