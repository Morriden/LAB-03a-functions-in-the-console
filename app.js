const sword = { name: 'sword', range: 'melee', type: 'slashing' };
const longbow = { name: 'longbow', range: 'ranged', type: 'piercing' };
const mace = { name: 'morningstar', range: 'melee', type: 'bludgeon' };
const crossbow = { name: 'crossbow', range: 'ranged', type: 'piercing' };
const axe = { name: 'axe', range: 'melee', type: 'slashing' };

const weapons = [sword, longbow, mace, crossbow, axe];

for(let i = 0; i < weapons.length; i++) {
    const weapon = weapons[i];
    console.log(weapon);
}