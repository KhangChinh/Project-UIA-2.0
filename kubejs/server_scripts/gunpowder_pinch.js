ServerEvents.recipes(event =>{
    event.shapeless(
        Item.of('kubejs:gunpower_pinch', 4),
        [
            'minecraft:gunpowder'
        ]
    )

    event.shapeless(
        Item.of('minecraft:gunpowder', 1),
        [
            'kubejs:gunpower_pinch',
            'kubejs:gunpower_pinch',
            'kubejs:gunpower_pinch',
            'kubejs:gunpower_pinch'
        ]
    )
})