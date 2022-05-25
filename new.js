player_1_name = localStorage.getItem("player_1");
player_2_name = localStorage.getItem("player_2");

answer_turn = "player_1";
question_turn = "player_2";

player1_score = 0;
player2_score = 0;

document.getElementById("Q_player").innerHTML = "Question turn: " + player_1_name;
document.getElementById("A_player").innerHTML = "Answer turn: " + player_2_name;

document.getElementById("player_1name").innerHTML = player_1_name;
document.getElementById("player_2name").innerHTML = player_2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;



function send() {
    number_1 = document.getElementById("num1_input").value;
    number_2 = document.getElementById("num2_input").value;
    answerOfNum1_2 = parseInt(number_1) * parseInt(number_2);
    question_label = "<h3>" + number_1 + "X" + number_2 + "</h3>";
    input_box = "<br> Answer:  <input type='text' id='text_ans'>";
    button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>"
    row = question_label + input_box + button;
    document.getElementById("main_1").innerHTML = row;
}

function check() {
    get_text = document.getElementById("text_ans").value;


    if (answerOfNum1_2 == get_text) {
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }


        if (question_turn == "player_1") {
            question_turn = "player_2";
            answer_turn = "player_1";
            document.getElementById("Q_player").innerHTML = "Question turn: " + player_2_name;
            document.getElementById("A_player").innerHTML = "Answer turn: " + player_1_name;

        }
        else {
            question_turn = "player_1";
            answer_turn = "player_2";
            document.getElementById("Q_player").innerHTML = "Question turn: " + player_1_name;
            document.getElementById("A_player").innerHTML = "Answer turn: " + player_2_name;
        }
    }
}
