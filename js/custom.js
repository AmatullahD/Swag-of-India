const myMap = new Map();
myMap.set("india", '+915614883549')
myMap.set("canada", '+112246258971')
myMap.set("uk", '+4414528635994')
myMap.set("germany", '+49264857944')

document.getElementById("language_select").addEventListener('change', () => {
    let country = document.getElementById("language_select").value;
    document.getElementById("mobile").innerHTML = myMap.get(country);
    document.getElementById("flag-icon").src = `Images/${country}.png`;
})

// sticky navbar script
document.getElementById("scrollUp").classList.add("hide");
getYPosition = () => {
    var top = window.pageYOffset || document.documentElement.scrollTop
    return top;
};

document.addEventListener('scroll', () => {
    var scroll = getYPosition();
    var arrow = document.getElementById("scrollUp");
    scrolled = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    if (scroll >= 55) {
        document.getElementById("header-sticky").classList.add("sticky-top");
        // document.getElementById('main-container').style = "margin-top: 120px";
    } else {
        document.getElementById("header-sticky").classList.remove("sticky-top");
        // document.getElementById('main-container').style = "margin-top: 0";
    }
    if (scroll > 55) {
        arrow.classList.remove("hide");
        arrow.classList.add("show");
        arrow.addEventListener('click', scrolled);


    } else {
        document.getElementById('scrollUp').classList.remove("show");
        document.getElementById('scrollUp').classList.add("hide");
        document.getElementById("scrollUp").removeEventListener("click", scrolled);


    }
});