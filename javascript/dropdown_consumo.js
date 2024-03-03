const ML_URL = 'https://api.mercadolibre.com/sites/MLM/search?category=1055'
const cards = document.getElementById('cards_')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card_').content
const fragment = document.createDocumentFragment()

const drop = document.querySelector('.toggle span');
drop = addEventListener('DOMContentLoaded', e => { fetchData_() });


const navigation = document.querySelector('.navigation');
		document.querySelector('.toggle').onclick = function(){
			this.classList.toggle('active');
			navigation.classList.toggle('active');
		}
const fetchData_ = async () => {
    const res = await fetch(ML_URL);
    const data = await res.json()
    //console.log(data.results)
    pintarCards_(data.results)
}

// Pintar productos
const pintarCards_ = data => {
	templateCard.innerHTML = ''
    data.forEach(item => {
		templateCard.querySelector('li').innerHTML = `<li><a href="#${item.title}">${item.title}</a></li>` 
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
