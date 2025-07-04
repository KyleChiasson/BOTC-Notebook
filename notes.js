//constants
const settings_id = 'settings_form'
const character_sheet_id = 'character_sheet_table'
const night_order_id = 'night_order_table'
const role_select_id = 'role_select'
const day_token_select_id = 'day_token_select'
const night_token_select_id = 'night_token_select'
const popup_id = 'popup'
const notes_id = 'notes_table'
const teams = ['Townsfolk', 'Outsiders', 'Minions', 'Demons']
const storage = sessionStorage
const day_tokens = ['Nominated', 'Voted', 'Used Dead Vote', 'Exexuted', 'Died', 'Custom Note']
const night_tokens = ['Died', 'Revived', 'Custom Note']

//render functions
function render_page(){
    render_popup()
    render_notes()
}

function render_popup(){
    let popup = storage.getItem('popup')
    let popup_html = document.getElementById(popup_id)
    let close_popup_html = document.getElementById('close-popup')
    popup_html.classList.remove('hidden')
    close_popup_html.classList.remove('hidden')
    val = /*html*/``
    switch(popup){
        case settings_id:
            val = settings_html
            break

        case character_sheet_id:
            data = JSON.parse(storage.getItem('characters'))
            val += /*html*/`<table id="character_sheet_table">`
            for(let t = 0; t < teams.length; t++){
                val += /*html*/`<tr class="${teams[t]} underline"><th>${teams[t]}</th><th></th></tr>`
                for(let i = 0; i < data.length; i++)
                    if(data[i].Team == teams[t])
                        val += /*html*/`<tr class="${teams[t]}"><td>${data[i].Name}</td><td> -${data[i].Ability}</td></tr>`
            }
            val += /*html*/`</table>`
            break

        case night_order_id:
            data = JSON.parse(storage.getItem('characters'))
            let fno = first_night_order_json.filter(e => data.find(f => f.ID == e) || required_night_order_json.find(f => f == e))
            let ono = other_night_order_json.filter(e => data.find(f => f.ID == e) || required_night_order_json.find(f => f == e))
            val += /*html*/`<table id="night_order_table"><tr class="left underline"><th>First</th><th>Other</th></tr>`
            for(let i = 0; i < Math.max(fno.length, ono.length); i++)
                val += /*html*/`<tr><td class="${(data.find(e => e.ID == fno[i]) ?? {"Team":""}).Team}">${i < fno.length ? fno[i] : ''}</td><td class="${(data.find(e => e.ID == ono[i]) ?? {"Team":""}).Team}">${i < ono.length ? ono[i] : ''}</tr>`
            val += /*html*/`</table>`
            break

        case role_select_id:
            user_index = storage.getItem('selected_user')
            users = JSON.parse(storage.getItem('users'))
            val = generate_menu(JSON.parse(storage.getItem('characters')).map(e => e.Name), users[user_index].Role.map(e => e.Enabled))
            break

        case day_token_select_id:
            user_index = storage.getItem('selected_user')
            day_index = storage.getItem('selected_day')
            users = JSON.parse(storage.getItem('users'))
            val = generate_menu(day_tokens, day_tokens.map(e => users[user_index].Days[day_index].includes(e)))
            break
        
        case night_token_select_id:
            user_index = storage.getItem('selected_user')
            day_index = storage.getItem('selected_day')
            users = JSON.parse(storage.getItem('users'))
            val = generate_menu(night_tokens, night_tokens.map(e => users[user_index].Nights[day_index].includes(e)))
            break
        
        default:
            popup_html.classList.add('hidden')
            close_popup_html.classList.add('hidden')
            break
    }
    document.getElementById(popup_id).innerHTML = val
}

function render_notes(){
    let val = /*html*/`<tr><th>Name</th><th>Alignment</th><th>Role</th>`
    let days = storage.getItem('days');
    for(let i = 1; i <= days; i++)
        val += /*html*/`<th>Night ${i}</th><th>Day ${i}</th>`
    val += /*html*/`<th><button onClick="add_day()">+</button></th></tr>`
    let users = JSON.parse(storage.getItem('users'))
    if(users)
        for(let i = 0; i < users.length; i++){
            val += /*html*/`
                <tr>
                    <td><input type="text" id="user_${i}_name" value="${users[i].Name}" onchange="update_name(${i})"></td>
                    <td><select id="user_${i}_alignment" onchange="update_alignment(${i})"><option value="good"${users[i].Alignment == 'good' ? ' selected' : ''}>Good</option><option value="evil"${users[i].Alignment == 'evil' ? ' selected' : ''}>Evil</option></select></td>
                    <td><button onClick="open_role_select(${i})">+</button></td>`

            for(let a = 0; a < days; a++){
                val += /*html*/`<td>`
                for(let b = 0; b < users[i].Nights[a].length; b++)
                    if(users[i].Nights[a][b] == 'Custom Note')
                        val += /*html*/`<input type="text">`
                    else
                        val += /*html*/`<a>${users[i].Nights[a][b]}</a>`
                val += /*html*/`<button onClick="add_night_note(${i}, ${a})">+</button></td><td>`
                for(let b = 0; b < users[i].Days[a].length; b++)
                    if(users[i].Days[a][b] == 'Custom Note')
                        val += /*html*/`<input type="text">`
                    else
                        val += /*html*/`<a>${users[i].Days[a][b]}</a>`
                val += /*html*/`<button onClick="add_day_note(${i}, ${a})">+</button></td>`
            }

            val += /*html*/`</tr>`
            for(let a = 0; a < users[i].Role.length; a++)
                if(users[i].Role[a].Enabled){
                    val += /*html*/`<tr><td></td><td></td><td>${users[i].Role[a].Name}</td>`
                    for(let b = 0; b < days; b++){
                        val += /*html*/`
                            <td><input type="text"></td>
                            <td><input type="text"></td>`
                    }
                    val += /*html*/`</tr>`
                }
        }
    document.getElementById(notes_id).innerHTML = val
}

