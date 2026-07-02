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
    "MEX": [["#185", "#fff"], ["#fff", "#032"], ["#000", "#185"]],
    "RSA": [["#fe0", "#084"], ["#243", "#fff"]],
    "KOR": [["#e13", "#fff"], ["#87c", "#fff"]],
    "CZE": [["#b00", "#113"], ["#ddd", "#da4"]],

    "SUI": [["#e00", "#fff"], ["#9f6", "#467"]],
    "CAN": [["#f00", "#fff"], ["#000", "#bbb"], ["#fff", "#444"]],
    "BIH": [["#027", "#fff"], ["#fff", "#027"]],
    "QAT": [["#902", "#fff"], ["#fff", "#902"]],

    "BRA": [["#fe4", "#000"], ["#000", "#359"]],
    "MAR": [["#d22", "#084"], ["#fff", "#c96"]],
    "SCO": [["#004", "#fff"], ["#f55", "#538"]],
    "HAI": [["#00f", "#fff"], ["#fff", "#00f"], ["#f00", "#fff"]],

    "USA": [["#fff", "#f00"], ["#234", "#fff"]],
    "AUS": [["#fb0", "#054"], ["#054", "#fff"]],
    "PAR": [["#fff", "#f00"], ["#013", "#fff"]],
    "TUR": [["#f00", "#fff"], ["#fff", "#f00"]],

    "GER": [["#fff", "#000"], ["#013", "#7fe"]],
    "CIV": [["#f60", "#070"], ["#fff", "#f60"]],
    "ECU": [["#fd0", "#013"], ["#013", "#ca7"], ["#fff", "#013"]],
    "CUW": [["#03e", "#ff0"], ["#ffb", "#06d"]],

    "NED": [["#f53", "#000"], ["#fff", "#f53"]],
    "JPN": [["#007", "#fff"], ["#eed", "#222"]],
    "SWE": [["#fe0", "#00e"], ["#149", "#fe6"]],
    "TUN": [["#fff", "#f00"], ["#f00", "#fff"], ["#000", "#fff"]],

    "BEL": [["#f00", "#000"], ["#9df", "#000"]],
    "EGY": [["#f01", "#000"], ["#fff", "#000"]],
    "IRN": [["#fff", "#f00"], ["#f00", "#fff"]],
    "NZL": [["#fff", "#000"], ["#000", "#fff"]],

    "ESP": [["#e00", "#fc1"], ["#eed", "#523"]],
    "CPV": [["#008", "#fff"], ["#000", "#008"], ["#f00", "#fff"]],
    "URU": [["#9ce", "#000"], ["#102", "#45d"]],
    "KSA": [["#043", "#fff"], ["#fff", "#043"]],

    "FRA": [["#126", "#fff"], ["#dfe", "#d60"]],
    "NOR": [["#f00", "#025"], ["#000", "#fff"], ["#fff", "#000"]],
    "SEN": [["#fff", "#065"], ["#065", "#ff0"]],
    "IRQ": [["#fff", "#000"], ["#285", "#fff"], ["#000", "#fff"]],

    "ARG": [["#bdf", "#123"], ["#123", "#fff"]],
    "AUT": [["#f00", "#fff"], ["#fff", "#034"], ["#000", "#fff"]],
    "ALG": [["#fff", "#054"], ["#054", "#fff"]],
    "JOR": [["#fff", "#f00"], ["#f00", "#fff"], ["#000", "#fff"]],

    "COL": [["#fd0", "#07e"], ["#236", "#cf3"]],
    "POR": [["#e02", "#fff"], ["#fff", "#19a"]],
    "COD": [["#0be", "#fff"], ["#fff", "#0be"], ["#f00", "#ff0"]],
    "UZB": [["#fff", "#00f"], ["#00f", "#fff"]],

    "ENG": [["#fff", "#004"], ["#f11", "#004"]],
    "CRO": [["#fff", "#00f"], ["#00f", "#fff"]],
    "GHA": [["#fff", "#000"], ["#fc6", "#000"]],
    "PAN": [["#f00", "#fff"], ["#fff", "#008"], ["#008", "#fff"]],
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
            head.textContent += "CHAMPIONSHIP";
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

    flagLeft.setAttribute("src", `./img/${code}Flag.svg`);
    abbrLeft.textContent = code;

    changeOptions("home", code);
});

awayTeam.addEventListener("change", (e) => {
    e.preventDefault();

    var code = awayTeam.value;

    flagRight.setAttribute("src", `./img/${code}Flag.svg`);
    abbrRight.textContent = code;

    changeOptions("away", code);
});

homeJer.addEventListener("change", (e) => {

})

function changeOptions(homeAway, country) {
    var dropdown;
    const colors = teamVals[country]

    if (homeAway === "home") {
        dropdown = homeJer;
    } else if (homeAway === "away") {
        dropdown = awayJer;
    }

    if (colors.length === 2) {
        dropdown.innerHTML = `<option value='home' style="background-color: ${colors[0][0]}; color: ${colors[0][1]}" selected>First Kit</option><option value='road'  style="background-color: ${colors[1][0]}; color: ${colors[1][1]}">Second Kit</option>`
    } else {
        dropdown.innerHTML = `<option value='home' style="background-color: ${colors[0][0]}; color: ${colors[0][1]}" selected>First Kit</option><option value='road'  style="background-color: ${colors[1][0]}; color: ${colors[1][1]}">Second Kit</option><option value='alt'  style="background-color: ${colors[2][0]}; color: ${colors[2][1]}">Third Kit</option>`
    }
}
