// utiliza para dibujar en un lienzo (canvas)
// utilizando el contexto de dibujo (ctx),
// los puntos actuales (currentPoints),
// los puntos previos (prePoints),
// el color de línea (color) y el tamaño de línea (size).
interface OnDrawColor extends SizeProps, OnDraw {
    color: string
}

const onDraw = ({
    currentPoints,
    prePoints,
    ctx,
    color,
    size,
}: OnDrawColor) => {
    const { x: currX, y: currY } = currentPoints
    const lineColor = color
    const lineWidth = size

    let startingPoint = prePoints ?? currentPoints
    ctx.beginPath()
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = lineColor

    ctx.moveTo(startingPoint.x, startingPoint.y)
    ctx.lineTo(currX, currY)
    ctx.stroke()

    ctx.fillStyle = lineColor
    ctx.beginPath()
    ctx.arc(startingPoint.x, startingPoint.y, lineWidth / 2, 0, 2 * Math.PI)
    ctx.fill()
}

export default onDraw
