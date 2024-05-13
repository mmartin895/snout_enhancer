function newListingGeneric(idHref,listingTitle){
    return 
    let element = `<li class=" EntityList-item EntityList-item--Latest EntityList-item--n1  bp-radix__faux-anchor  " data-href="${idHref}<" data-options="{&quot;hasCompare&quot;:false,&quot;isAdInSavedList&quot;:false,&quot;id&quot;:42637114}" style="">               
        <article class="entity-body cf">
                <h3 class="entity-title"><a name="42637114" class="link" href="/vhs-video/videorekorder-jvc-oglas-42637114">${listingTitle}</a></h3>
                <div class="entity-description">
                    <div class="entity-description-main"></div>
                </div>         
        </article>
    </li>`
    return element;
}
