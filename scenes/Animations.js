// function Animations() {
// 	const player = k.add([
// 		k.sprite('tiles', {
// 			animSpeed: 0.2,
// 			frame: 300
// 		}),
// 		k.pos(k.width() * 0.5, k.height() * 0.5),
// 		k.origin('center'),
// 		k.scale(1)
// 	])

// 	// basic key press logic to change animations
// 	k.keyPress('left', () => {
// 		player.scale.x = -1
// 		player.play('run')
// 	})

// 	k.keyPress('right', () => {
// 		player.scale.x = 1
// 		player.play('run')
// 	})

// 	k.keyRelease('left', () => {
// 		player.play('idle')
// 	})

// 	k.keyRelease('right', () => {
// 		player.play('idle')
// 	})
// }