export default function onCanvasRestore(
	canvas: HTMLCanvasElement,
	ctx: CanvasRenderingContext2D,
	data: string,
	fn: () => void
) {
	const image = new Image();
	image.src = data;
	image.onload = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
		fn();
	};
}
