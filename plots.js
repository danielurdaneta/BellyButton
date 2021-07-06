d3.json('samples.json').then(data => {
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    filteredWfrew = wfreq.filter(data => data != null)
    
})

d3.json('samples.json').then(data => {
    firstPerson = Object.entries(data.metadata[0]).forEach(([key,value]) => console.log(key + ':' + value))
    console.log(data)
})

d3.selectAll('body').on("change", updatePage)

function updatePage(){
    var dropDownMenu = d3.selectAll('#selectOption').node()
    var dropDownMenuID = dropDownMenu.id
    var selectedOption = dropDownMenu.value

    console.log(dropDownMenuID);
    console.log(selectedOption)
}