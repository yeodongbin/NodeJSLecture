var word = "여동빈";

while (true) {
    var anwser = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert("딩동댕");
        word = answer;
    } else {
        alert("땡");
    }
}
