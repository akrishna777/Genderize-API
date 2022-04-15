let formSubmit = document.getElementById('searchForm')
formSubmit.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
  e.preventDefault()
  let nameString = document.getElementById('searchName').value
  getData(nameString)
}

function getData(nameString) {
  fetch(`https://api.genderize.io?name=${nameString}`)
    .then((response) => response.json())
    .then((data) => printData(data))
}

function printData(data) {
  let results = document.getElementById('results')
  results.innerHTML = `   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <h6 class="card-subtitle mb-2">Possible Gender</h6>
                <p class="card-text">Gender: ${data.gender}</p>
                <p class="card-text">Probability: ${(
                  data.probability * 100
                ).toFixed(2)}%</p>
                
            </div>
        </div>
        `
}

function clear1() {
  let result = document.getElementById('results')
  result.innerHTML = ' '
}
