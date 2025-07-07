const SettingsId = 'settings-form'
const CharacterSheetId = 'character-sheet-table'
const NightOrderId = 'night-order-table'
const RoleSelectId = 'role-select'
const DayTokenSelectId = 'day-token-select'
const NightTokenSelectId = 'night-token-select'
const KnownRoleSelectId = 'known-role-select'
const PopupId = 'popup'
const NotesId = 'notes-table'
const Teams = ['townsfolk', 'outsider', 'minion', 'demon']
const Storage = sessionStorage
const DayTokens = ['Nominated', 'Voted', 'Used Dead Vote', 'Exexuted', 'Died', 'Custom Note']
const NightTokens = ['Died', 'Revived', 'Custom Note']

function render_page(){
    render_popup()
    render_notes()
}

function render_popup(){
    let popup = Storage.getItem('popup')
    let popupHtml = document.getElementById(PopupId)
    let closePopupHtml = document.getElementById('close-popup')
    popupHtml.classList.remove('hidden')
    closePopupHtml.classList.remove('hidden')
    let val = /*html*/``
    switch(popup){
        case SettingsId: {
            val = SettingsHtml 
            break
        }
        case CharacterSheetId: {
            let data = JSON.parse(Storage.getItem('characters'))
            val += /*html*/`<table id="character-sheet-table">`
            for(let t = 0; t < Teams.length; t++){
                val += /*html*/`<tr class="${Teams[t]} underline"><th>${Teams[t][0].toUpperCase() + Teams[t].slice(1)}</th><th></th></tr>`
                for(let i = 0; i < data.length; i++)
                    if(data[i].team == Teams[t])
                        val += /*html*/`<tr class="${Teams[t]}"><td>${data[i].name}</td><td> -${data[i].ability}</td></tr>`
            }
            val += /*html*/`</table>`
            break
        }
        case NightOrderId: {
            let data = JSON.parse(Storage.getItem('characters'))
            let fno = data.filter(e => e.firstNight != 0).sort((a, b) => a.firstNight > b.firstNight)
            let ono = data.filter(e => e.otherNight != 0).sort((a, b) => a.otherNight > b.otherNight)
            val += /*html*/`<table id="night-order-table"><tr><th class="left underline">First</th><th class="right underline">Other</th></tr>`
            for(let i = 0; i < Math.max(fno.length, ono.length); i++)
                val += /*html*/`<tr><td class="${i < fno.length ? fno[i].team : ''}">${i < fno.length ? fno[i].name : ''}</td><td class="${i < ono.length ? ono[i].team : ''} right">${i < ono.length ? ono[i].name : ''}</tr>`
            val += /*html*/`</table>`
            break
        }
        case RoleSelectId: {
            let userIndex = Storage.getItem('selected-user')
            let users = JSON.parse(Storage.getItem('users'))
            let labels = JSON.parse(Storage.getItem('characters')).map(e => e.name)
            val = generate_menu(labels, labels.map(e => users[userIndex].roles.map(a => a.name).includes(e)))
            break
        }
        case DayTokenSelectId: {
            let userIndex = Storage.getItem('selected-user')
            let dayIndex = Storage.getItem('selected-day')
            let users = JSON.parse(Storage.getItem('users'))
            val = generate_menu(DayTokens, DayTokens.map(e => users[userIndex].days[dayIndex].includes(e)))
            break
        }
        case NightTokenSelectId: {
            let userIndex = Storage.getItem('selected-user')
            let dayIndex = Storage.getItem('selected-day')
            let users = JSON.parse(Storage.getItem('users'))
            val = generate_menu(NightTokens, NightTokens.map(e => users[userIndex].nights[dayIndex].includes(e)))
            break
        }
        case KnownRoleSelectId: {
            let known =  JSON.parse(Storage.getItem('known-roles'))
            let labels = JSON.parse(Storage.getItem('characters')).map(e => e.name)
            val = generate_menu(labels, labels.map(e => known.map(a => a.name).includes(e)))
            break
        }
        default: {
            popupHtml.classList.add('hidden')
            closePopupHtml.classList.add('hidden')
            break
        }
    }
    document.getElementById(PopupId).innerHTML = val
}

