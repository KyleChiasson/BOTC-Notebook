import React, { Component } from 'react';
import Emitter from '../EventEmitter';
import { Conditional } from './Conditional';
import { CharacterSheet } from './CharacterSheet';
import { NightOrder } from './NightOrder';
import characterList from '../Data/Characters.json';
import TBList from '../Data/Trouble Brewing.json';
import BMRList from '../Data/Bad Moon Rising.json';
import SNVList from '../Data/Sects and Violets.json';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            popup: "reset",
            characters: null,
            players: [],
            selectedPlayer: 0
        };
        Emitter.on('TogglePopup', (data) => {
            if (this.state.characters == null) return;
            if (this.state.popup === data.name)
                this.setState({ popup: "none" });
            else this.setState({ popup: data.name });
        });
        Emitter.on('Clear', (data) => {
            if (this.state.characters == null) return;
            var arr = this.state.players;
            arr.forEach(plr => { plr.Roles = [] });
            this.setState({ players: arr });
            document.getElementById("notes").reset(); //try not to reset name
        });
    }
    
    render() {
        const handleResetSubmit = (event) => {
            event.preventDefault();
            var form = document.getElementById('resetForm');
            var pc = form.elements['pc'].value;
            var plrLst = [];
            for (var i = 0; i < pc; i++)
                plrLst.push(JSON.parse(`{"Seat": "${i}", "Name": "Player", "Roles": []}`));

            var cl = [];
            if (form.elements["tb"].checked) cl = characterList.filter(c => TBList.slice(1).some(i => i === c.ID));
            if (form.elements["bmr"].checked) cl = characterList.filter(c => BMRList.slice(1).some(i => i === c.ID));
            if (form.elements["snv"].checked) cl = characterList.filter(c => SNVList.slice(1).some(i => i === c.ID));
            if (form.elements["su"].checked) {
                var uploadedScript = form.elements["scriptUpload"].files[0];
                if (!uploadedScript) return;
                var reader = new FileReader();
                var home = this;
                reader.onload = function (res) {
                    cl = characterList.filter(c => JSON.parse(res.target.result).slice(1).some(i => i === c.ID));
                    home.setState({ popup: "charactersheet", characters: cl });
                };
                reader.readAsText(uploadedScript);
            }
            else this.setState({ popup: "charactersheet", characters: cl, players: plrLst });
        }

        const blankSubmit = (event) => { event.preventDefault(); }

        const addCharacter = (name) => {
            var arr = this.state.players;
            arr[this.state.selectedPlayer].Roles.push(name);
            this.setState({ popup: "none", players: arr });
        }

        const removeCharacter = (player, name) => {
            var arr = this.state.players;
            arr[this.state.selectedPlayer].Roles = arr[this.state.selectedPlayer].Roles.filter(r => r !== name);
            this.setState({ popup: "none", players: arr });
        }

        const nameChanged = (event) => {
            const { name, value } = event.target;
            const match = name.match(/(\d+)$/);
            var num = parseInt(match[0], 10);
            var arr = this.state.players;
            arr[num].Name = value;
            this.setState({ players: arr });
        };

        return (
            <div>
                {this.state.popup !== "characterselect" ? <></> :
                    <div className="popup">
                        {this.state.characters.filter(c => !this.state.players[this.state.selectedPlayer].Roles.some(i => i === c.Name)).map(character =>
                            <button className="btn btn-primary" onClick={() => { addCharacter(character.Name); }}>{character.Name}</button>
                        )}
                    </div>
                }
                <Conditional enabled={this.state.popup === "charactersheet"}>
                    <CharacterSheet characters={this.state.characters} />
                </Conditional>
                <Conditional enabled={this.state.popup === "nightorder"}>
                    <NightOrder characters={this.state.characters} />
                </Conditional>
                {this.state.popup !== "grim" ? <></> :
                    <div className="popup">
                        <p>grim Test</p>
                    </div>
                }
                {this.state.popup === "reset" ?
                    <div className="popup">
                        <form id="resetForm" onSubmit={handleResetSubmit}>
                            <label id="pc">Player Count&nbsp;</label>
                            <input type="number" id="pc" min="5" max="15" defaultValue="10" /><br />
                            <input type="radio" id="tb" name="script" value="tb" defaultChecked /> Trouble Brewing<br />
                            <input type="radio" id="bmr" name="script" value="bmr" /> Bad Moon Rising<br />
                            <input type="radio" id="snv" name="script" value="snv" /> Sects and Violets<br />
                            <input type="radio" id="su" name="script" value="upload" /> Script Upload&nbsp;
                            <input type="file" id="scriptUpload" name="scriptUpload" accept=".json" /><br />
                            <input type="submit" value="Generate Grim" />
                        </form>
                    </div>
                    : <></>
                }
                {this.state.characters == null ? <></> :
                    <form id="notes" onSubmit={blankSubmit}>
                        <table className='table table-striped' aria-labelledby="tabelLabel">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Alignment</th>
                                    <th>Role</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.players.map(player =>
                                    <tr>
                                        <td><input className="normalText" type="text" name={`nameInput${player.Seat}`} defaultValue={player.Name} onChange={nameChanged} /></td>
                                        <td>
                                            <select id="alignment">
                                                <option value="good">Good</option>
                                                <option value="evil">Evil</option>
                                            </select>
                                        </td>
                                        <td>
                                            {player.Roles.map(role =>
                                                <button className="btn btn-primary" onClick={() => { removeCharacter(player.Seat, role) }}>{role}</button>
                                            )}
                                            <button className="btn btn-primary" onClick={() => { this.setState({ popup: "characterselect", selectedPlayer: player.Seat }); }}>+</button>
                                        </td>
                                        <td><textarea name="notes" /></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </form>
                }
            </div>
        );
    }
}

//tokens
//numbers 0-playercount
//yes/no
//clockwise/counterclockwise
//good/evil
//playernames
//all characters
//night death/day death (and types of deaths)/resurection
//survived execution
//no ability
//custom
//announcements (ex leviathan banshee widow)