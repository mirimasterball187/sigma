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


function roastMeShakespeareStyle() {
    const part1 = ["Thou", "Ye", "O", "Hark, thou"];
    const part2 = ["artless", "bootless", "clouted", "frothy", "reeky", "puny", "craven", "paunchy"];
    const part3 = ["hedge-pig", "scullion", "maggot-pie", "clotpole", "bum-bailey", "popinjay", "horn-beast"];

    const insult = `${part1[Math.floor(Math.random() * part1.length)]} ${part2[Math.floor(Math.random() * part2.length)]} ${part3[Math.floor(Math.random() * part3.length)]}!`;

    alert(insult);
}

function randomYouTubeSurprise() {
    const videoIds = [
        // Rickroll Overkill
        "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
        "oHg5SJYRHA0", // Alternate Rickroll Link
        "6_b7RDuLwcI", // Another Rickroll Variant
    
        // Meme Anthems & Iconic Music Vibes
        "9Deg7VrpHbM", // Darude - Sandstorm
        "ZZ5LpwO-An4", // Nyan Cat
        "QH2-TGUlwu4", // Nyan Cat (Original)
        "lXMskKTw3Bc", // Chocolate Rain
        "tVj0ZTS4WF4", // A-ha - Take On Me
        "fLexgOxsZu0", // Rick Astley - Together Forever
        "04854XqcfCY", // Europe - The Final Countdown
        "ZyhrYis509A", // a-ha - Take On Me (Official Video)
        "WGOohBytKTU", // Flight of the Conchords - The Humans Are Dead
        "YlEb3L1PIco", // OK Go - Here It Goes Again
        "YJVmu6yttiw", // Skrillex - Bangarang
        "GaoLU6zKaws", // PSY - Gangnam Style
        "aWmkuH1k7uA", // Smash Mouth - All Star
        "YersIyzsOpc", // Evolution of Dance
        "QK8mJJJvaes", // OK Go - This Too Shall Pass
        "z9Uz1icjwrM", // The Lonely Island - I'm On A Boat
        "nZ-Bm0F1fSg", // The Lonely Island - Jizz In My Pants
        "mrVgEHZQStI", // The Lonely Island - Like A Boss
        "vtPk5IUbdH0", // The Lonely Island - I Just Had Sex
        "J---aiyznGQ", // The Lonely Island - YOLO
    
        // Viral Internet Chaos
        "FzRH3iTQPrk", // Dramatic Chipmunk
        "tPEE9ZwTmy0", // Sneezing Baby Panda
        "a3Z7zEc7AXQ", // Keyboard Cat
        "cYplvwBvGA4", // David After Dentist
        "rY-FJvRqK0E", // Charlie Bit My Finger
        "sCNrK-n68CM", // Double Rainbow
        "rAlTOfl9F2w", // Bed Intruder Song
        "NhheiPTdZCw", // Hide Yo Kids, Hide Yo Wife
        "iwGFalTRHDA", // Trololo Song
        "ub82Xb1C8os", // Numa Numa
        "q6EoRBvdVPQ", // Star Wars Kid
        "dMH0bHeiRNg", // Evolution of Dance
        "6n3pFFPSlW4", // Afro Ninja
        "60ItHLz5WEA", // Harlem Shake
        "HtvIYRrgZ04", // Leave Britney Alone
        "U9t-slLl30E", // Chocolate Rain
        "kffacxfA7G4", // Justin Bieber - Baby
        "L_jWHffIx5E", // Miley Cyrus - Party In The U.S.A.
        "2ZIpFytCSVc", // Rebecca Black - Friday
    
        // Gaming, Retro & Nostalgic Blasts
        "N9qYF9DZPdw", // Mortal Kombat Theme Song
        "R1gqgD3cL7k", // Tetris Theme A
        "9cR5hSkK6no", // Super Mario Bros. Theme
        "cU0FqHdiVGI", // The Legend of Zelda Theme
        "Uj1ykZWtPYI", // Pokémon Theme Song
        "HZnXUvG6pLs", // Sonic the Hedgehog Theme
        "YbJOTdZBX1g", // Michael Jackson - Thriller
        "sOnqjkJTMaA", // Michael Jackson - Billie Jean
        "Sagg08DrO5U", // Michael Jackson - Beat It
        "y6120QOlsfU", // Darude - Sandstorm
        "HPPj6viIBmU", // Mortal Kombat - Techno Syndrome
        "zCLOJ9j1k2Y", // DuckTales Theme Song
    
        // Unexpected Comedy & Cringe
        "gGdGFtwCNBE", // The Killers - Mr. Brightside
        "BbeeuzU5Qc8", // Smash Mouth - All Star
        "SYnVYJDxu7c", // Limp Bizkit - Rollin'
        "1k08yxu57NA", // Susan Boyle - Britain's Got Talent Audition
        "EqWRaAF6_WY", // William Hung - She Bangs
        "FdcJVuylmsM", // Rebecca Black - Friday
        "vTIIMJ9tUc8", // Ylvis - The Fox (What Does The Fox Say?)
        "kJQP7kiw5Fk", // Luis Fonsi - Despacito
    
        // Deep Meme Lore
        "S9x8h2s1lsw", // We Are Number One
        "gGztd2y9N28", // Shooting Stars Meme
        "yRmqZRPgK1w", // He-Man - HEYYEYAAEYAAAEYAEYAA
        "P_d0ykpzQgM", // Spiderman Pizza Theme
        "KmtzQCSh6xk", // Numa Numa
        "cGZkCPtOHnE", // Peanut Butter Jelly Time
        "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
        "oHg5SJYRHA0", // Alternate Rickroll Link
        "6_b7RDuLwcI", // Another Rickroll Variant
        "9Deg7VrpHbM", // Darude - Sandstorm
        "ZZ5LpwO-An4", // Nyan Cat
        "QH2-TGUlwu4", // Nyan Cat (Original)
        "lXMskKTw3Bc", // Chocolate Rain
        "tVj0ZTS4WF4", // A-ha - Take On Me
        "fLexgOxsZu0", // Rick Astley - Together Forever
        "04854XqcfCY", // Europe - The Final Countdown
        "ZyhrYis509A", // a-ha - Take On Me (Official Video)
        "WGOohBytKTU", // Flight of the Conchords - The Humans Are Dead
        "YlEb3L1PIco", // OK Go - Here It Goes Again
        "YJVmu6yttiw", // Skrillex - Bangarang
        "GaoLU6zKaws", // PSY - Gangnam Style
        "aWmkuH1k7uA", // Smash Mouth - All Star
        "YersIyzsOpc", // Evolution of Dance
        "QK8mJJJvaes", // OK Go - This Too Shall Pass
        "z9Uz1icjwrM", // The Lonely Island - I'm On A Boat
        "nZ-Bm0F1fSg", // The Lonely Island - Jizz In My Pants
        "mrVgEHZQStI", // The Lonely Island - Like A Boss
        "vtPk5IUbdH0", // The Lonely Island - I Just Had Sex
        "J---aiyznGQ", // The Lonely Island - YOLO
        "FzRH3iTQPrk", // Dramatic Chipmunk
        "tPEE9ZwTmy0", // Sneezing Baby Panda
        "a3Z7zEc7AXQ", // Keyboard Cat
        "cYplvwBvGA4", // David After Dentist
        "rY-FJvRqK0E", // Charlie Bit My Finger
        "sCNrK-n68CM", // Double Rainbow
        "rAlTOfl9F2w", // Bed Intruder Song
        "NhheiPTdZCw", // Hide Yo Kids, Hide Yo Wife
        "iwGFalTRHDA", // Trololo Song
        "ub82Xb1C8os", // Numa Numa
        "q6EoRBvdVPQ", // Star Wars Kid
        "dMH0bHeiRNg", // Evolution of Dance
        "6n3pFFPSlW4", // Afro Ninja
        "60ItHLz5WEA", // Harlem Shake
        "HtvIYRrgZ04", // Leave Britney Alone
        "U9t-slLl30E", // Chocolate Rain
        "kffacxfA7G4", // Justin Bieber - Baby
        "L_jWHffIx5E", // Miley Cyrus - Party In The U.S.A.
        "2ZIpFytCSVc", // Rebecca Black - Friday
        "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
        "oHg5SJYRHA0", // Alternate Rickroll Link
        "6_b7RDuLwcI", // Another Rickroll Variant
        "9Deg7VrpHbM", // Darude - Sandstorm
        "ZZ5LpwO-An4", // Nyan Cat
        "QH2-TGUlwu4", // Nyan Cat (Original)
        "lXMskKTw3Bc", // Chocolate Rain
        "tVj0ZTS4WF4", // A-ha - Take On Me
        "fLexgOxsZu0", // Rick Astley - Together Forever
        "04854XqcfCY", // Europe - The Final Countdown
        "ZyhrYis509A", // a-ha - Take On Me (Official Video)
        "WGOohBytKTU", // Flight of the Conchords - The Humans Are Dead
        "YlEb3L1PIco", // OK Go - Here It Goes Again
        "YJVmu6yttiw", // Skrillex - Bangarang
        "GaoLU6zKaws", // PSY - Gangnam Style
        "aWmkuH1k7uA", // Smash Mouth - All Star
        "YersIyzsOpc", // Evolution of Dance
        "QK8mJJJvaes", // OK Go - This Too Shall Pass
        "z9Uz1icjwrM", // The Lonely Island - I'm On A Boat
        "nZ-Bm0F1fSg", // The Lonely Island - Jizz In My Pants
        "mrVgEHZQStI", // The Lonely Island - Like A Boss
        "vtPk5IUbdH0", // The Lonely Island - I Just Had Sex
        "J---aiyznGQ", // The Lonely Island - YOLO
        "FzRH3iTQPrk", // Dramatic Chipmunk
        "tPEE9ZwTmy0", // Sneezing Baby Panda
        "a3Z7zEc7AXQ", // Keyboard Cat
        "cYplvwBvGA4", // David After Dentist
        "rY-FJvRqK0E", // Charlie Bit My Finger
        "sCNrK-n68CM", // Double Rainbow
        "rAlTOfl9F2w", // Bed Intruder Song
        "NhheiPTdZCw", // Hide Yo Kids, Hide Yo Wife
        "iwGFalTRHDA", // Trololo Song
        "ub82Xb1C8os", // Numa Numa
        "q6EoRBvdVPQ", // Star Wars Kid
        "dMH0bHeiRNg", // Evolution of Dance
    
        // Oddballs You Didn’t Know You Needed
        "ht0_Gzqtf3M", // Badger Badger Badger
        "FPT1-5h3wxY", // Llama Song
        "F5yrBzFYhfs", // The Duck Song
        "fC7oUOUEEi4", // The Duck Song 2
        "G6PD8LAVY6A", // The Duck Song 3
        "GgL7o_rNUAM", // Narwhals Song
        "QHx5uU3HVOM", // It's Raining Tacos
        "c85xkFoquyA", // Cat Vibing to Ievan Polkka
        "u06XEgF3kaw", // Baby Shark Dance
        "UNAr5tzZxdk", // Crazy Frog - Axel F
        "q4d5v1z9c7E", // Crazy Frog - We Are The Champions 

    ];
     

    const randomId = videoIds[Math.floor(Math.random() * videoIds.length)];
    const url = `https://www.youtube.com/watch?v=${randomId}`;
    window.open(url, "_blank");
}
