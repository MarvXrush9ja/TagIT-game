// Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

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

        // attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        // EventListener to toggle the cards
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
        })
    });
};

cardGenerator();