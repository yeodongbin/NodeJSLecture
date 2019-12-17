var word = "여동빈";

while (true) {
    //chrome 창에서 띄우기
   
    var anwser = prompt(word);

    if (word[word.length - 1] === answer[0]) {
        alert("딩동댕");
        word = answer;
    } else {
        alert("땡");
    }
}

for (var word = "여동빈";true;) {
    //chrome 창에서 띄우기
    var anwser = prompt(word);
    
    if (word[word.length - 1] === answer[0]) {
        alert("딩동댕");
        word = answer;
    } else {
        alert("땡");
    }
}