function render_notes(){
    let val = /*html*/`<tr><th>Name</th><th>Alignment</th><th>Role</th>`
    let days = Storage.getItem('days');
    for(let i = 1; i <= days; i++)
        val += /*html*/`<th>Night ${i}</th><th>Day ${i}</th>`
    val += /*html*/`<th><button onclick="add_day()">+</button></th></tr>`
    let users = JSON.parse(Storage.getItem('users'))
    if(users)
        for(let i = 0; i < users.length; i++){
            val += /*html*/`
                <tr>
                    <td class="${users[i].alignment}"><input type="text" id="user-${i}-name" value="${users[i].name}" onchange="update_name(${i})"></td>
                    <td class="${users[i].alignment}"><select id="user-${i}-alignment" onchange="update_alignment(${i})"><option value="good"${users[i].alignment == 'good' ? ' selected' : ''}>Good</option><option value="evil"${users[i].alignment == 'evil' ? ' selected' : ''}>Evil</option></select></td>
                    <td class="${users[i].alignment}"><button onclick="open_role_select(${i})">+</button></td>`

            for(let a = 0; a < days; a++){
                val += /*html*/`<td class="${users[i].alignment}">`
                for(let b = 0; b < users[i].nights[a].length; b++)
                    if(users[i].nights[a][b] == 'Custom Note')
                        val += /*html*/`<input type="text">`
                    else
                        val += /*html*/`<a class="token">${users[i].nights[a][b]}</a>`
                val += /*html*/`<button onclick="add_night_note(${i}, ${a})">+</button></td><td class="${users[i].alignment}">`
                for(let b = 0; b < users[i].days[a].length; b++)
                    if(users[i].days[a][b] == 'Custom Note')
                        val += /*html*/`<input type="text">`
                    else
                        val += /*html*/`<a class="token">${users[i].days[a][b]}</a>`
                val += /*html*/`<button onclick="add_day_note(${i}, ${a})">+</button></td>`
            }
            val += /*html*/`<td class="${users[i].alignment}"></td></tr>`
            for(let a = 0; a < users[i].roles.length; a++){
                val += /*html*/`<tr><td></td><td></td><td>${users[i].roles[a].name}</td>`
                for(let b = 0; b < days; b++){
                    val += /*html*/`
                        <td><input type="text" id="user-${i}-role-${a}-night-${b}-note" onchange="save_night_note(${i}, ${a}, ${b})" value="${users[i].roles[a].nights[b]}"></td>
                        <td><input type="text" id="user-${i}-role-${a}-day-${b}-note" onchange="save_day_note(${i}, ${a}, ${b})" value="${users[i].roles[a].days[b]}"></td>`
                }
                val += /*html*/`</tr>`
            }
            val += /*html*/`<tr><td class="${users[i].alignment}"></td><td class="${users[i].alignment}"></td><td class="${users[i].alignment}"></td>`
            for(let a = 0; a < days; a++)
                val += /*html*/`<td class="${users[i].alignment}"></td><td class="${users[i].alignment}"></td>`
            val += /*html*/`<td class="${users[i].alignment}"></td></tr>`
        }
    val += /*html*/`
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td>Known Roles:</td><td></td><td><button onclick="set_popup('${KnownRoleSelectId}')">+</button></td></tr>`
    let known = JSON.parse(Storage.getItem('known-roles'))
    if(known)
        for(let i = 0; i < known.length; i++){
            val += /*html*/`<tr><td></td><td></td><td>${known[i].name}</td>`
            for(let a = 0; a < days; a++){
                val += /*html*/`
                    <td><input type="text" id="known-${i}-night-${a}-note" onchange="save_known_night_note(${i}, ${a})" value="${known[i].nights[a]}"></td>
                    <td><input type="text" id="known-${i}-day-${a}-note" onchange="save_known_day_note(${i}, ${a})" value="${known[i].days[a]}"></td>`
            }
            val += /*html*/`</tr>`
        }
    document.getElementById(NotesId).innerHTML = val
}

