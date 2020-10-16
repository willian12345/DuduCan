/**
 * getPosAfterRotation
 * 获取旋转后的坐标
 * @param {*} rotation 旋转角度
 * @param {*} x 
 * @param {*} y
 * 旋转公式转自 Foundation Actionscript3.0 Animation
 * 第十章“坐标旋转及角度反弹”及第十八章“矩阵数学”
 * 可认为是绕虚拟z轴旋转矩阵 
 * [cos  sin   0]
 * [-sin cos   0]
 * [ 0    0    1]
 * 计算 x 与 y 
 * x = (x * cos + y * -sin)
 * y = (x * sin + y * cos)
 * 得
 * x = Math.cos(angle) * x - Math.sin(angle) * y
 * y =  Math.cos(angle) * y + Math.sin(angle) * x
 *
 */
export function getPosAfterRotation(rotation, x, y) {
	const angle = rotation * (Math.PI / 180)
	const _x = Math.cos(angle) * x  - Math.sin(angle) * y
	const _y = Math.cos(angle) * y + Math.sin(angle) * x
	return {x: _x , y: _y}
}
/**
 * getMaxValue
 * 获取数组对象中最小x,最大x,最小y，最大y
 * @param {*} arr : [{x:1, y: 1}, {x: 100, y, 100}]
 */
export function getMaxValue(arr){
	let minX = arr[0].x
	let maxX = arr[0].x
	let minY = arr[0].y
	let maxY = arr[0].y

	// 计算最小最大的 x,y 值
	for(var i=1, l = arr.length; i < l; i++){
		if(minX > arr[i].x){
			minX = arr[i].x
		}
		if(arr[i].x > maxX){
			maxX = arr[i].x
		}

		if(minY > arr[i].y){
			minY = arr[i].y
		}
		if(arr[i].y > maxY){
			maxY = arr[i].y
		}
	}
	return [minX, minY, maxX, maxY]
}

export function findNodes(node){
	const l = node.childs.length
	const arr = []
	if(l){
		for(let i=0; i<l; i++){
			if(node.childs[i].childs && node.childs[i].childs.length){
				const nodes = findNodes(node.childs[i])
				arr.push(node.childs[i])
				return arr.concat(nodes)
			}else{
				arr.push(node.childs[i])
			}
		}	
	}else{
		arr.push(node)
	}
	return arr
}