const nav = document.querySelector("nav");
const head = document.getElementById("head");
const gameType = document.getElementById("gameType");

const homeTeam = document.getElementById("homeTeam");
const homeJer = document.getElementById("homeJer");
    const flagLeft = document.getElementById("flagLeft");
    const abbrLeft = document.getElementById("abbrLeft");
    const scoreLeft = document.getElementById("scoreLeft");

const awayTeam = document.getElementById("awayTeam");
const awayJer = document.getElementById("awayJer");
    const flagRight = document.getElementById("flagRight");
    const abbrRight = document.getElementById("abbrRight");
    const scoreRight = document.getElementById("scoreRight");

const teamVals = {
    "MEX": [["#185", "#eee"], ["#eee", "#032"], ["#111", "#1a6"]],
    "RSA": [["#ec0", "#074"], ["#243", "#eee"]],
    "KOR": [["#c34", "#eee"], ["#87c", "#eee"]],
    "CZE": [["#d12", "#113"], ["#ddd", "#da4"]],

    "SUI": [["#f00", "#fff"], ["#9f6", "#467"]],
    "CAN": [["#d23", "#fff"], ["#111", "#bbb"], ["#eee", "#444"]],
    "BIH": [["#027", "#eee"], ["#eee", "#027"]],
    "QAT": [["#902", "#eee"], ["#eee", "#902"]],

    "BRA": [["#fe4", "#111"], ["#111", "#359"]],
    "MAR": [["#b23", "#ddd"], ["#eee", "#c96"]],
    "SCO": [["#004", "#eee"], ["#f55", "#538"]],
    "HAI": [["#00d", "#eee"], ["#eee", "#00d"], ["#d00", "#eee"]],

    "USA": [["#eee", "#a24"], ["#136", "#eee"]],
    "AUS": [["#fb0", "#054"], ["#054", "#eee"]],
    "PAR": [["#eee", "#f00"], ["#013", "#eee"]],
    "TUR": [["#f00", "#eee"], ["#eee", "#f00"]],

    "GER": [["#eee", "#111"], ["#013", "#7fe"]],
    "CIV": [["#f60", "#070"], ["#eee", "#f60"]],
    "ECU": [["#ec0", "#013"], ["#013", "#ca7"], ["#eee", "#013"]],
    "CUW": [["#06d", "#ee0"], ["#ffb", "#06d"]],

    "NED": [["#f53", "#111"], ["#eee", "#f53"]],
    "JPN": [["#007", "#eee"], ["#eed", "#222"]],
    "SWE": [["#fe0", "#11d"], ["#149", "#fe6"]],
    "TUN": [["#eee", "#f00"], ["#f00", "#eee"], ["#111", "#eee"]],

    "BEL": [["#f00", "#111"], ["#9df", "#111"]],
    "EGY": [["#f01", "#111"], ["#eee", "#111"]],
    "IRN": [["#eee", "#f00"], ["#f00", "#eee"]],
    "NZL": [["#eee", "#111"], ["#111", "#eee"]],

    "ESP": [["#a11", "#eb1"], ["#edb", "#523"]],
    "CPV": [["#008", "#eee"], ["#111", "#eee"], ["#f00", "#eee"]],
    "URU": [["#9ce", "#111"], ["#102", "#9ce"]],
    "KSA": [["#043", "#eee"], ["#eee", "#043"]],

    "FRA": [["#126", "#eee"], ["#dfe", "#d60"]],
    "NOR": [["#f00", "#025"], ["#111", "#eee"], ["#eee", "#111"]],
    "SEN": [["#eee", "#065"], ["#065", "#ff0"]],
    "IRQ": [["#eee", "#111"], ["#285", "#eee"], ["#111", "#eee"]],

    "ARG": [["#7ad", "#123"], ["#123", "#eee"]],
    "AUT": [["#f00", "#eee"], ["#eee", "#034"], ["#111", "#eee"]],
    "ALG": [["#eee", "#054"], ["#054", "#eee"]],
    "JOR": [["#eee", "#f00"], ["#f00", "#eee"], ["#111", "#eee"]],

    "COL": [["#fd0", "#07e"], ["#236", "#cf3"]],
    "POR": [["#e02", "#eee"], ["#eee", "#19a"]],
    "COD": [["#0be", "#eee"], ["#eee", "#0be"], ["#f00", "#ff0"]],
    "UZB": [["#eee", "#00d"], ["#00d", "#eee"]],

    "ENG": [["#eee", "#004"], ["#f11", "#004"]],
    "CRO": [["#eee", "#00d"], ["#00d", "#eee"]],
    "GHA": [["#eee", "#111"], ["#fc6", "#111"]],
    "PAN": [["#f00", "#eee"], ["#eee", "#228"], ["#228", "#eee"]],
}

