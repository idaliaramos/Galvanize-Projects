// class RottenTomatoesScraper {
//   scrape(url) {
//     return fetch("http://cors-bypass-proxy.axiomlogic.com/https://www.rottentomatoes.com/m/annabelle_creation")
//       .then(response => response.text())
//       .then(html => {
//         let parser = new DOMParser();
//         let doc = parser.parseFromString(html, 'text/html');
//         console.log(doc);
//         let $rating = document.getElementsByClassName("meter-value")[0]
//         // console.log($rating)
//       }
//     }
//   };
// module.exports = RottenTomatoesScraper
