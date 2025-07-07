function generate_menu(options, selected){
    let list = []
    let html = /*html*/`<div name="selection">`
    for(let i = 0; i < options.length; i++){
        list.push({'name': options[i], 'selected': selected[i]})
        html += /*html*/`<input type="checkbox" id="select-${i}" onchange="menu_callback(${i})"${selected[i] ? " checked" : ""}><label for="select_${i}">${options[i]}</label><br>`
    }
    sessionStorage.setItem('selection', JSON.stringify(list))
    return html + /*html*/`</div>`
}

function menu_callback(optionIndex){
    let list = JSON.parse(sessionStorage.getItem('selection'))
    list[optionIndex].selected = document.getElementById(`select-${optionIndex}`).checked
    sessionStorage.setItem('selection', JSON.stringify(list))
}

function get_menu_result(){ return JSON.parse(sessionStorage.getItem('selection')) }
