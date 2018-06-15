$(document).ready(inicio);

function inicio(){
    fetch('https://randomuser.me/api/?results=25')
    .then((response)=>response.json())
    .then(mostrar)
    .catch(error);

    $('button').click(()=> location.reload());
}

function mostrar(data){
    $(".container-fluid").append(`<div class="row"></div>`);

    data.results.map((person)=>{
        $('.row').append(`
        <div class="col-sm-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${person.picture.large}" alt="Card image cap">
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><ion-icon name="person"></ion-icon> ${person.name.first} ${person.name.last}</li>
                        <li class="list-group-item"><ion-icon name="home"></ion-icon> ${person.location.city}, ${person.location.state}</li>
                        <li class="list-group-item">${person.email}</li>
                    </ul>
                </div>
            </div>
            </div>
        `);
    });
}

function error(error){
    console.log(error);
}