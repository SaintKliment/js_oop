'use strict'
var prop = {
	sp: { x: 0, y: 0 },
	ep: { x: 100, y: 20 },
	get coords() {
		return [this.sp.x, this.sp.y, this.ep.x, this.ep.y]
	},
	set coords(coords) {
		this.sp.x = coords[0]
		this.sp.x = coords[1]
		this.ep.x = coords[2]
		this.ep.y = coords[3]
	},
}

function Rect() {
	this.name = 'прямоугольник'

	this.draw = function () {
		console.log('Отрисовка фигуры: ' + this.name)
	}
}

Rect.prototype.__proto__ = prop

var r = new Rect()
// console.log(r)
// var r2 = new r.constructor()
console.log(Rect.prototype)
// r.draw()

// for (let p in r) console.log(p + ': ' + r[p])
