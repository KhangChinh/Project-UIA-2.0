StartupEvents.registry('block', event => {
    event.create('mammothwool')
    .displayName('Mammoth Wool')
    .material('wool')
    .hardness(0.8)
    .resistance(1.5)
    .tagBlock('minecraft:mineable/shears')
    .tagBlock('forge:wool')
    .requiresTool(true)

})