var cards = document.getElementById('cards');

// for (var i = 1; i < 31; i++) {
//     if (i % 3 == 1 && i != 1) {
//         mytable += "</tr><tr>";
//     }
//     mytable += "<td>[" + i + "]</td>";
// }

// mytable += "</tr></tbody></table>";

for(var i = 0; i < 3; i++) {
    cards += '<div class="img-container"><img class="resize" src="./redcard.jpg"/><h2><span>Ethan Shedd</span></h2><div class="description1"><h3><span>Yeah, alright. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum</span></h3></div></div>';
}

document.write(cards);