
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
//Fetch function som hämtar data från Flickr API
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
  lightGallery.innerHTML ="";      
  //itererar genom array av json.data.photos.photo[0],[1],[2] osv...
  array.forEach(value => {
    listUrl= `https://farm4.staticflickr.com/${value.server}/${value.id}_${value.secret}_m.jpg`;
    //Sparar och consolar Url som skall generera bilder på webbappen.skrivs över med value värden från loopen
    console.log(listUrl); 
     //skapar ny list element
    const item = document.createElement('li');
    //skapar classer på listelementen
    item.classList.add('gallery'); 
    //skapar img taggar
    item.innerHTML = `<img src="${listUrl}" alt="${value.title}"  id="ID" herf=""></img>`; 
    //lägger till img items på listan
    lightGallery.appendChild(item); 
    console.log(value.title);

  });
};




//click på en bild som skicka sen till lightbox
document.getElementById('lightGallery').onclick= ()=>
{

//  Lightbox 
//thumb
$('#aniimated-thumbnials').lightGallery({
  thumbnail:true
}); 
//responsive bilder
$('#responsive-images').lightGallery(); 
var $methods = $('#methods');
var slide = '<a href="img/img2.jpg">' +
    '<img src="img/thumb2.jpg" />' +
'</a>';
 
$methods.lightGallery();
$('#appendSlide').on('click', function() {
    $methods.append(slide);
    $methods.data('lightGallery').destroy(true);
    $methods.lightGallery();
});
$('#fixed-size').lightGallery({
  width: '700px',
  height: '470px',
  mode: 'lg-fade',
  addClass: 'fixed-size',
  counter: false,
  download: false,
  startClass: '',
  enableSwipe: false,
  enableDrag: false,
  speed: 500
});


$('#custom-transitions').lightGallery({
  mode: 'lg-fade'
})
 

}
