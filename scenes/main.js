 
// loadSprite('sign', './Sprites/tile_0067')

addLevel([
  'lwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
  'lxddxssafaxxsfdaaadffxxxssaadfaaxxsdd',
  'lfaaxxsddxddxssafaxxsfdaaadffxxxssaad',
  'lxddxffxxxssaadssafaxxsfdaaadfaaxxsdd',
  'lfaxxsfdaaadffxxxxddxssassaadfaaxxsdd',
  'laadffxxxssaadxddxssafaxxsfdafaaxxsdd',
  'lxddxssafadffxxxssaadfaxxsfdaaaaxxsdd',
  'lxddaaadffxxxssaadfdxssafaxxsfaaxxsdd',
  'lxddxssaadfaaxxsddfaxxsfdaaadffxxxssa',
  'lsfdaaadffxxxssaadfaxddxssafaxxaxxsdd',
  'lffxxxssaadfaxddxssafaxxsfdaaadaxxsdd',
  'laaadffxxxssaadfxddxssafaxxsfdaaxxsdd',
  'ladfaxddxssafaxxsfdaaadffxxxssaaxxsdd',
  'lxddxssafaxxsfdaaadffxxxssaadfaaxxsdd',

], {
  width: 16,
  height: 16,
  'x' : [sprite('floor2')],
  's' : [sprite('floor1')],
  'a' : [sprite('floor3')],
  'd' : [sprite('floor4')],
  'f' : [sprite('floor5')],
  'w' : [sprite('wall1')],
  'l' : [sprite('wallL')],

})


// loadSpriteAtlas("sprites/Idle1.png", {
// "main": {
  
// }
// });
/*
loadSpriteAtlas("sprites/dungeon.png", {
	"hero": {
		"x": 128,
		"y": 196,
		"width": 144,
		"height": 28,
		"sliceX": 9,
		"anims": {
			"idle": {
				"from": 0,
				"to": 3,
				"speed": 3,
				"loop": true
			},
*/

// loadSprite('cyberpunk',"Idle1", {
//     sliceX: 48,
// 	  sliceY: 38,
//         anims: {
//             idle: { from: 0, to: 5 },
 
//     },
// })

const player = add ([
  sprite('Idle1'),
  pos(400,100)
]);
// player.play('idle')
console.log(player)
player.firing = false

let i = 0
let j = 0
const idle = () => {
  const frames = [
    'Idle1',
    'Idle2',
    'Idle3',
    'Idle4',
  ]
  if(i >= 4) i = 0
  player.changeSprite(frames[i])

  i++

}
const walk = () => {
 
  const frames = [
    'Walk1',
    'Walk2',
    'Walk3',
    'Walk4',
    'Walk5',
    'Walk6',
  ]
    const framesL = [
    'Walk1L',
    'Walk2L',
    'Walk3L',
    'Walk4L',
    'Walk5L',
    'Walk6L',
  ]
  if(i >= 6) i = 0
player.direction == 'left' ? player.changeSprite(framesL[i]) : player.changeSprite(frames[i])
 
  i++

}

let laserIndex = 0;
const laser =  () => {
  const laserFrames = [
  'tile001',
  'tile002',
  'tile003',
  'tile004',
  'tile005',
  'tile006',
  'tile007',
  'tile008',
  'tile009',
  'tile010',
  'tile011',       
  'tile012',
  'tile013',
  'tile014',
  'tile015',
  'tile016',
  'tile017',
  'tile018',
  'tile019',
  'tile020',
  'tile021',
  'tile022',
  'tile023',
  'tile024',
  'tile025',
  'tile026',
  'tile027',
  'tile028',
  'tile029',
  'tile030',
  'tile031',
  'tile032',
  'tile033',
  'tile034',
  'tile035',
  'tile036',
  ]
 
  laserIndex <= laserFrames.length - 1 ? (player.changeSprite(laserFrames[laserIndex])) : null 
  laserIndex <= laserFrames.length - 1 ? laserIndex++ : null
}
let frames = 0
const MOVE_SPEED = 50

keyDown('space', () => {
  player.firing = true
})
keyDown('right', () => {
  player.direction = 'right' 
})
keyDown('left', () => {
  player.direction = 'left'
   frames++
    frames % 8 == 0 ? walk() : null
  player.move(-MOVE_SPEED, 0)
})
keyDown('up', () => {
  if(player.direction !== 'left') player.direction = 'up'
   frames++
    frames % 8 == 0 ? walk() : null
  player.move(0, 0-MOVE_SPEED)
})
keyDown('down', () => {
  if(player.direction !== 'left') player.direction = 'down'
   frames++
    frames % 8 == 0 ? walk() : null
  player.move(0, MOVE_SPEED)
})
keyRelease(('space'), ()=>{
  player.firing = false
  laserIndex = 0
})
keyRelease(('right'), ()=>{
  player.direction = 'idle'
  // player.changeSprite('Idle1')
})
keyRelease(('left'), ()=>{
  player.direction = 'idle'
  // player.changeSprite('player')
})
keyRelease(('up'), ()=>{
  player.direction = 'idle'
  // player.changeSprite('player')
})
keyRelease(('down'), ()=>{
  player.direction = 'idle'
  // player.changeSprite('player')
})
let h = 0
player.direction = 'idle'


player.action(() => {
  if(player.direction == 'right') {
    frames++
    frames % 8 == 0 ? walk() : null
     player.move(MOVE_SPEED, 0)
  }
  if(player.firing == true) {
   frames++
    frames % 8 == 0 ? laser() : null
  }
   camPos(player.pos)
  
   if(player.direction == 'idle' && !player.firing){
    // player.play('idle')
    frames++
    frames % 12 == 0 ? idle() : null
     }
     if(frames >= 100) frames = 0
})
console.log(player.scale)