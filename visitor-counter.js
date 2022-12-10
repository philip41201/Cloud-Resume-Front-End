function visitorCounter(){
    fetch("API_URL")
        .then(response => response.text())
        .then((body) => {
            document.getElementById("visitor-counter").innerHTML=body
        })
}