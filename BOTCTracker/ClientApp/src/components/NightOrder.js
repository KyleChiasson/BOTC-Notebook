import React, { Component } from 'react';
import OtherNO from '../Data/Other Night Order.json';
import FirstNO from '../Data/First Night Order.json';
import RequiredNight from '../Data/Required Night.json';

export class NightOrder extends Component {
    static displayName = NightOrder.name;

    render() {
        return (
            <>
                <div className="popup">
                    <table className='table table-striped side-by-side' aria-labelledby="tabelLabel">
                        <thead><tr><th>First Night</th></tr></thead>
                        <tbody>
                            {FirstNO.filter(c => RequiredNight.some(i => i === c) || this.props.characters.some(i => i.Name.toLowerCase() === c.toLowerCase())).map(o =>
                                <tr><td>{o}</td></tr>
                            )}
                        </tbody>
                    </table>
                    <table className='table table-striped side-by-side' aria-labelledby="tabelLabel">
                        <thead><tr><th>Other Nights</th></tr></thead>
                        <tbody>
                            {OtherNO.filter(c => RequiredNight.some(i => i === c) || this.props.characters.some(i => i.Name.toLowerCase() === c.toLowerCase())).map(o =>
                                <tr><td>{o}</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
