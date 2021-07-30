let name = document.querySelector("#name");
let job = document.querySelector("#job");
let Ophone = document.querySelector("#Ophone");
let Mphone = document.querySelector("#Mphone");
let mail = document.querySelector("#mail");
let site = document.querySelector("#site");
let adress = document.querySelector("#adress");
let linkedin = document.querySelector("#linkedin");
let facebook = document.querySelector("#facebook");
let instagram = document.querySelector("#insta");

name.oninput = () => {
  document.querySelector("#putName").innerHTML = name.value;
};
job.oninput = () => {
  document.querySelector("#putJob").innerHTML = job.value;
};
Ophone.oninput = () => {
  document.querySelector("#putOphone").innerHTML = Ophone.value;
};
Mphone.oninput = () => {
  document.querySelector("#putMphone").innerHTML = Mphone.value;
};
mail.oninput = () => {
  document.querySelector("#putMail").innerHTML = mail.value;
  document.querySelector("#putMail").href = mail.value;
};
site.oninput = () => {
  document.querySelector("#putSite").innerHTML = site.value;
  document.querySelector("#putMail").href = site.value;
};
adress.oninput = () => {
  document.querySelector("#putAdress").innerHTML = adress.value;
};
linkedin.oninput = () => {
  document.querySelector("#putLinkedin").href = linkedin.value;
};
facebook.oninput = () => {
  document.querySelector("#putFacebook").href = facebook.value;
};
instagram.oninput = () => {
  document.querySelector("#putInsta").href = instagram.value;
};

document.querySelector(".button").onclick = () => {
  let res = document.querySelector("table");
  console.log(res.outerHTML);
  document.querySelector("#res").innerText = res.outerHTML;
};