//helper functions
function submit_settings(){
    let script_id = document.forms[settings_id]["script"].value;
    let script = tb_json
    switch (script_id){
        case 'snv': script = snv_json; break
        case 'bmr': script = bmr_json; break
    }
    script.shift()
    let list = []
    for(let i = 0; i < script.length; i++)
        list.push(characters_json.find(e => e.ID == script[i]))
    storage.setItem('characters', JSON.stringify(list))
    let users = []
    for(let i = 0; i < document.forms[settings_id]["count"].value; i++){
        users.push({})
        users[i].Name = '<name>'
        users[i].Alignment = 'good'
        users[i].Role = []
        for(let a = 0; a < list.length; a++){
            users[i].Role.push({})
            users[i].Role[a].Name = list[a].Name
            users[i].Role[a].Enabled = false
            users[i].Role[a].Nights = []
            users[i].Role[a].Days = []
        }
        users[i].Nights = []
        users[i].Days = []
    }
    storage.setItem('users', JSON.stringify(users))
    storage.setItem('days', 0)
    add_day()

    close_windows()
    return false
}

function set_popup(val){
    let list
    switch(storage.getItem('popup')){
        case role_select_id:
            list = get_menu_result()
            user_index = storage.getItem('selected_user')
            users = JSON.parse(storage.getItem('users'))
            for(let i = 0; i < users[user_index].Role.length; i++)
                users[user_index].Role[i].Enabled = list[i].Selected
            storage.setItem('users', JSON.stringify(users))
            break

        case day_token_select_id:
            list = get_menu_result()
            user_index = storage.getItem('selected_user')
            day_index = storage.getItem('selected_day')
            users = JSON.parse(storage.getItem('users'))
            users[user_index].Days[day_index] = list.filter(e => e.Selected).map(e => e.Name)
            storage.setItem('users', JSON.stringify(users))
            break;
        
        case night_token_select_id:
            list = get_menu_result()
            user_index = storage.getItem('selected_user')
            day_index = storage.getItem('selected_day')
            users = JSON.parse(storage.getItem('users'))
            users[user_index].Nights[day_index] = list.filter(e => e.Selected).map(e => e.Name)
            storage.setItem('users', JSON.stringify(users))
            break;
    }
    storage.setItem('popup', val)
    render_page()
}
function close_windows() { set_popup('') }
function open_settings() { set_popup(settings_id) }
function open_character_sheet(){ set_popup(character_sheet_id) }
function open_night_order(){ set_popup(night_order_id) }
function open_role_select(user_index){ 
    storage.setItem('selected_user', user_index)
    set_popup(role_select_id) 
}

//mutator functions
function init(){
    if (!storage.getItem('users'))
        open_settings()
    else render_page()
}

function update_name(user_index){
    let users = JSON.parse(storage.getItem('users'))
    users[user_index].Name = document.getElementById(`user_${user_index}_name`).value
    storage.setItem('users', JSON.stringify(users))
}

function update_alignment(user_index){
    let users = JSON.parse(storage.getItem('users'))
    users[user_index].Alignment = document.getElementById(`user_${user_index}_alignment`).value
    storage.setItem('users', JSON.stringify(users))
}

function add_day(){
    storage.setItem('days', Number(storage.getItem('days')) + 1)
    let users = JSON.parse(storage.getItem('users'))
    for(let i = 0; i < users.length; i++){
        users[i].Days.push([]);
        users[i].Nights.push([]);
        for(let a = 0; a < users[i].Role.length; a++){
            users[i].Role[a].Nights.push([])
            users[i].Role[a].Days.push([])
        }
    }
    storage.setItem('users', JSON.stringify(users))
    render_page()
}

function add_day_note(user_index, day_number){
    storage.setItem('selected_user', user_index)
    storage.setItem('selected_day', day_number)
    set_popup(day_token_select_id)
}

function add_night_note(user_index, night_number){
    storage.setItem('selected_user', user_index)
    storage.setItem('selected_day', night_number)
    set_popup(night_token_select_id)
}

/**
 * Todo:
 * Save custom notes and other notes
 * Replace role notes with actual info
 * Save all day/night buttons (could make into tags like roles)
 * Add custom script upload
 * Make CSS
 * Add fabled slot
 * Add known in play slot
 */
