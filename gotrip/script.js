console.log('script working')
const stateForm = document.getElementById('form-state')
const topicForm = document.getElementById('form-topic')
const areaForm = document.getElementById('form-area')
const searchButton = document.getElementById('searchButton')
const npCards = document.getElementById('np-cards') 

axios.get('http://127.0.0.1:3001/api/nps')
    .then((res) => {
        console.log(res.data)
        const nps = res.data
        renderCards(nps)
        const stateList = []
        const topicList = []
        for (np of nps) {
            console.log(np.state)
            if (!stateList.includes(np.state)) {
                stateList.push(np.state)
            }
            if (!topicList.includes(np.topic)) {
                topicList.push(np.topic)
            }
        }
        stateList.sort()
        topicList.sort()
        console.log(stateList, topicList)
        for (state of stateList) {
            const node = document.createElement('option')
            node.innerHTML = state
            node.value = state
            stateForm.append(node)
        }
        for (topic of topicList) {
            const node = document.createElement('option')
            node.innerHTML = topic
            node.value = topic
            topicForm.append(node)
        }
    })
    .catch(error => console.log(error))

searchButton.addEventListener('click', async() => {
    npCards.innerHTML = ''
    const stateValue = stateForm.value ? `state=${stateForm.value}` : ''
    const topicValue = topicForm.value ? `&topic=${topicForm.value}` : ''
    const areaValue = areaForm.value ? `&area=${areaForm.value}` : ''
    console.log(stateValue, topicValue, areaValue)
    const npsResult = await axios.get(`http://127.0.0.1:3001/api/nps/find?${stateValue}${topicValue}${areaValue}`)
    const nps = npsResult.data
    console.log(nps)
    renderCards(nps)
})

function renderCards(nps) {
    for (np of nps) {
        // new row
        const row = document.createElement('div')
        row.className = 'col-md-6'
        row.id = np.name
        // new card
        const card = document.createElement('div')
        card.className = "card my-2 p-0"
        // image
        const img = document.createElement('img')
        console.log(img)
        img.src = np.image
        img.className = "card-img-top"
        img.alt = np.name
        // card body
        const cardBody = document.createElement('div')
        cardBody.className = "card-body"
        // card title and text
        const cardTitle = document.createElement('h5')
        cardTitle.className = "card-title"
        cardTitle.innerText = np.name
        const cardText = document.createElement('div')
        cardText.className = "card-text"
        cardText.innerHTML = `
        <p class='m-0 fw-bold'>${np.state}</p>
        <p class='lh-base m-0'>${np.latLng}</p>
        <p class='lh-base m-0'>Established in ${new Date(np.establishDate).toLocaleDateString('us-en',{year:'numeric', month:'long', day:'numeric'})}</p>
        <p class='lh-base m-0'>Area: ${np.area} km<sup>2</sup> </p>
        `
        // append
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        card.appendChild(img)
        card.appendChild(cardBody)
        row.appendChild(card)
        npCards.appendChild(row)

        row.addEventListener('click', function () {
            const name = this.id
            console.log(name)
            location.replace('np.html')
        })
    }
}
