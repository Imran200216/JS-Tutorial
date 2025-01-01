/// DOM => Document Object Modal 

console.log("Imran");
console.log(document.title);

let element = document.getElementById("name");
/// if i print the element, it shows only the full html tag
console.log(element);
/// if i print the element.textcontent, it shows the text content
console.log(element.textContent);

element.textContent += "Freakz";

let boxElement = document.getElementById("Box");
// to insert an tag
element.innerHTML = "<p>Hi!!</p>";
/// we can also style the font color 
element.style.color = "red";