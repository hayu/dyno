toggle = ->
    lang = document.getElementById("lang");
    hello = document.getElementById("hello");
    content;
    if lang.value == "en"
        lang.value = "ch"
        content = "世界，你好!"
    else
        lang.value = "en"
        content = "Hello World!"
    hello.innerHTML = content
