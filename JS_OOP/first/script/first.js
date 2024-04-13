'use strict'
var geom = {
	name: 'фигура',
	sp: { x: 0, y: 0 },
	ep: { x: 100, y: 20 },
	get nameGeom() {
		return this.name
	},
	set nameGeom(name) {
		this.name = name
	},
	get coords() {
		return [this.sp.x, this.sp.y, this.ep.x, this.ep.y]
	},
	set coords(coords) {
		this.sp.x = coords[0]
		this.sp.y = coords[1]
		this.ep.x = coords[2]
		this.ep.y = coords[3]
	},
}

var rect = {
	draw() {
		console.log(
			'Рисование прямоугольника: ' +
				this.sp.x +
				',' +
				this.sp.y +
				',' +
				this.ep.x +
				',' +
				this.ep.y
		)
	},
}

rect.__proto__ = geom
rect.coords = [1, 2, 3, 4]
console.log(rect.coords)
console.log(geom.coords)

// var info = {
// 	getInfo() {
// 		console.log(this.name)
// 	},
// 	__proto__: rect,
// }
// info.getInfo()

rect.nameGeom = 'Прямоугольник'

for (let prop in rect)
	if (rect.hasOwnProperty(prop)) console.log(prop + ': ' + rect[prop])