function submit_settings(){
    let scriptId = document.forms[SettingsId]["script"].value;
    if(scriptId == 'custom'){
        try {
            var file = document.getElementById("custom-script").files[0];
            var fileReader = new FileReader();
            fileReader.onload = function(fileLoadedEvent){ 
                let script = JSON.parse(fileLoadedEvent.target.result)
                script.shift()
                let characters = BOTC_JSON.roles.filter(e => script.includes(e.name))
                if(characters.length != script.length)
                    throw this.error;
                finish_settings(characters)
            }
            fileReader.readAsText(file, "UTF-8");
        } catch (error) {
            alert("Please upload a valid custom script")
            return
        }
    }
    else{
        finish_settings(BOTC_JSON.roles.filter(e => e.edition == scriptId && e.team != 'traveller'))
    }
    return false
}

function finish_settings(characters){
    Storage.setItem('characters', JSON.stringify(characters))
    let users = []
    for(let i = 0; i < document.forms[SettingsId]["count"].value; i++){
        users.push({})
        users[i].name = `Player ${i + 1}`
        users[i].alignment = 'good'
        users[i].roles = []
        users[i].nights = []
        users[i].days = []
    }
    Storage.setItem('users', JSON.stringify(users))
    Storage.setItem('days', 0)
    Storage.setItem('known-roles', JSON.stringify([]))
    add_day()
    close_windows()
}

function set_popup(val){
    switch(Storage.getItem('popup')){
        case RoleSelectId: {
            let list = get_menu_result()
            let userIndex = Storage.getItem('selected-user')
            let users = JSON.parse(Storage.getItem('users'))
            let oldList = users[userIndex].roles
            let dayCount = Storage.getItem('days')
            users[userIndex].roles = []
            for(let i = 0; i < list.length; i++)
                if(list[i].selected)
                    if(oldList.map(e => e.name).includes(list[i].name))
                        users[userIndex].roles.push(oldList.find(e => e.name == list[i].name))
                    else{
                        users[userIndex].roles.push({})
                        let last = users[userIndex].roles.length - 1
                        users[userIndex].roles[last].name = list[i].name
                        users[userIndex].roles[last].nights = []
                        users[userIndex].roles[last].days = []
                        for(let a = 0; a < dayCount; a++){
                            users[userIndex].roles[last].nights.push('')
                            users[userIndex].roles[last].days.push('')
                        }
                    }
            Storage.setItem('users', JSON.stringify(users))
            break
        }
        case DayTokenSelectId: {
            let list = get_menu_result()
            let userIndex = Storage.getItem('selected-user')
            let dayIndex = Storage.getItem('selected-day')
            let users = JSON.parse(Storage.getItem('users'))
            users[userIndex].days[dayIndex] = list.filter(e => e.selected).map(e => e.name)
            Storage.setItem('users', JSON.stringify(users))
            break;
        }
        case NightTokenSelectId: {
            let list = get_menu_result()
            let userIndex = Storage.getItem('selected-user')
            let dayIndex = Storage.getItem('selected-day')
            let users = JSON.parse(Storage.getItem('users'))
            users[userIndex].nights[dayIndex] = list.filter(e => e.selected).map(e => e.name)
            Storage.setItem('users', JSON.stringify(users))
            break;
        }
        case KnownRoleSelectId: {
            let list = get_menu_result()
            let known = []
            let oldList = JSON.parse(Storage.getItem('known-roles'))
            let dayCount = Storage.getItem('days')
            for(let i = 0; i < list.length; i++)
                if(list[i].selected)
                    if(oldList.map(e => e.name).includes(list[i].name))
                        known.push(oldList.find(e => e.name == list[i].name))
                    else{
                        known.push({})
                        let last = known.length - 1
                        known[last].name = list[i].name
                        known[last].nights = []
                        known[last].days = []
                        for(let a = 0; a < dayCount; a++){
                            known[last].nights.push('')
                            known[last].days.push('')
                        }
                    }
            Storage.setItem('known-roles', JSON.stringify(known))
            break
        }
    }
    Storage.setItem('popup', val)
    render_page()
}

