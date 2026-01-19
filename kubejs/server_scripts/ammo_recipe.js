ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('tacz:ammo', 3, {AmmoId: "tacz:9mm"}), 
        [ 
            'kubejs:gunpower_pinch',
            'kubejs:bullet_casing_9mm',
            'kubejs:bullet_casing_9mm',
            'kubejs:bullet_casing_9mm'
        ]
    )

    event.shapeless(
        Item.of('tacz:ammo', 3, {AmmoId: "tacz:45acp"}), 
        [ 
            'kubejs:gunpower_pinch',
            'kubejs:bullet_casing_45acp',
            'kubejs:bullet_casing_45acp',
            'kubejs:bullet_casing_45acp'
        ]
    )

    event.shapeless(
        Item.of('tacz:ammo', 3, {AmmoId: "tacz:762x39"}), 
        [ 
            'kubejs:gunpower_pinch',
            'kubejs:bullet_casing_762x39',
            'kubejs:bullet_casing_762x39',
            'kubejs:bullet_casing_762x39'
        ]
    )
        event.shapeless(
        Item.of('tacz:ammo', 3, {AmmoId: "tacz:556x45"}), 
        [ 
            'kubejs:gunpower_pinch',
            'kubejs:bullet_casing_556x45',
            'kubejs:bullet_casing_556x45',
            'kubejs:bullet_casing_556x45'
        ]
    )
        event.shapeless(
        Item.of('tacz:ammo', 3, {AmmoId: "tacz:12g"}), 
        [ 
            'kubejs:gunpower_pinch',
            'kubejs:bullet_casing_12g',
            'kubejs:bullet_casing_12g',
            'kubejs:bullet_casing_12g'
        ]
    )
})