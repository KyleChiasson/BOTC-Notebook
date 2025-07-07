const settings_id = 'settings_form'
const character_sheet_id = 'character_sheet_table'
const night_order_id = 'night_order_table'
const role_select_id = 'role_select'
const day_token_select_id = 'day_token_select'
const night_token_select_id = 'night_token_select'
const known_role_select_id = 'known_role_select'
const popup_id = 'popup'
const notes_id = 'notes_table'
const teams = ['Townsfolk', 'Outsiders', 'Minions', 'Demons']
const storage = sessionStorage
const day_tokens = ['Nominated', 'Voted', 'Used Dead Vote', 'Exexuted', 'Died', 'Custom Note']
const night_tokens = ['Died', 'Revived', 'Custom Note']

function render_page(){
    render_popup()
    render_notes()
}

function render_popup(){
    let popup = storage.getItem('popup')
    let popup_html = document.getElementById(popup_id)
    let close_popup_html = document.getElementById('close_popup')
    popup_html.classList.remove('hidden')
    close_popup_html.classList.remove('hidden')
    val = /*html*/``
    switch(popup){
        case settings_id: val = settings_html; break

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
            val += /*html*/`<table id="night_order_table"><tr><th class="left underline">First</th><th class="right underline">Other</th></tr>`
            for(let i = 0; i < Math.max(fno.length, ono.length); i++)
                val += /*html*/`<tr><td class="${(data.find(e => e.ID == fno[i]) ?? {"Team":""}).Team}">${i < fno.length ? fno[i] : ''}</td><td class="${(data.find(e => e.ID == ono[i]) ?? {"Team":""}).Team} right">${i < ono.length ? ono[i] : ''}</tr>`
            val += /*html*/`</table>`
            break

        case role_select_id:
            user_index = storage.getItem('selected_user')
            users = JSON.parse(storage.getItem('users'))
            labels = JSON.parse(storage.getItem('characters')).map(e => e.Name)
            val = generate_menu(labels, labels.map(e => users[user_index].Role.map(a => a.Name).includes(e)))
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
        
        case known_role_select_id:
            known =  JSON.parse(storage.getItem('known_roles'))
            labels = JSON.parse(storage.getItem('characters')).map(e => e.Name)
            val = generate_menu(labels, labels.map(e => known.map(a => a.Name).includes(e)))
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
                    <td class="${users[i].Alignment}"><input type="text" id="user_${i}_name" value="${users[i].Name}" onchange="update_name(${i})"></td>
                    <td class="${users[i].Alignment}"><select id="user_${i}_alignment" onchange="update_alignment(${i})"><option value="good"${users[i].Alignment == 'good' ? ' selected' : ''}>Good</option><option value="evil"${users[i].Alignment == 'evil' ? ' selected' : ''}>Evil</option></select></td>
                    <td class="${users[i].Alignment}"><button onClick="open_role_select(${i})">+</button></td>`

            for(let a = 0; a < days; a++){
                val += /*html*/`<td class="${users[i].Alignment}">`
                for(let b = 0; b < users[i].Nights[a].length; b++)
                    if(users[i].Nights[a][b] == 'Custom Note')
                        val += /*html*/`<input type="text">`
                    else
                        val += /*html*/`<a class="token">${users[i].Nights[a][b]}</a>`
                val += /*html*/`<button onClick="add_night_note(${i}, ${a})">+</button></td><td class="${users[i].Alignment}">`
                for(let b = 0; b < users[i].Days[a].length; b++)
                    if(users[i].Days[a][b] == 'Custom Note')
                        val += /*html*/`<input type="text">`
                    else
                        val += /*html*/`<a class="token">${users[i].Days[a][b]}</a>`
                val += /*html*/`<button onClick="add_day_note(${i}, ${a})">+</button></td>`
            }
            val += /*html*/`<td class="${users[i].Alignment}"></td></tr>`
            for(let a = 0; a < users[i].Role.length; a++){
                val += /*html*/`<tr><td></td><td></td><td>${users[i].Role[a].Name}</td>`
                for(let b = 0; b < days; b++){
                    val += /*html*/`
                        <td><input type="text" id="user_${i}_role_${a}_night_${b}_note" onchange="save_night_note(${i}, ${a}, ${b})" value="${users[i].Role[a].Nights[b]}"></td>
                        <td><input type="text" id="user_${i}_role_${a}_day_${b}_note" onchange="save_day_note(${i}, ${a}, ${b})" value="${users[i].Role[a].Days[b]}"></td>`
                }
                val += /*html*/`</tr>`
            }
        }
    val += /*html*/`
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td>Known Roles:</td><td></td><td><button onClick="set_popup('${known_role_select_id}')">+</button></td></tr>`
    let known = JSON.parse(storage.getItem('known_roles'))
    if(known)
        for(let i = 0; i < known.length; i++){
            val += /*html*/`<tr><td></td><td></td><td>${known[i].Name}</td>`
            for(let a = 0; a < days; a++){
                val += /*html*/`
                    <td><input type="text" id="known_${i}_night_${a}_note" onchange="save_known_night_note(${i}, ${a})" value="${known[i].Nights[a]}"></td>
                    <td><input type="text" id="known_${i}_day_${a}_note" onchange="save_known_day_note(${i}, ${a})" value="${known[i].Days[a]}"></td>`
            }
            val += /*html*/`</tr>`
        }
    document.getElementById(notes_id).innerHTML = val
}

function submit_settings(){
    let script_id = document.forms[settings_id]["script"].value;
    switch (script_id){
        case 'tb' : finish_settings(tb_json); break
        case 'snv': finish_settings(snv_json); break
        case 'bmr': finish_settings(bmr_json); break
        case 'custom':
            try {
                var file = document.getElementById("custom_script").files[0];
                var fileReader = new FileReader();
                fileReader.onload = function(fileLoadedEvent){ finish_settings(JSON.parse(fileLoadedEvent.target.result)) }
                fileReader.readAsText(file, "UTF-8");
            } catch (error) {
                alert("Please upload a valid custom script")
                return
            }
            break
    }
    return false
}

function finish_settings(script){
    script.shift()
    let list = []
    for(let i = 0; i < script.length; i++)
        list.push(characters_json.find(e => e.ID == script[i]))
    storage.setItem('characters', JSON.stringify(list))
    let users = []
    for(let i = 0; i < document.forms[settings_id]["count"].value; i++){
        users.push({})
        users[i].Name = `Player ${i + 1}`
        users[i].Alignment = 'good'
        users[i].Role = []
        users[i].Nights = []
        users[i].Days = []
    }
    storage.setItem('users', JSON.stringify(users))
    storage.setItem('days', 0)
    storage.setItem('known_roles', JSON.stringify([]))
    add_day()

    close_windows()
}

function set_popup(val){
    let list
    switch(storage.getItem('popup')){
        case role_select_id:
            list = get_menu_result()
            user_index = storage.getItem('selected_user')
            users = JSON.parse(storage.getItem('users'))
            old_list = users[user_index].Role
            day_count = storage.getItem('days')
            users[user_index].Role = []
            for(let i = 0; i < list.length; i++)
                if(list[i].Selected)
                    if(old_list.map(e => e.Name).includes(list[i].Name))
                        users[user_index].Role.push(old_list.find(e => e.Name == list[i].Name))
                    else{
                        users[user_index].Role.push({})
                        let last = users[user_index].Role.length - 1
                        users[user_index].Role[last].Name = list[i].Name
                        users[user_index].Role[last].Nights = []
                        users[user_index].Role[last].Days = []
                        for(let a = 0; a < day_count; a++){
                            users[user_index].Role[last].Nights.push([])
                            users[user_index].Role[last].Days.push([])
                        }
                    }
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

        case known_role_select_id:
            list = get_menu_result()
            known = []
            old_list = JSON.parse(storage.getItem('known_roles'))
            day_count = storage.getItem('days')
            for(let i = 0; i < list.length; i++)
                if(list[i].Selected)
                    if(old_list.map(e => e.Name).includes(list[i].Name))
                        known.push(old_list.find(e => e.Name == list[i].Name))
                    else{
                        known.push({})
                        let last = known.length - 1
                        known[last].Name = list[i].Name
                        known[last].Nights = []
                        known[last].Days = []
                        for(let a = 0; a < day_count; a++){
                            known[last].Nights.push([])
                            known[last].Days.push([])
                        }
                    }
            storage.setItem('known_roles', JSON.stringify(known))
            break
    }
    storage.setItem('popup', val)
    render_page()
}

function close_windows() { if(storage.getItem('characters') != null) set_popup('') }
function open_settings() { set_popup(settings_id) }
function open_character_sheet(){ set_popup(character_sheet_id) }
function open_night_order(){ set_popup(night_order_id) }

function open_role_select(user_index){ 
    storage.setItem('selected_user', user_index)
    set_popup(role_select_id) 
}

function init(){
    if (!storage.getItem('users')) open_settings()
    else{
        render_page()
        document.getElementById('other_notes_text').value = storage.getItem('other_notes') ?? ''
    }
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
    render_page()
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
    let known = JSON.parse(storage.getItem('known_roles'))
    for(let i = 0; i < known.length; i++){
        known[i].Days.push([]);
        known[i].Nights.push([]);
    }
    storage.setItem('known_roles', JSON.stringify(known))
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

function save_day_note(user_index, role_index, day_number){
    let users = JSON.parse(storage.getItem('users'))
    users[user_index].Role[role_index].Days[day_number] = document.getElementById(`user_${user_index}_role_${role_index}_day_${day_number}_note`).value
    storage.setItem('users', JSON.stringify(users))
}

function save_night_note(user_index, role_index, night_number){
    let users = JSON.parse(storage.getItem('users'))
    users[user_index].Role[role_index].Nights[night_number] = document.getElementById(`user_${user_index}_role_${role_index}_night_${night_number}_note`).value
    storage.setItem('users', JSON.stringify(users))
}

function save_other_note(){ storage.setItem('other_notes', document.getElementById('other_notes_text').value) }

function save_known_day_note(role_index, day_number){
    let known = JSON.parse(storage.getItem('known_roles'))
    known[role_index].Days[day_number] = document.getElementById(`known_${role_index}_day_${day_number}_note`).value
    storage.setItem('known_roles', JSON.stringify(known))
}

function save_known_night_note(role_index, night_number){
    let known = JSON.parse(storage.getItem('known_roles'))
    known[role_index].Nights[night_number] = document.getElementById(`known_${role_index}_night_${night_number}_note`).value
    storage.setItem('known_roles', JSON.stringify(known))
}

/**
 * Todo:
 * Replace role notes with actual info (will have to handle new instances of abilities)
 * Add fabled slot (could be added to known in play)
 * Add role changing (think barber/pithag)
 */
