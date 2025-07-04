function generate_menu(options, selected){
    let list = []
    let html = /*html*/`<div name="selection">`
    for(let i = 0; i < options.length; i++){
        list.push({'Name': options[i], 'Selected': selected[i]})
        html += /*html*/`<input type="checkbox" id="select_${i}" onChange="menu_callback(${i})"${selected[i] ? " checked" : ""}><label for="select_${i}">${options[i]}</label><br>`
    }
    sessionStorage.setItem('selection', JSON.stringify(list))
    return html + /*html*/`</div>`
}

function menu_callback(option_index){
    let list = JSON.parse(sessionStorage.getItem('selection'))
    list[option_index].Selected = document.getElementById(`select_${option_index}`).checked
    sessionStorage.setItem('selection', JSON.stringify(list))
}

function get_menu_result(){ return JSON.parse(sessionStorage.getItem('selection')) }
