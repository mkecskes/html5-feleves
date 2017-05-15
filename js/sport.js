window.onload = function() {
    var menuitems = document.getElementsByClassName("menuitem");
    for (var i = 0; i < menuitems.length; i++) {
        menuitems[i].onclick = function(i) {
            return function() {
                getPage(menuitems[i].getAttribute("href"));
            };
        }(i);
    }
    getPage(window.location.hash);
};

function getPage(location) {
    var contentEl = document.getElementById("content");
    contentEl.innerHTML = "<h1>Betöltés...</h1>";
    switch (location) {
        case "#sports":
            displayData("sport/entity/all", "Sportágak", contentEl, function (item) {
                var html = "<h2>" + item.name + "</h2><ul><li>azonosító: " +
                    item.id + "</li><li>leírás: " + item.description + "</li><li>speckók: <ul>";
                    item.specialization.forEach(function (item) {
                        html += "<li>" + item.name + " (" + item.description + ")</li>";
                    });
                html += "</ul></li></ul>";
                return html;
            });
            break;
        case "#championships":
            displayData("championship/entity/all", "Bajnokságok", contentEl, function (item) {
                var html = "<h2>" + item.name + "</h2><ul><li>azonosító: " +
                    item.id + "</li><li>leírás: " + item.description + "</li><li>események: <ul>";
                    item.event.forEach(function (item) {
                        html += "<li>" + item.sport.name + "</li>";
                        // item.sport.specialization.forEach()
                        // item.round.forEach()
                        // item.specialization.forEach()
                        // item.condition.forEach()
                    });
                html += "</ul></li></ul>";
                return html;
            });
            break;
        case "#seasons":
            break;
        case "#seria":
            break;
        default:
            contentEl.innerHTML = "<h1>Válassz a fenti menüpontok közül!</h1>";
            break;
    }
}

function displayData(path, title, contentEl, callback) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function () {
        var data = JSON.parse(this.responseText);
        var html = "<h1>" + title + "</h1>";
        for (var i = 0; i < data.length; i++) {
            html += callback(data[i]);
        }
        contentEl.innerHTML = html;
    });
    req.open("GET", baseurl + path);
    req.send();
}

