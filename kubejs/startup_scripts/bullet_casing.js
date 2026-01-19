StartupEvents.registry('item', event => {
    event.create('bullet_casing_9mm')
        .displayName('9mm Bullet Casing')
        .texture('kubejs:item/bullet_casing_9mm') 
        .maxStackSize(64)
    
    event.create('bullet_casing_45acp')
        .displayName('.45 ACP Bullet Casing')
        .texture('kubejs:item/bullet_casing_45acp') 
        .maxStackSize(64)

    event.create('bullet_casing_762x39')
        .displayName('7.62x39mm Bullet Casing')
        .texture('kubejs:item/bullet_casing_762x39') 
        .maxStackSize(64)

    event.create('bullet_casing_556x45')
        .displayName('5.56x45mm Bullet Casing')
        .texture('kubejs:item/bullet_casing_556x45') 
        .maxStackSize(64)

    
    event.create('bullet_casing_12g')
        .displayName('12 Gauge Bullet Casing')
        .texture('kubejs:item/bullet_casing_12g') 
        .maxStackSize(64)

})