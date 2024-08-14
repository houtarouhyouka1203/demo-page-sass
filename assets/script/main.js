function Characters (fName, lName, url,ks="Quirkless", a="", desc="") {
    this.f = fName;
    this.l = lName;
    this.img = url;
    this.kosei = ks;
    this.age = a;
    this.bio = desc;
}
Characters.prototype.fullname = function(nameDir = "ftl") {
    return (nameDir=="ftl") ? (`${this.f} ${this.l}`) : (`${this.l} ${this.f}`);
}

var char_list = [
    new Characters("Izuku", "Midoriya","./assets/img/char/1.jpg","One For All", 16, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, fugiat?"),
    new Characters("Katsuki", "Bakugo","./assets/img/char/2.webp","Explosion", 16, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, fugiat?"),
]
function loadCharList() {
    function loadChar(arr, nameDir="ftl") {
        if (arr.length != 0) {var data = [], full;
        char_list.forEach((char)=>{
            full = char.fullname(nameDir);
            data.push(`<div class="col"><div class="card-item"><div class="card-item__wrapper"><div class="front char">`);
            data.push(`<div class="char__img"><img src="${char.img}" alt="${full}"></div>`);
            data.push(`<h3 class="char__name">${full}</h3>`);
            data.push(`<p class="char__kosei"><span>Kosei</span> ${char.kosei}</p>`);
            data.push(`<p class="char__age"><span>Age</span> ${char.age}</p>`);
            data.push(`<p class="char__desc">${char.bio}</p>`);
            data.push(`</div><div class="back"></div></div></div></div>`);
        })
        return data.join("");} else {return "no data available"}
    }
    var o = document.querySelector(".char__list");
    if (o.classList.contains("reversed"))
        {o.innerHTML =  loadChar(char_list,"ltf");}
    else 
        {o.innerHTML =  loadChar(char_list,"ftl");}
}
function reload() {
    var o = document.querySelector(".char__list");
    o.classList.toggle("reversed"); loadCharList();
}



function appearNavTop() {
    var oNT = document.querySelector(".navigate-top");
    if (window.scrollY>40) {
        oNT.classList.add("navigate-top--appeared")
    } else {
        oNT.classList.remove("navigate-top--appeared")
    }
}

window.onscroll = (e) => {
    appearNavTop();
}
document.addEventListener("DOMContentLoaded",()=> {
    loadCharList();
    appearNavTop();
    document.querySelector(".navigate-top").addEventListener("click", () => {
        window.scroll(0,0)
    });
})