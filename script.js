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
    const jokes = [
        "Why did the invisable man turn down the job offer? He couldn't see himself doing it.",
        "Why do barbers make good drivers? They know a lot of short cuts.",
        "A blind man walks into a bar. And a table. And a chair.",
        "You'll never guess who I bumped into on the way to the opticians! Everyone.",
        "What do you get when you mix human DNA with goat DNA? Kicked out of the petting zoo.",
        "What's the difference between an irish funeral and an irish wedding? One less drunk.",
        "The Secret Service just had to change protocol for when the president is in danger. Instead of yelling 'Get down!', they now have to yell 'Donald, duck!'",
        "A Mexican Magician says that he will disappear on the count of three. He says: 'und, dos...' Poof, he disapeared without a tres.",
        "A drill sergeant walks into a bar. He orders everyone around.",
        "What did the communist smoke? We'd.",
        "Say what you want about deaf people.",
        "I know a lot of jokes about unemployed people, but none of them work.",
        "A solider survived mustard gas in battle and pepper spray from the police. Now he's a seasoned veteran.",
        "I hate Russian Dolls. So full of themselves.",
        "You should commit a crime, maybe then you'll finally be wanted.",
        "My father has the heart of a lion and a livelong ban from the zoo.",
        "I can't stand beeing in a wheelchair.",
        "What's the best thing about switzerland? I don't know, but their flag is a huge plus.",
        "Why was 6 afreid of 7? Because 7 8 9? No, it's because 7 ist a registered 6-offender.",
        "What do you call it when Batman skips Church? Christian Bale.",
        "What did the cannibal do after he dumped his girlfriend? Wipe his ass.",
        "'I stand corrected.', said the man in the orthopedic shoes.",
        "Don't hire a midget as a chef. The steaks are too high.",
        "A baby seal walks into a club. You're an idiot, seals don't walk.",
        "Rick Astley will let you borrow any movie from his pixar collection, exept one. He's never gonna give you Up.",
        "I quit using meth for good. Now I use it for evil.",
        "An esculator can never break, it can only temporary become stairs.",
        "I don't have a microwave, but I do have a clock that occasioanally cooks shit.",
        "Two scientists walk into a bar. One says 'I'll have a H20.' The other says 'I'll have a H20, too.' He died.",
        "What does every tickle-me elmo get before leaving the factory? Two test tickles.",
        "I'm reading a book of anti-gravity and it's impossible to put down.",
        "Why did the frog say Quark? Because he had to fart. -David",
        "Why do birds fly south in the winter? Because it's too far to walk.",
        "What do you call a cow with no legs? Ground beef.",
        "What do you call chees that isn't yours? Nacho cheese.",
    ];
    const randomjoke = jokes[Math.floor(Math.random() * jokes.length)];
    alert(randomjoke);
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

