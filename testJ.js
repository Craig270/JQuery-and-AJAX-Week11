let p = $("#test");
let div = $(".my-class");
let ul = $("ul");

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text("New Text");

//changes the attribute of a HTML element
$("input").attr("placeholder", "This is the place holder text ");
//adds element to the start of an element
div.prepend("<p>prepended paragraph</p>");
//adds lemeent  to the end of the element
div.append("<p> appended paragraph</p>");

//Add element before the element
div.before("<p> paragraph that was added before the div</p>");
//add element thing after the element
div.after("<p> paragraph added after the div</p>");

// div.empty removes from within that element

//ul.remove deletes the element from the DOM

//hides an element in the DOM
$("input").hide();
//after the time runs out 1000 for each second, the function is exicuted
setTimeout(() => $("input").show(), 2000);

//Uses j querry to stop bubbleing up through parents
$("input").stopPropagation();
