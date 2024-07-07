let input = document.getElementsByTagName("input")[0]
let icon = document.getElementsByTagName("i")[0]
let search_box = document.getElementsByClassName("search-box")[0]

icon.addEventListener("click", function(){
    input.classList.toggle("input-shown")
    input.focus()
    search_box.classList.toggle("extands")
})