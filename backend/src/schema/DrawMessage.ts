export default interface DrawMessage {
	id: string;
	type: "draw";
	figure: {
		type: string;
	};
}
