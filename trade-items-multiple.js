function loadItems() {
    try {
        const container = document.getElementById('itemsContainer');
        const data = apiResponse;
        data.result.forEach(result => {
            const item = result.item;
            const listing = result.listing;
            
            const itemElement = createItemElement(item, listing);
            container.appendChild(itemElement);
        });
        
    } catch (error) {
        console.error('Error:', error);
    }
}

function newPropDiv(prop, val){
    let inner = prop;
    if (val) {
        inner += `<span class="value">${val}</span>`
    }
    const propDiv = document.createElement('div', {
        className: 'property',
        innerHTML: inner
    });
    return propDiv;
}

const sepDiv = document.createElement('div', {className: 'separator'});

function createItemElement(item, listing) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    const header = document.createElement('div', {
        className: 'header',
        innerHTML: `<span>${item.name}</span>`
    });
    itemDiv.appendChild(header);
    item.tags.forEach(t => itemDiv.appendChild(newPropDiv(t)));
    itemDiv.appendChild(sepDiv);
    const reqDiv = document.createElement('div');
    item.requirements.forEach(req =>{
        
    });
    itemDiv.appendChild()
    
    itemDiv.innerHTML = `
        <div class="header">${item.name || item.typeLine}</div>
        
        <div class="property">${item.properties[0]?.name || ''}</div>
        
        <div class="property">Level: <span class="value">
            ${item.properties?.find(p => p.name === 'Level')?.values[0][0] || ''}
        </span></div>
        
        <div class="property">Cost: <span class="value">
            ${item.properties?.find(p => p.name === 'Cost')?.values[0][0] || ''}
        </span></div>
        
        <div class="property">Cast Time: <span class="value">
            ${item.properties?.find(p => p.name === 'Cast Time')?.values[0][0] || ''}
        </span></div>
        
        <div class="separator"></div>
        
        <div class="property">Requires Level 
            <span class="value">${item.requirements[0]?.values[0][0] || ''}</span>
        </div>
        
        <div class="separator"></div>
        
        <div class="desc">${item.secDescrText || ''}</div>
        
        <div class="separator"></div>
        
        ${(item.explicitMods || [])
            .map(mod => `<div class="explicit">${mod}</div>`)
            .join('')}
        
        <div class="separator"></div>
        
        <div class="itemNote textCurrency">
            ~price ${listing.price.amount} ${listing.price.currency}
        </div>
    `;
    
    return itemDiv;
}


const apiResponse = 
{
    "items": [
      {
        "name": "Phoenix Knell",
        "tags": ["Two Handed Mace"],
        "properties": {
          "Level": "54",
          "Physical Damage": "137-203",
          "Elemental Damage": "60-106"
        },
        "requirements": [
          { "name": "Level", "value": "54" },
          { "name": "Str", "value": "173" }
        ],
        "explicitMods": [
          "+22 to Strength",
          "32% increased Physical Damage",
          "Adds 27 to 50 Physical Damage",
          "Adds 60 to 106 Fire Damage",
          "24% increased Critical Strike Chance",
          "Gain 6 Mana per Enemy Killed",
          "+70 to Accuracy Rating"
        ],
        "price": {
          "amount": 1,
          "currency": "alch"
        }
      },
      {
        "name": "Vaal Cleave",
        "tags": ["Attack", "AoE", "Vaal", "Duration", "Melee"],
        "properties": {
          "Level": "1",
          "Cost": "7 Mana",
          "Attack Speed": "80% of base"
        },
        "requirements": [
          { "name": "Level", "value": "1" }
        ],
        "description": "The character swings their weapon (or both weapons if dual wielding) in an arc, damaging monsters in an area in front of them. Only works with Axes and Swords.",
        "explicitMods": [
          "When Dual Wielding, Deals 60% Damage from each Weapon combined"
        ],
        "price": {
          "amount": 1,
          "currency": "alch"
        }
      },
      {
        "name": "Femurs of the Saints",
        "tags": ["Staff"],
        "properties": {
          "Physical Damage": "55-165",
          "Critical Strike Chance": "8.00%",
          "Attacks per Second": "1.15"
        },
        "requirements": [
          { "name": "Level", "value": "58" },
          { "name": "Str", "value": "99" },
          { "name": "Int", "value": "99" }
        ],
        "explicitMods": [
          "+2 to Level of Socketed Minion Gems",
          "Minions deal 64% increased Damage",
          "+1% Chance to Block Attack Damage per Summoned Skeleton",
          "2% increased Attack and Cast Speed per Summoned Raging Spirit",
          "Regenerate 0.6% of Life per second for each Raised Zombie",
          "30% increased Mana Regeneration Rate per Raised Spectre"
        ],
        "price": {
          "amount": 1,
          "currency": "alch"
        }
      },
      {
        "name": "Splitting Steel",
        "tags": ["Attack", "Projectile", "AoE", "Physical"],
        "properties": {
          "Level": "1",
          "Cost": "6 Mana",
          "Attack Speed": "90% of base",
          "Attack Damage": "120% of base"
        },
        "requirements": [
          { "name": "Level", "value": "1" }
        ],
        "description": "Fire a single projectile that splits on impact or at the targeted location, dealing area damage when it splits and again when the split projectiles explode at the end of their flight. Requires a Sword or Axe.",
        "explicitMods": [
          "Modifiers to number of Projectiles instead apply to the number of targets Projectile Splits towards",
          "Projectiles Split towards 2 targets",
          "Base radius is 0.6 metres",
          "40% chance to Impale Enemies on Hit",
          "Projectiles can Split without hitting a target"
        ],
        "price": {
          "amount": 1,
          "currency": "alch"
        }
      },
      {
        "name": "Realmshaper",
        "tags": ["Warstaff"],
        "properties": {
          "Physical Damage": "14-42",
          "Elemental Damage": "12-20, 13-25",
          "Critical Strike Chance": "7.60%",
          "Attacks per Second": "1.30"
        },
        "requirements": [
          { "name": "Level", "value": "13" },
          { "name": "Str", "value": "27" },
          { "name": "Int", "value": "27" }
        ],
        "explicitMods": [
          "+1 to Level of Socketed Fire Gems",
          "+1 to Level of Socketed Cold Gems",
          "Socketed Gems are Supported by Level 5 Cold to Fire",
          "Adds 12 to 20 Fire Damage",
          "Adds 13 to 25 Cold Damage",
          "40% increased Elemental Damage"
        ],
        "price": {
          "amount": 1,
          "currency": "alch"
        }
      },
      {
        "name": "Vaal Lightning Trap",
        "tags": ["Trap", "Critical", "Spell", "Projectile", "Duration", "Vaal", "Lightning"],
        "properties": {
          "Level": "1",
          "Cost": "8 Mana",
          "Cast Time": "1.00 sec",
          "Critical Strike Chance": "6.00%"
        },
        "requirements": [
          { "name": "Level", "value": "12" },
          { "name": "Dex", "value": "14" },
          { "name": "Int", "value": "21" }
        ],
        "description": "Throws a trap that launches a ring of projectiles through the enemy that set it off, dealing lightning damage to them and subsequent targets.",
        "explicitMods": [
          "Deals 15 to 46 Lightning Damage",
          "Trap lasts 4 seconds",
          "Fires 9 Projectiles",
          "Fires Projectiles in a circle",
          "20% chance to Shock enemies",
          "80% increased Critical Strike Chance against Shocked Enemies"
        ],
        "price": {
          "amount": 1,
          "currency": "alch"
        }
      }
    ]
  }