function close_windows() { if(Storage.getItem('characters') != null) set_popup('') }
function open_settings() { set_popup(SettingsId) }
function open_character_sheet(){ set_popup(CharacterSheetId) }
function open_night_order(){ set_popup(NightOrderId) }

function open_role_select(userIndex){ 
    Storage.setItem('selected-user', userIndex)
    set_popup(RoleSelectId) 
}

function init(){
    if (!Storage.getItem('users')) open_settings()
    else{
        render_page()
        document.getElementById('other-notes-text').value = Storage.getItem('other-notes') ?? ''
    }
}

function update_name(userIndex){
    let users = JSON.parse(Storage.getItem('users'))
    users[userIndex].name = document.getElementById(`user-${userIndex}-name`).value
    Storage.setItem('users', JSON.stringify(users))
}

function update_alignment(userIndex){
    let users = JSON.parse(Storage.getItem('users'))
    users[userIndex].alignment = document.getElementById(`user-${userIndex}-alignment`).value
    Storage.setItem('users', JSON.stringify(users))
    render_notes()
}

function add_day(){
    Storage.setItem('days', Number(Storage.getItem('days')) + 1)
    let users = JSON.parse(Storage.getItem('users'))
    for(let i = 0; i < users.length; i++){
        users[i].days.push([]);
        users[i].nights.push([]);
        for(let a = 0; a < users[i].roles.length; a++){
            users[i].roles[a].nights.push('')
            users[i].roles[a].days.push('')
        }
    }
    Storage.setItem('users', JSON.stringify(users))
    let known = JSON.parse(Storage.getItem('known-roles'))
    for(let i = 0; i < known.length; i++){
        known[i].days.push('');
        known[i].nights.push('');
    }
    Storage.setItem('known-roles', JSON.stringify(known))
    render_page()
}

function add_day_note(userIndex, dayNumber){
    Storage.setItem('selected-user', userIndex)
    Storage.setItem('selected-day', dayNumber)
    set_popup(DayTokenSelectId)
}

function add_night_note(userIndex, nightNumber){
    Storage.setItem('selected-user', userIndex)
    Storage.setItem('selected-day', nightNumber)
    set_popup(NightTokenSelectId)
}

function save_day_note(userIndex, roleIndex, dayNumber){
    let users = JSON.parse(Storage.getItem('users'))
    users[userIndex].roles[roleIndex].days[dayNumber] = document.getElementById(`user-${userIndex}-role-${roleIndex}-day-${dayNumber}-note`).value
    Storage.setItem('users', JSON.stringify(users))
}

function save_night_note(userIndex, roleIndex, nightNumber){
    let users = JSON.parse(Storage.getItem('users'))
    users[userIndex].roles[roleIndex].nights[nightNumber] = document.getElementById(`user-${userIndex}-role-${roleIndex}-night-${nightNumber}-note`).value
    Storage.setItem('users', JSON.stringify(users))
}

function save_other_note(){ Storage.setItem('other-notes', document.getElementById('other-notes-text').value) }

function save_known_day_note(roleIndex, dayNumber){
    let known = JSON.parse(Storage.getItem('known-roles'))
    known[roleIndex].days[dayNumber] = document.getElementById(`known-${roleIndex}-day-${dayNumber}-note`).value
    Storage.setItem('known-roles', JSON.stringify(known))
}

function save_known_night_note(roleIndex, nightNumber){
    let known = JSON.parse(Storage.getItem('known-roles'))
    known[roleIndex].nights[nightNumber] = document.getElementById(`known-${roleIndex}-night-${nightNumber}-note`).value
    Storage.setItem('known-roles', JSON.stringify(known))
}

/**
 * Todo:
 * Replace role notes with actual info (will have to handle new instances of abilities)
 * Add fabled slot (could be added to known in play)
 * Add role changing (think barber/pithag)
 * 
 * !!! doesn't save custom notes
 */
