var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var siteArr = [];

function Submit() {
    if (siteName.value != "" && siteUrl.value != "") {
        hidealart();
        var siteObj = {
            sName: siteName.value,
            sUrl: siteUrl.value,
        };
        siteArr.push(siteObj);
        display();
        clearForm();
    } else if (siteName.value  == "" || siteUrl.value == "") {
        if (siteName.value == "" && siteUrl.value == "") {
            checkName();
            checkUrl();
        }
        if (siteName.value == "" && siteUrl.value != "") {
            hidealart();
            checkName();
        }
        if (siteName.value != "" && siteUrl.value == "") {
            hidealart();
            checkUrl();
        }
    }
}

function checkName() {
    nameError.innerHTML=`<p class="alert">Name is required</p>`
}

function checkUrl() {
    urlError.innerHTML=`<p class="alert">Url Field is required</p>`
}

function hidealart(){
    nameError.innerHTML=""
    urlError.innerHTML=""
}

function display() {
    var box = "";
    for (var i = 0; i < siteArr.length; i++) {
        box += `<div class="webwell row" id="${siteArr[i].sName}"><h2>${siteArr[i].sName}</h2><a class="btn" href="https://${siteArr[i].sUrl}" target="_blank">visit</a><button class="btn-danger" onclick="deleteFunc(${i})">Delete</button></div>`;
    }
    bookmarkList.innerHTML = box;
}

function clearForm() {
    siteName.value = "";
    siteUrl.value = "";
}

submitBtn.onclick = function () {
    Submit()
}


function deleteFunc(index) {
    siteArr.splice(index, 1)
    display()
}