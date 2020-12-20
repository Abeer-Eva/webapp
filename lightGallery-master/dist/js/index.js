
const key = '41533f5aef94ec0ab3395d2e5ab24876';
const listor = document.querySelector('#search-wrapper_pic_list');
const form = document.querySelector('.search-wrapper_form');
const searchTerm = document.querySelector('#query');



//Form function för att skriva och söka ord
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(searchTerm.value);      //consolar värdet av det som skrivs in i input
  getData(searchTerm.value);
});

//Async function with searchword.value as a parameter that gets the images from the url 
async function getData(query) {
  const response = await fetch(`https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=${query}&per_page=20&extras=media&content_type=1&
  &sort=relevance&format=json&nojsoncallback=1`);
  const data = await response.json();
  console.log(data);
  showPhotos(data.photos.photo);
};
//Function för att visa bilderna
function showPhotos(array) {
  console.log(array)
  //rensar listan inför varje sökning
  lightGallery.innerHTML = "";
  //itererar genom array av json.data.photos.photo[0],[1],[2] osv...
  array.forEach(value => {
    listUrl = `https://farm4.staticflickr.com/${value.server}/${value.id}_${value.secret}_m.jpg`;
    //Sparar och consolar Url som skall generera bilder på webbappen.skrivs över med value värden från loopen
    console.log(listUrl);

    //skapar ny list element
    const item = document.createElement('li');
    //skapar classer på listelementen
    item.classList.add("gallery");
    
    //skapar img taggar
    item.innerHTML = `<a href="https://live.staticflickr.com/${value.server}/${value.id}_${value.secret}_b.jpg">`+`<img src="https://live.staticflickr.com/${value.server}/${value.id}_${value.secret}_b.jpg" class="img-responsive">`+`</a>`;
    
 
 

    
    //lägger till img items på listan
    lightGallery.appendChild(item);
    console.log(value.title, value.id);

  });


  $('#lightGallery').lightGallery();


  //  Lightbox 
  $(document).ready(function() {
    
      $("#lightGallery").lightGallery();
    
    });
    $("#lightGallery").lightGallery({
      
        mode:'lg-slide',
  
       
        // Ex : 'ease'
    
        cssEasing:'ease',
    
        //'for jquery animation'
      
        easing:'linear',
      
        speed: 600,
  
        height:'100%',
        width:'100%',
        addClass:'',
      
        startClass:'lg-start-zoom',
        backdropDuration: 150,
        // Set 0, if u don't want to hide the controls
        hideBarsDelay: 6000,
        useLeft:false,
        // aria-labelledby attribute fot gallery
  
        ariaLabelledby: '',
        //aria-describedby attribute for gallery
    
        ariaDescribedby: '',
        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,
        getCaptionFromTitleOrAlt: true,
        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',
        subHtmlSelectorRelative: false,
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
      
        nextHtml: '',
        prevHtml: '',
        // 0, 1
        index: false,
        iframeMaxWidth: '100%',
        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',
        swipeThreshold: 50,
        enableSwipe:true,
        enableDrag:true,
        dynamic:false,
        dynamicEl: [],
    
        galleryId: 1,
        supportLegacyBrowser:true
      
      });}                     
          