function newListingGeneric(idHref, listingTitle) {

    let element = `<li class=" EntityList-item EntityList-item--Latest EntityList-item--n1  bp-radix__faux-anchor  " data-href="${idHref}<" data-options="{&quot;hasCompare&quot;:false,&quot;isAdInSavedList&quot;:false,&quot;id&quot;:42637114}" style="">               
        <article class="entity-body cf">
                <h3 class="entity-title"><a name="42637114" class="link" href="${idHref}">${listingTitle}</a></h3>
                <div class="entity-description">
                    <div class="entity-description-main"></div>
                </div>         
        </article>
    </li>`
    return element;
}

var storeElements = document.querySelectorAll('.EntityList.EntityList--FeaturedStore');

storeElements.forEach(function (element) {
    element.remove(); // Removes the element from the DOM
});

var latestList = document.querySelector('div.EntityList.EntityList--Latest ').querySelector('ul.EntityList-items');
while (latestList && latestList.firstChild) {
    latestList.removeChild(latestList.firstChild);
}

let ulElements = document.querySelectorAll('ul.EntityList-items');

function isDateToday(savedDateIsoString) {
    const savedDate = new Date(savedDateIsoString);
    const today = new Date();

    return savedDate.getDate() === today.getDate() &&
        savedDate.getMonth() === today.getMonth() &&
        savedDate.getFullYear() === today.getFullYear();
}

ulElements.forEach(function (div) {

    let oglasi = div.querySelectorAll('li.EntityList-item');
    oglasi.forEach(function (oglas) {
        let dataHrefValue = oglas.getAttribute('data-href')
        let naslov = oglas.getAttribute('data-href')
        // let naslov = oglas.querySelector('h3.entity-title a').textContent;

        oglas.style.backgroundColor = 'white';

        chrome.storage.local.get(dataHrefValue, function (result) {


            if (!result[dataHrefValue] || isDateToday(result[dataHrefValue])) {
                latestList.innerHTML += newListingGeneric(dataHrefValue, naslov)

                oglas.style.backgroundColor = 'rgb(238, 238, 144,0.5)';
                // oglas.style.backgroundColor = 'red';
                if (!result[dataHrefValue]) {

                    var saveObj = {};
                    saveObj[dataHrefValue] = new Date().toISOString();
                    chrome.storage.local.set(saveObj, function () {
                        console.log('Stored new listing: ' + uniqueId);
                    });
                }
            }
        });

    })


}); 