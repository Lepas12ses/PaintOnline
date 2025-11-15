export default function drawWithSavedOptions(
	canvas: HTMLCanvasElement,
	fn: (ctx: CanvasRenderingContext2D) => void
) {
	const ctx = canvas.getContext("2d");
	if (!ctx) return;

	const prevStroke = ctx.strokeStyle;
	const prevFill = ctx.fillStyle;
	const prevWidth = ctx.lineWidth;

	fn(ctx);

	ctx.strokeStyle = prevStroke;
	ctx.fillStyle = prevFill;
	ctx.lineWidth = prevWidth;
}
