const settings_html = /*html*/`
    <form id="settings_form" onsubmit="return submit_settings()" >
        <input type="radio" id="tb" name="script" value="tb" checked><label for="tb">Trouble Brewing</label><br>
        <input type="radio" id="snv" name="script" value="snv"><label for="snv">Sects and Violets</label><br>
        <input type="radio" id="bmr" name="script" value="bmr"><label for="bmr">Bad Moon Rising</label><br>
        <input type="radio" id="custom" name="script" value="custom"><label for="custom">Custom</label><br>
        <label for="custom_script">Custom Script Upload:</label><br>
        <input type="file" id="custom_script" accept=".json"><br>
        <label for="count">Player Count: </label><input type="number" id="count" name="count" min="5" max="15"  value="12"><br>
        <input type="submit" name="submit" id="submit" value="Generate Grim">
    </form>`
