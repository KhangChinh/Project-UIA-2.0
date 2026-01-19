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

    event.create('bullet_casing_57x28')
        .displayName('5.7x28mm AP Bullet Casing')
        .texture('kubejs:item/bullet_casing_57x28')
        .maxStackSize(64)

    event.create('bullet_casing_45-70')
        .displayName('45-70 Bullet Casing')
        .texture('kubejs:item/bullet_casing_45-70')
        .maxStackSize(64)

    event.create('bullet_casing_308')
        .displayName('.308 Winchester Bullet Casing')
        .texture('kubejs:item/bullet_casing_308')
        .maxStackSize(64)
})