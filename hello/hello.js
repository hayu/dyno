function toggle() {
    var lang = document.getElementById("lang");
    var hello = document.getElementById("hello");
    var content;
    if (lang.value == "en") {
        lang.value ="ch";
        content = "世界，你好!";
    } else {
        lang.value ="en";
        content = "Hello World!";
    }
    hello.innerHTML = content;
}