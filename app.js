// Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 10;

// Link text
playerLivesCount.textContent = playerLives;

// Generating the objects
const getData = () => [
    { imgSrc: "./imgs/itachi.png", name: "itachi" },
    { imgSrc: "./imgs/girayaa.png", name: "girayaa" },
    { imgSrc: "./imgs/kakashi.png", name: "kakashi" },
    { imgSrc: "./imgs/leaf.png", name: "leaf" },
    { imgSrc: "./imgs/minato.png", name: "minato" },
    { imgSrc: "./imgs/narutoG.png", name: "narutoG" },
    { imgSrc: "./imgs/narutoS.png", name: "narutoS" },
    { imgSrc: "./imgs/sasukeC.png", name: "sasukeC" },
    { imgSrc: "./imgs/itachi.png", name: "itachi" },
    { imgSrc: "./imgs/girayaa.png", name: "girayaa" },
    { imgSrc: "./imgs/kakashi.png", name: "kakashi" },
    { imgSrc: "./imgs/leaf.png", name: "leaf" },
    { imgSrc: "./imgs/minato.png", name: "minato" },
    { imgSrc: "./imgs/narutoG.png", name: "narutoG" },
    { imgSrc: "./imgs/narutoS.png", name: "narutoS" },
    { imgSrc: "./imgs/sasukeC.png", name: "sasukeC" },
];

// Randomize func
const randomize = () => {
    const cardData = getData();
    cardData.sort( () => Math.random() - 0.5 );
    return cardData;
};

// card generator func
const cardGenerator = () => {
    const cardData = randomize();

    // Generate the HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        //Attach the info to the cards
        face.src = item.imgSrc;
        card.setAttribute("name", item.name);

        // attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        // EventListener to toggle the cards
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        })
    });
};

// check cards clicked
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards = document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");
    // Logic to check two cards if the same
    if(flippedCards.length === 2){
        if(
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
            ){
                console.log("match");
                flippedCards.forEach((card) => {
                    card.classList.remove("flipped");
                    card.style.pointerEvents = "none";
                });
        } else{
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() =>
                    card.classList.remove("toggleCard"), 1000); });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0){
                restart("try again");
            };
        };
    }
    // run to see if we won the game
    if(toggleCard.length === 16){
        restart("You won");
    }
}

// Restart the game
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");

        // randomize
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            cards[index].setAttribute("name", item.name);
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 10;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 100);
};

cardGenerator();