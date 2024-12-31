import React, { Component } from 'react';

export class CharacterSheet extends Component {
    static displayName = CharacterSheet.name;

    render() {
        return (
            <>
                <div className="popup">
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead><tr><th className='good'>Townsfolk</th></tr></thead>
                        <tbody>
                            {this.props.characters.filter(character => character.Team === "Townsfolk").map(character =>
                                <tr>
                                    <td className='good'>{character.Name}</td>
                                    <td className='good'>{character.Ability}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead><tr><th className='good'>Outsiders</th></tr></thead>
                        <tbody>
                            {this.props.characters.filter(character => character.Team === "Outsiders").map(character =>
                                <tr>
                                    <td className='good'>{character.Name}</td>
                                    <td className='good'>{character.Ability}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead><tr><th className='evil'>Minions</th></tr></thead>
                        <tbody>
                            {this.props.characters.filter(character => character.Team === "Minions").map(character =>
                                <tr>
                                    <td className='evil'>{character.Name}</td>
                                    <td className='evil'>{character.Ability}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <table className='table table-striped' aria-labelledby="tabelLabel">
                        <thead><tr><th className='evil'>Demons</th></tr></thead>
                        <tbody>
                            {this.props.characters.filter(character => character.Team === "Demons").map(character =>
                                <tr>
                                    <td className='evil'>{character.Name}</td>
                                    <td className='evil'>{character.Ability}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
