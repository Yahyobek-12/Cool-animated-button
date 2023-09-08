let LongDiv = document.getElementById("long");
let RoundDiv = document.getElementById("round");

LongDiv.addEventListener("click", () => {
    LongDiv.classList.add("long-2");
    RoundDiv.classList.add("round-2");

    setTimeout(function() {
        LongDiv.classList.add("long-3")
    }, 1000);

    setTimeout(function() {
        LongDiv.classList.add("long-4")
    }, 2000);

    setTimeout(function() {
        LongDiv.classList.add("long-5")
    }, 2500);

    setTimeout(function() {
        LongDiv.classList.add("long-6")
    }, 3000);

    setTimeout(function() {
        LongDiv.classList.add("long-7")
    }, 3500);

    setTimeout(function() {
        LongDiv.classList.add("long-8")
    }, 4000);

    setTimeout(function() {
        LongDiv.classList.add("long-9")
    }, 4500);

    setTimeout(function() {
        LongDiv.classList.add("long-10")
    }, 5000);

    setTimeout(function() {
        LongDiv.classList.add("long-11")
    }, 5500);

    setTimeout(function() {
        LongDiv.classList.add("long-12")
    }, 6000);

    setTimeout(function() {
        RoundDiv.classList.add("round-3")
    }, 6500);

    setTimeout(function() {
        LongDiv.classList.add("long-13")
    }, 6500);

    setTimeout(function() {
        LongDiv.classList.add("long-14")
    }, 7000);

    setTimeout(function() {
        LongDiv.classList.add("long-15")
    }, 7500);

    setTimeout(function() {
        RoundDiv.classList.add("round-4")
    }, 8000);

    setTimeout(function() {
        LongDiv.classList.add("long-16")
    }, 8500);

    setTimeout(function() {
        document.querySelector("h1").classList.add("letter")
    }, 9000);

});