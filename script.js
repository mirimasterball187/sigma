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
        // Original List...

        // Rickroll Overkill
        "dQw4w9WgXcQ", "eBGIQ7ZuuiU", "3GwjfUFyY6M", "DLzxrzFCyOs",

        // Meme Anthems & Iconic Music Vibes
        "9Deg7VrpHbM", "ZZ5LpwO-An4", "QH2-TGUlwu4", "lXMskKTw3Bc",
        "tVj0ZTS4WF4", "fLexgOxsZu0", "04854XqcfCY", "ZyhrYis509A",
        "WGOohBytKTU", "YlEb3L1PIco", "YJVmu6yttiw", "GaoLU6zKaws",
        "aWmkuH1k7uA", "YersIyzsOpc", "QK8mJJJvaes", "z9Uz1icjwrM",
        "nZ-Bm0F1fSg", "mrVgEHZQStI", "vtPk5IUbdH0", "J---aiyznGQ",

        // Viral Internet Chaos
        "FzRH3iTQPrk", "tPEE9ZwTmy0", "QH2-TGUlwu4", "a3Z7zEc7AXQ",
        "cYplvwBvGA4", "rY-FJvRqK0E", "sCNrK-n68CM", "rAlTOfl9F2w",
        "NhheiPTdZCw", "iwGFalTRHDA", "ub82Xb1C8os", "q6EoRBvdVPQ",
        "dMH0bHeiRNg", "6n3pFFPSlW4", "60ItHLz5WEA", "HtvIYRrgZ04",
        "U9t-slLl30E", "kffacxfA7G4", "L_jWHffIx5E", "2ZIpFytCSVc",

        // Gaming, Retro & Nostalgic Blasts
        "N9qYF9DZPdw", "R1gqgD3cL7k", "9cR5hSkK6no", "cU0FqHdiVGI",
        "Uj1ykZWtPYI", "HZnXUvG6pLs", "YbJOTdZBX1g", "sOnqjkJTMaA",
        "Sagg08DrO5U", "y6120QOlsfU", "HPPj6viIBmU", "zCLOJ9j1k2Y",

        // Unexpected Comedy & Cringe
        "gGdGFtwCNBE", "BbeeuzU5Qc8", "SYnVYJDxu7c", "1k08yxu57NA",
        "EqWRaAF6_WY", "FdcJVuylmsM", "vTIIMJ9tUc8", "kJQP7kiw5Fk",

        // Deep Meme Lore
        "dQw4w9WgXcQ", "S9x8h2s1lsw", "gGztd2y9N28", "2ZIpFytCSVc",
        "yRmqZRPgK1w", "P_d0ykpzQgM", "KmtzQCSh6xk", "cGZkCPtOHnE",

        // Oddballs You Didn’t Know You Needed
        "ht0_Gzqtf3M", "FPT1-5h3wxY", "F5yrBzFYhfs", "fC7oUOUEEi4",
        "G6PD8LAVY6A", "GgL7o_rNUAM", "QHx5uU3HVOM", "c85xkFoquyA",
        "u06XEgF3kaw", "UNAr5tzZxdk", "Hp8yGfRVlGQ", "Nn5jlrxcpkI",
        "8ybW48rKBME", "Z2xWZ9lMrtk",

        // === NEW ADDITIONS ===

        // Vine & TikTok Classics
        "F4tHL8reNCs", "xVt0D1Wz7mY", "xUNqsfUvv-c", "JqEuArKfG6A", "fUXhPYSoNlQ",
        "nP3dZ5B8KZk", "5sYxbELoLEk", "H5kV1N9cSFM", "Hg3HZU3X3_0", "1etTsp9_MbM",
        "x2-Mcp1Q2AA", "rbMbQHHy2RE", "KymuqNLd7Fw", "0xX5VZ4G5YU",

        // Chaotic Energy & Unhinged Edits
        "pD_imYhNoQ4", "7QUtEmBT_-w", "v=lXMskKTw3Bc", "9Deg7VrpHbM", "frszEJb0aOo",
        "2ZIpFytCSVc", "HZ3rYdW8uK8", "NVGVZuqBQeA", "GUV0eWxV0Sk", "Z6vFNEIhSts",

        // YouTube Poop & Glitchcore
        "YxJfzvOdS5A", "2i43x_AbS20", "Lv-sY_z8MNs", "EzC8nOdbD3A", "zK7Zb_jTqgA",
        "MNk7sFlAxGA", "v0hRx35BR_Y", "KcnSBS3RK1U", "CywzWlsEwVk", "t5UiqKxuDHY",

        // Random 3AM Internet Finds
        "owGykVbfgUE", "LMY2tj4b1nw", "kl1ujzRidmU", "XXkz2TTD7N8", "EdB0r4eU_mQ",
        "MdHYKQ_WdXk", "QsAU5vBA53g", "B0M0TWKJt9Y", "3kqGWlbrM7c", "DRgV9SyzZIc",

        // Nostalgia Bombs
        "xtZpyOHThfI", "Y-LIplpE5Nc", "BLf09bSA9j4", "9D-QD_HIfjA", "JkEJHdfuwUk",
        "1loBNxAxG7Q", "kXYiU_JCYtU", "7wtfhZwyrcc", "3JWTaaS7LdU", "hTWKbfoikeg",

        // Strange Music That Slaps Anyway
        "t3otBjVZzT0", "xat1GVnl8-k", "ScNNfyq3d_w", "mWRsgZuwf_8", "6Ejga4kJUts",
        "F57P9C4SAW4", "O-ZpOMYRi0w", "kJQP7kiw5Fk", "uelHwf8o7_U", "u9Dg-g7t2l4",

        // "Why is this on YouTube?" Vibes
        "pco91kroVgQ", "aiMZ2gR8xPY", "3H2D6fL2KzE", "ZZ5LpwO-An4", "DJztXj2GPfk",
        "FzG4uDgje3M", "blpe_sGnnP4", "GxBSyx85Kp8", "fJ9rUzIMcZQ", "Dq9gvLnt53k",
        "nCkpzqqog4k", "rS9z86xMB5I", "2vjPBrBU-TM", "9bZkp7q19f0", "ht0_Gzqtf3M",

        // More Rickrolls for Good Measure
        "oHg5SJYRHA0", "dPmZqsQNzGA", "dQw4w9WgXcQ", "6_b7RDuLwcI"
    ];

    const randomId = videoIds[Math.floor(Math.random() * videoIds.length)];
    const url = `https://www.youtube.com/watch?v=${randomId}`;
    window.open(url, "_blank");
}
