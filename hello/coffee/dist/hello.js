// Generated by CoffeeScript 2.4.1
var toggle;

toggle = function() {
  var content, hello, lang;
  lang = document.getElementById("lang");
  hello = document.getElementById("hello");
  content;
  if (lang.value === "en") {
    lang.value = "ch";
    content = "世界，你好!";
  } else {
    lang.value = "en";
    content = "Hello World!";
  }
  return hello.innerHTML = content;
};
