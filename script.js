/* googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function() {
	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
console.log('tag', googletag) */


/* let ad = document.querySelector('.ad-slot');
let google_con = document.querySelector('[id="google_ads_iframe_/49662453/dagensdk/desktop_float_0__container__"]');
let ad_container = document.querySelector('.ad-container');

setInterval(() => {
  if (ad && ad_container && google_con) {
    if (ad.innerHTML.trim() === "") {
      console.log('Float empty')
      return
    }
    else if (google_con) {
      if(google_con.innerHTML.trim() === "") {
        console.log('Float empty')
        return
      }
    }
    else {
      console.log('Float NOT empty')
      ad_container.classList.add('animation')
    }
  }
}, 1000); */




googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function() {
	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
    //data_adUnitId === "/49662453/DagensDK/Desktop_Float"
		var renderDiv = event.slot.getSlotElementId();

    console.log(renderDiv, 'add ')
    if (document.getElementById(renderDiv)) { 
      console.log('div her', renderDiv)
    }
    if (document.getElementById(renderDiv).dataset) { 
      data_adUnitId = document.getElementById(renderDiv).dataset.adUnitId;
      console.log('document.getElementById(renderDiv).dataset', document.getElementById(renderDiv).dataset)
      console.log('data_adUnitId', data_adUnitId)
    }
	});
});

     var data_adUnitId;
 if (document.getElementById(renderDiv)) {
   console.log('renderDiv getSlotElementId()', renderDiv)
   if (document.getElementById(renderDiv).dataset) {
     data_adUnitId = document.getElementById(renderDiv).dataset.adUnitId;
     console.log('1 data ad unit id fundet', data_adUnitId)
   }
 }
 if (data_adUnitId === "/49662453/DagensDK/Desktop_Float") {
   var renderDivElement = document.getElementById(renderDiv);
   console.log(renderDivElement, 'float div fundet')
   if (event.isEmpty) {
     if (renderDivElement.classList.indexOf("hidden") === -1) {
       console.log('render div add Float', renderDivElement)
       renderDivElement.classList.add("hidden");
     }
   } else {
     if (renderDivElement.classList.indexOf("hidden") > -1) {
       console.log('render div Float rem hidden', renderDivElement)
       renderDivElement.classList.remove("hidden");
     }
   }
 }




 googletag = googletag || {};
 googletag.cmd = googletag.cmd || [];
 let ad_container = document.querySelector('.ad-container');
 let ad = document.querySelector('.ad-slot');
 
 googletag.cmd.push(() => {
   googletag.pubads().addEventListener('slotRenderEnded', (event) => {
      
    const elementId = event.slot.getSlotElementId();
    const element = document.getElementById(elementId);
    
    if (!element) return;
    
    const dataAdUnitId = element.dataset?.adUnitId;

    if (dataAdUnitId === "/49662453/DagensDK/Desktop_Float") {
      ad_container.classList.remove('display') //  Hvad hvis man fjerner den helt
      
      setTimeout(() => {
        if (!event.isEmpty && element.innerHTML.trim() !== "" && ad.innerHTML.trim() !== "") {
          ad_container.classList.add('display')
          console.log('ad here')
        }
      }, "100");
     }

   });
 });

 async function closeAd() {
  document.getElementById('myAdContainer').remove()
}