gameType.addEventListener("change", (e) => {
    e.preventDefault();

    head.textContent = "FIFA WORLD CUP 2026 - ";
    nav.classList.remove("final");

    switch (gameType.value) {
        
        case "groupA":
            head.textContent += "GROUP A";
            break;
        
        case "groupB":
            head.textContent += "GROUP B";
            break;

        case "groupC":
            head.textContent += "GROUP C";
            break;
        
        case "groupD":
            head.textContent += "GROUP D";
            break;
        
        case "groupE":
            head.textContent += "GROUP E";
            break;

        case "groupF":
            head.textContent += "GROUP F";
            break;    

        case "groupG":
            head.textContent += "GROUP G";
            break;
        
        case "groupH":
            head.textContent += "GROUP H";
            break;

        case "groupI":
            head.textContent += "GROUP I";
            break;

        case "groupJ":
            head.textContent += "GROUP J";
            break;
        
        case "groupK":
            head.textContent += "GROUP K";
            break;

        case "groupL":
            head.textContent += "GROUP L";
            break;

        case "r32":
            head.textContent += "ROUND OF 32";
            break;

        case "r16":
            head.textContent += "ROUND OF 16";
            break;

        case "r8":
            head.textContent += "ROUND OF 8";
            break;

        case "semis":
            head.textContent += "SEMIFINALS";
            break;

        case "3rd":
            head.textContent += "3RD PLACE MATCH";
            break;

        case "finals":
            head.textContent += "FINALS";
            nav.classList.add("final");
            break;

        default:
            alert("Invalid match type");
            break;
    }
});

homeTeam.addEventListener("change", (e) => {
    e.preventDefault();

    var code = homeTeam.value;

    flagLeft.setAttribute("src", `./img/${code.toLowerCase()}Flag.svg`);
    abbrLeft.textContent = code;

    changeOptions("home", code);
});

awayTeam.addEventListener("change", (e) => {
    e.preventDefault();

    var code = awayTeam.value;

    flagRight.setAttribute("src", `./img/${code.toLowerCase()}Flag.svg`);
    abbrRight.textContent = code;

    changeOptions("away", code);
});

homeJer.addEventListener("change", (e) => {
    e.preventDefault();
    
    var scorebar = scoreLeft.querySelectorAll(".scorebar");
    var country = homeTeam.value;
    var jersey = homeJer.value;

    if (jersey === "home") {
        jersey = 0;
    } else if (jersey === "road") {
        jersey = 1;
    } else if (jersey === "alt") {
        jersey = 2;
    } else {
        alert("Invalid jersey selection. Defaulting to home.");
        jersey = 0;
    }

    changeColors(scorebar, country, jersey);
})

awayJer.addEventListener("change", (e) => {
    e.preventDefault();
    
    var scorebar = scoreRight.querySelectorAll(".scorebar");
    var country = awayTeam.value;
    var jersey = awayJer.value;

    if (jersey === "home") {
        jersey = 0;
    } else if (jersey === "road") {
        jersey = 1;
    } else if (jersey === "alt") {
        jersey = 2;
    } else {
        alert("Invalid jersey selection. Defaulting to home.");
        jersey = 0;
    }

    changeColors(scorebar, country, jersey);
})

function changeOptions(homeAway, country) {
    var dropdown;
    var scorebar;
    const colors = teamVals[country]

    if (homeAway === "home") {
        dropdown = homeJer;
        scorebar = scoreLeft.querySelectorAll(".scorebar");
    } else if (homeAway === "away") {
        dropdown = awayJer;
        scorebar = scoreRight.querySelectorAll(".scorebar");
    }

    if (colors.length === 2) {
        dropdown.innerHTML = `<option value='home' style="background-color: ${colors[0][0]}; color: ${colors[0][1]}" selected>First Kit</option><option value='road'  style="background-color: ${colors[1][0]}; color: ${colors[1][1]}">Second Kit</option>`
    } else {
        dropdown.innerHTML = `<option value='home' style="background-color: ${colors[0][0]}; color: ${colors[0][1]}" selected>First Kit</option><option value='road'  style="background-color: ${colors[1][0]}; color: ${colors[1][1]}">Second Kit</option><option value='alt'  style="background-color: ${colors[2][0]}; color: ${colors[2][1]}">Third Kit</option>`
    }

    changeColors(scorebar, country, 0);
}

function changeColors (scorebar, country, jersey) {
    console.log("change called.")
    scorebar.forEach((element) => {
        element.style.backgroundColor = teamVals[country][jersey][0];
        element.style.color = teamVals[country][jersey][1];
    })
}
