const sword = { name: 'sword', range: 'melee', type: 'slashing' };
const longbow = { name: 'longbow', range: 'ranged', type: 'piercing' };
const mace = { name: 'morningstar', range: 'melee', type: 'bludgeon' };
const crossbow = { name: 'crossbow', range: 'ranged', type: 'piercing' };
const axe = { name: 'axe', range: 'melee', type: 'slashing' };
const dagger = { name: 'dagger', range: 'both', type: 'piercing'};

const weapons = [sword, longbow, mace, crossbow, axe, dagger];

//for(let i = 0; i < weapons.length; i++) {
//   const weapon = weapons[i];
//    console.log(weapon);
//}

function logOutThings(array) {
    console.log('Here are your ' + array.length + ' things!');
    for(let i = 0; i < weapons.length; i++) {
        const weapon = weapons[i];
        console.log(weapon);
        if(weapon.type === 'slashing') {
            console.log(weapon.name + ' is for the fighter!');
        } else if (weapon.type === 'bludgeon') {
            console.log(weapon.name + ' is for the cleric!');
        } else {
            console.log(weapon.name + ' is for the rogue!');
        }
    }
}
logOutThings(weapons)