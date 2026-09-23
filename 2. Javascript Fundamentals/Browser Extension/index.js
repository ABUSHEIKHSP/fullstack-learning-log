
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const saveTabBtn = document.getElementById("save-tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

let locallyStoredLeads = getLocallyStoredLeads("myLeads")

autoRender()

function autoRender() {
    if (locallyStoredLeads != null)
        render(locallyStoredLeads)
    else {
        locallyStoredLeads = []
    }
}


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
                        <a id="a-el" href=${leads[i]} target='_blank'>
                            ${leads[i]} 
                        </a>   
                    </li>`
    }

    ulEl.innerHTML += listItems
}

function getLocallyStoredLeads(key) {
    const list = JSON.parse(localStorage.getItem(key))
    console.log(list)
    return list
}

function saveToLocalStorage(key, value) {
    const stringifiedList = JSON.stringify(value)
    localStorage.setItem(key, stringifiedList)
}

saveBtn.addEventListener("click", function() {
    const newLead = inputEl.value
    render([newLead])
    locallyStoredLeads.push(newLead)
    saveToLocalStorage("myLeads", locallyStoredLeads)
    console.log(inputEl.value)

    inputEl.value = ""
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    ulEl.textContent = ""
})

saveTabBtn.addEventListener("click", async function() {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    render([tabs[0].url])
    locallyStoredLeads.push(tabs[0].url)
    saveToLocalStorage("myLeads", locallyStoredLeads)

    console.log(tabs[0].url)

})
