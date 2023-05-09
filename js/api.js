const section = document.getElementById('section')
let pageNum = 1
const nav = `<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
<div class="container px-4 px-lg-5">
    <a class="navbar-brand" href="index.html">StartWars</a>
    
</div>
</nav>`
const hero = `<header class="masthead" style="background-image: url('assets/img/home.png')">
<div class="container position-relative px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
                <h1>Star Wars</h1>
                <span class="subheading">A list of star wars Characters</span>
            </div>
        </div>
    </div>
</div>
</header>`
let items = ''


    const pager = `<!-- Pager-->
    <div class="d-flex justify-content-end mb-4"><button id="next" class="btn btn-primary text-uppercase" onClick="nextPage()">Next →</button></div>`
    // pager.addEventListener('click', nextPage())
    function nextPage (){
        pageNum += 1
        console.log(pageNum)
        items= ""
        document.body.scrollTop = 400; // For Safari
  document.documentElement.scrollTop = 400; // For Chrome, Firefox, IE and Opera
        fetchApi()
    }
const next = document.getElementById('next')


section.innerHTML= nav
section.innerHTML+= hero

function fetchApi() {
    fetch('https://swapi.dev/api/people/?page='+ pageNum, {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json'
	},
	referrer: 'no-referrer'
}).then(function (response) {
	// The API call was successful!
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	// This is the JSON from our response
   
    data.results.map((item)=> {
        
        console.log(item.name)
        items+= `
        <div class="col-md-10 col-lg-4 col-xl-4">
                <!-- Post preview-->
                <div class="post-preview">
                    <div href="post.html">
                        <h2 class="post-title">${item.name}</h2>
                    </div>
                    <ul class="list-group">
  <li class="list-group-item">height: ${item.height}</li>
  <li class="list-group-item"> mass: ${item.mass} </li>
  <li class="list-group-item">Hair Color: ${item.hair_color} </li>
  <li class="list-group-item">Skin Color: ${item.skin_color} </li>
  <li class="list-group-item">Skin Color: ${item.skin_color}</li>
  <li class="list-group-item">Eye Color: ${item.eye_color}</li>
  <li class="list-group-item">Gender: ${item.gender}</li>
</ul>
                  
                </div>
                <!-- Divider-->
                <hr class="my-4" />
                </div>
               `
    })
    const mainCover =  `<div class="container px-4 px-lg-5">
<div class="row gx-4 gx-lg-5 justify-content-start">
    
    ${items}
    
     
     ${pager}
    </div>
</div>`
    section.innerHTML= nav
section.innerHTML+= hero
section.innerHTML+= mainCover

}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

}

fetchApi()
