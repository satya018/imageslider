const maincontent = document.querySelector("main")
console.log(maincontent);

const iamgedata = [
    {
        imagename: "tamarin",
        imageurl: "https://cdn.pixabay.com/photo/2023/10/20/13/48/tamarin-8329530_960_720.png"
    },
    {
        imagename: "tiger",
        imageurl: "https://cdn.pixabay.com/photo/2023/12/07/19/45/tiger-8436227_1280.jpg"
    },
    {
        imagename: "monkey",
        imageurl: "https://cdn.pixabay.com/photo/2024/04/18/19/14/monkey-8704855_640.jpg"
    },
    {
        imagename: "Satya",
        imageurl: "https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_640.jpg"
    },
    {
        imagename: "chicks",
        imageurl: "https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_640.jpg"
    },
    {
        imagename: "nature",
        imageurl: "https://cdn.pixabay.com/photo/2024/03/27/17/14/ai-generated-8659507_640.jpg"
    },
    {
        imagename: "flower",
        imageurl: "https://cdn.pixabay.com/photo/2024/02/23/15/11/crocuses-8592214_640.jpg"
    },
    {
        imagename: "fish",
        imageurl: "https://cdn.pixabay.com/photo/2023/05/23/07/05/royal-gramma-basslet-8012082_640.jpg"
    },
    {
        imagename: "crystal mushroom",
        imageurl: "https://cdn.pixabay.com/photo/2022/09/02/19/55/crystal-7428278_640.jpg"
    },
    {
        imagename: "cucumber",
        imageurl: "https://cdn.pixabay.com/photo/2024/03/25/23/25/ai-generated-8655605_640.jpg"
    },
    {
        imagename: "lavender flowers bee",
        imageurl: "https://cdn.pixabay.com/photo/2023/06/19/18/02/lavender-8075280_640.jpg"
    },
    {
        imagename: "witch trees",
        imageurl: "https://cdn.pixabay.com/photo/2023/09/17/22/25/witch-8259351_640.jpg"
    },

]
iamgedata.map((ele) => {
    const div = document.createElement("div")
    div.setAttribute("class", "image_box")
    const img = document.createElement("img")
    const head = document.createElement("h3")
    head.setAttribute("class", "heading")
    console.log(head);
    const head2 = document.createElement("h2")
    // div.style.backgroundImage = url(${ele.imageurl})//?it use to set the background image

    div.append(img)
    div.append(head)
    div.append(head2)
    // console.log(img);
    head.textContent = ele.imagename
    head2.textContent = ele.imagename

    // console.log(head);

    img.setAttribute("src", ele.imageurl)
    img.setAttribute("alt", ele.imageurl)
    img.setAttribute("title", ele.imagename)
    div.append(head)

    //!add image in popup box
    div.addEventListener("click", () => {
        popup_box.style.display = "block"
        popup_box.style.backgroundImage = `url(${ele.imageurl})`
    })


    maincontent.append(div)// add more element in single time
    // maincontent.appendChild(img) //?it only add one element at a single time
})

const popup_box = document.querySelector(".popup_box");
const image_box = document.querySelectorAll(".image_box");

image_box.forEach((ele) => {
    ele.addEventListener("click", () => {
        popup_box.style.display = "block";
    });
});
const closebutton = document.querySelector("#close")
closebutton.addEventListener("click", () => {
    popup_box.style.display = "none"
})


//!theme

const theme_box = document.querySelector(".theme_box")
const moon = document.querySelector(".moon")
const sun = document.querySelector(".sun")

const mainnav = document.querySelector(".main_nav")
const maincnt = document.querySelector(".main_cnt")
const botomname = document.querySelector(".heading")

let theme_color = true;

theme_box.addEventListener("click", () => {
    theme_color = !theme_color

    if (theme_color) {
        theme_box.style.backgroundColor = "black"
        theme_box.style.color = "white"
        moon.style.display = "block"
        sun.style.display = "none"
        // cahnging the nav bar color 
        mainnav.style.backgroundColor = "#E8DFCA"
        maincnt.style.backgroundColor = "#F5EFE6"

        const heading = document.querySelectorAll(".heading")
        heading.forEach((ele) => {
            ele.style.color = "black"
        });

    } else {
        theme_box.style.backgroundColor = "white"
        theme_box.style.color = "black"
        sun.style.display = "block"
        moon.style.display = "none"

        mainnav.style.backgroundColor = "black"
        maincnt.style.backgroundColor = "black"
        // botomname.style.color = "white"
        //change all image name color 
        const heading = document.querySelectorAll(".heading")
        heading.forEach((ele) => {
            ele.style.color = "#A87676"
        });


    }

})