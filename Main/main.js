var n = "\n"

// alias name strings
var sThrow = "+throw";
var sBall = "+ball";
var sJump = "+rj";
var sCrouch = "+crouch";
var mFwd = "+mfwd";
var mBack = "+mback";
var mLeft = "+mleft";
var mRight = "+mright";

// alias strings
var secondaryThrow = 'alias "+throw" "slot2;+attack \nalias "-throw" "slot1;-attack""\n'
var meleeThrow = 'alias "+ball" "slot3;+attack2 \nalias "-ball" "slot1;-attack2""\n'
var autoCrouchJump = 'alias +rj "spec_mode;-duck;+cr;alias checkrj +cr"; \nalias -rj "-cr;checkduck;alias checkrj none"; \nalias +crouch "-cr;+duck;alias checkduck +duck";\nalias -crouch "-duck;checkrj;alias checkduck none";\nalias checkduck none;\nalias checkrj none;\nalias +cr "+jump;+duck";\nalias -cr "-duck;-jump";\nalias none "";\n'
var nullMovement = 'alias +mfwd "-back;+forward;alias checkfwd +forward"\nalias +mback "-forward;+back;alias checkback +back"\nalias +mleft "-moveright;+moveleft;alias checkleft +moveleft"\nalias +mright "-moveleft;+moveright;alias checkright +moveright"\nalias -mfwd "-forward;checkback;alias checkfwd none"\nalias -mback "-back;checkfwd;alias checkback none"\nalias -mleft "-moveleft;checkright;alias checkleft none"\nalias -mright "-moveright;checkleft;alias checkright none"\nalias checkfwd none\nalias checkback none\nalias checkleft none\nalias checkright none\nalias none ""\n'

// echos
var scoutLoad = 'echo "Scout scripts loaded."\n';

var scoutText = "//Scout Settings\n//Made with scout.cfg\n";

var zip = new JSZip();
var cfg = zip.folder("cfg");

function downloadZip(){
    checkChecks();
    cfg.file("scout.cfg", scoutText);
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "example.zip");
    });
}

function checkChecks(){
    if(document.getElementById("nullMove").checked = true){
        addText(nullMovement + n);
        addBind(mFwd, document.getElementById("forwardBind").value);
        addBind(mLeft, document.getElementById("leftBind").value);
        addBind(mBack, document.getElementById("downBind").value);
        addBind(mRight, document.getElementById("rightBind").value);
        addText(n);
        console.log("Adding movement script...");
    }

    if(document.getElementById("autoCrouch").checked = true){
        addText(autoCrouchJump + n);
        addBind(sJump, document.getElementById("jumpBind").value);
        addBind(sCrouch, document.getElementById("crouchBind").value);
        addText(n);
        console.log("Adding auto crouch jump script...");
    }
        
    if(document.getElementById("qThrow").checked = true){
        addText(secondaryThrow + n);
        addBind(sThrow, document.getElementById("throwBind").value);
        addText(n);
        console.log("Adding quick throw script...");
    }

    if(document.getElementById("bThrow").checked = true){
        addText(meleeThrow + n);
        addBind(sBall, document.getElementById("batBind").value);
        addText(n);
        console.log("Adding quick bat script...");
    }
}

function addText(text){
    scoutText = scoutText + text;
}

function addBind(alias, key){
    var newBind = "bind " + '"' + key + '"' + " " + alias + ";\n";
    scoutText = scoutText + newBind;
}