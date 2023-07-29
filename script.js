// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((element) => {
  const linkTag = document.createElement("a");
  linkTag.innerText = element.text;
  linkTag.setAttribute("href", element.href);
  topMenuEl.appendChild(linkTag);
});

//////////////////////
//     VERSION 2    //
/////////////////////

// All changes are done in javascript.
// HTML and CSS are untouched.

const main = document.querySelector("main");

// I don't really know how this async await function works
// I did some excercise about it so, I'm practicing it here
// using the randomuser API
let url = "https://randomuser.me/api/?results=5";
async function getStudents() {
  let students = await fetch(url);
  let studentsData = await students.json();
  studentsData = studentsData.results;

  studentsData.forEach((data) => {
    let picUrl = data.picture.medium;
    let name = `${data.name.first} ${data.name.last} `;
    let img = document.createElement("img");
    img.setAttribute("src", picUrl);
    img.style.borderRadius = "5px";

    let studentsDivContainer = document.createElement("div");
    studentsDivContainer.style.borderRadius = "5px";
    studentsDivContainer.setAttribute("class", "student-box");
    let studentDiv = document.createElement("div");
    let pTag = document.createElement("p");

    pTag.innerText = name;
    studentDiv.append(pTag);

    studentsDivContainer.style.backgroundColor = "#393e46";
    studentsDivContainer.style.padding = ".5em";
    studentsDivContainer.style.margin = "1em";
    studentsDivContainer.style.textAlign = "center";

    studentDiv.append(img);
    studentsDivContainer.appendChild(studentDiv);
    main.append(studentsDivContainer);
  });

  //prettier-ignore
  const studentsDivImages = document.querySelectorAll(".student-box div img");
  studentsDivImages.forEach((image) => {
    image.addEventListener("mouseover", (event) => {
      console.log(event.target);
      event.target.style.border = "5px solid";
    });

    image.addEventListener("mouseleave", (event) => {
      console.log(event.target);
      event.target.style.border = "none";
    });
  });

  const studentDivs = document.querySelectorAll(".student-box");
  const title = document.querySelector("h1");
  title.addEventListener("mouseover", () => {
    title.innerHTML = "Per Scholas<br>ROCKS!";
    studentDivs.forEach((eachStudent) => {
      eachStudent.style.display = "none";
    });
  });
  title.addEventListener("mouseleave", () => {
    title.innerText = "SEI Rocks!";
    studentDivs.forEach((eachStudent) => {
      eachStudent.style.display = "";
    });
  });
}

getStudents();
