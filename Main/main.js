// alias name strings
sThrow = "+throw"
sBall = "+ball"
sJump = "+rj;"
sCrouch = "+crouch;"

// alias strings
secondaryThrow = 'alias "+throw" "slot2;+attack \nalias "-throw" "slot1;-attack""'
meleeThrow = 'alias "+ball" "slot3;+attack2 \nalias "-ball" "slot1;-attack2""'
autoCrouchJump = 'alias +rj "spec_mode;-duck;+cr;alias checkrj +cr"; \nalias -rj "-cr;checkduck;alias checkrj none"; \nalias +crouch "-cr;+duck;alias checkduck +duck";\nalias -crouch "-duck;checkrj;alias checkduck none";\nalias checkduck none;\nalias checkrj none;\nalias +cr "+jump;+duck";\nalias -cr "-duck;-jump";\nalias none "";'
nullMovement = 'alias +mfwd "-back;+forward;alias checkfwd +forward"\nalias +mback "-forward;+back;alias checkback +back"\nalias +mleft "-moveright;+moveleft;alias checkleft +moveleft"\nalias +mright "-moveleft;+moveright;alias checkright +moveright"\nalias -mfwd "-forward;checkback;alias checkfwd none"\nalias -mback "-back;checkfwd;alias checkback none"\nalias -mleft "-moveleft;checkright;alias checkleft none"\nalias -mright "-moveright;checkleft;alias checkright none"\nalias checkfwd none\nalias checkback none\nalias checkleft none\nalias checkright none\nalias none ""'

// echos
scoutLoad = 'echo "Scout scripts loaded."'

console.log(nullMovement)