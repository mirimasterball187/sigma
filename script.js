function StinkBert() {
    alert("Horizental rotierende Schlafparalyse found. Please remove the issue. You are the issue.");
}

function merkbar() {
    var alter = prompt("Bitte Alter eingeben!");
    if (isNaN(alter) || alter.trim() === "") {
        alert("Das Alter bitte in Zahlen angeben!");
    } else {
        alter = Number(alter);
        if (alter < 5) {
            alert("Du bist leider nicht alt genug für unser Spiel!");
        } else if (alter > 116) {
            alert("Lüge >:c");
        } else {
            alert(alter + " <- so alt bist du ||| Unser Spiel ist alt genug um dich zu spielen!");
        }
    }
}

function knopfi() {
    var knopfi = prompt("Bitte Username aussuchen!");
    if (!/[a-zA-Z]/.test(knopfi)) {
        alert("Der Username muss auch Buchstaben beinhalten!");
    } else {
        alert(knopfi + " <- das ist dein In-Game-Name ||| Wenn du deinem Username nicht gefällst, bitte ändere ihn!");
    }
}

function derda() {
    const userConfirmation = confirm("Would you like to remove the file 'Horizontal.rotierende.Schlafparalyse'?");
    if (userConfirmation) {
        alert("You were successfully removed from the face of earth. Thank you.");
    } else {
        alert("Sei doch ein Spezifischer spezifischender Spezifischer.");
    }
}

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

function Joketeller() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(joke => {
            alert(`${joke.setup} ${joke.punchline}`);
        })
        .catch(error => {
            console.error("Error fetching joke:", error);
            alert("Sorry, couldn't fetch a joke right now!");
        });
}


function question() {
    var feedback = prompt("Provide feedback so we can improve, and what was your favorite joke?");
    
    if (feedback) {
        var feedbackArray = JSON.parse(localStorage.getItem("artray")) || [];
        
        feedbackArray.push(feedback);
        
        localStorage.setItem("artray", JSON.stringify(feedbackArray));
        console.log(feedbackArray);
    }
}

function clearFeedback() {
    localStorage.removeItem("artray");
    alert("All feedback has been cleared.");
}


function ToSpanish() {
    var message = document.createElement("h1");
    message.textContent = "con pescardo sin carne, por favor";
    
    message.style.fontSize = "5em";
    message.style.color = "red";
    message.style.textAlign = "center";
    message.style.position = "absolute";
    message.style.top = "50%";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, -50%)";
    
    document.body.appendChild(message);

    var colors = ["#FF6347", "#32CD32", "#1E90FF", "#FFD700", "#8A2BE2"];
    var colorIndex = 0;
    var flashInterval = setInterval(function() {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 500);

    var audio = new Audio('siporvavor.mp3');
    audio.play();

    setTimeout(function() {
        clearInterval(flashInterval);
        document.body.style.backgroundColor = "#008000";
        message.textContent = "¡Buenas noches bonita, donde esta el aeroporto?";
        message.style.fontSize = "2em";
    }, 5000);
}

function spezi() {
    window.location.href = 'spezi.html';
}

