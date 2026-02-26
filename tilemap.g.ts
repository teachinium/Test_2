// Автоматически генерируемый код. Не редактируйте.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "уровень1":
            case "уровень1":return tiles.createTilemap(hex`100010000b080505050505050505050505050505050805050505050508080805050508080508050808050508080508050505050505080508080508080505080508050808050808080505050505050808050505050508080505050505050508080508080805080505050505050505050505080808050805050508080808080808050505050508050508080505050505080508080a05080505050505080808080505080808050805050805050805050505050805050508050508080505050505050508050505080505050805080808080808080505050808080808050805050505050505050505050505050505050505050505050505050505050505050505050505050505`, img`
. 2 . . . . . . . . . . . . . . 
. 2 . . . . . . 2 2 2 . . . 2 2 
. 2 . 2 2 . . 2 2 . 2 . . . . . 
. 2 . 2 2 . 2 2 . . 2 . 2 . 2 2 
. 2 2 2 . . . . . . 2 2 . . . . 
. 2 2 . . . . . . . 2 2 . 2 2 2 
. 2 . . . . . . . . . . . 2 2 2 
. 2 . . . 2 2 2 2 2 2 2 . . . . 
. 2 . . 2 2 . . . . . 2 . 2 2 . 
. 2 . . . . . 2 2 2 2 . . 2 2 2 
. 2 . . 2 . . 2 . . . . . 2 . . 
. 2 . . 2 2 . . . . . . . 2 . . 
. 2 . . . 2 . 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.tile0,sprites.builtin.forestTiles0,sprites.castle.tileGrass3,sprites.dungeon.chestOpen,sprites.castle.rock2,sprites.castle.shrub,sprites.castle.saplingPine,sprites.castle.rock0,sprites.builtin.brick,sprites.builtin.crowd1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "tile0":return tile0;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Автоматически генерируемый код. Не редактируйте.
