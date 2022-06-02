const beers = document.getElementById('wrapper');
function printBeer(name, desc, img){
  const card = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');
  const title = document.createElement('p');
  const opis = document.createElement('p');
  const imgCont = document.createElement('div');
  const image = document.createElement('img');
  card.classList = 'flip-card';
  title.textContent = name;
  opis.textContent = desc;
  image.src = img;
  imgCont.classList = 'imgCont'
  imgCont.append(image);
  back.append(opis);
  front.append(title, imgCont);
  back.classList = 'back';
  front.classList = 'front';
  opis.classList = 'text';
  title.classList = 'text title';
  card.append(front, back);
  beers.append(card);
  card.addEventListener('click', ()=>{
    card.classList.toggle('flipped');
  })
} 

function printBeers(data){
    for(let i=0; i<=10; i++){
        printBeer(data[i].name, data[i].description, data[i].image_url);
        }
}

fetch('https://api.punkapi.com/v2/beers').then((response) => {
    if(!response.ok){
        throw new Error('Something went horribly wrong'); 
}  console.log(response);
return response.json();
 }
).then(data => {
    printBeers(data);
 })
 .catch((error) => {
     console.log(error);
 });
