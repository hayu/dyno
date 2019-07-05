function toggle() {
    var hello = document.getElementById("hello");
    var content;
    if (hello.getAttribute("lang") == "en") {
        hello.setAttribute("lang", "ch");
        content = "世界，你好!";
    } else {
        hello.setAttribute("lang", "en");
        content = "Hello World!";
    }
    hello.innerHTML = content;
}