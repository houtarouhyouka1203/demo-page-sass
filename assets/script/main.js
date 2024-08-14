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

document.addEventListener("DOMContentLoaded",()=> {
    loadCharList();
})
function reload() {
    var o = document.querySelector(".char__list");
    o.classList.toggle("reversed"); loadCharList();
}

{/* <div class="col"><div class="card-item"><div class="card-item__wrapper"><div class="front char">
                <div class="char__img">
                    <img src="./assets/img/char/1.jpg" alt="Izuku Midoriya">
                </div>
                <h3 class="char__name">Izuku Midoriya</h3>
                <p class="char__kosei"><span>Kosei</span> One For All</p>
                <p class="char__age"><span>Age</span>16</p>
                <p class="char__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, fugiat?</p>
</div><div class="back"></div></div></div></div> */}