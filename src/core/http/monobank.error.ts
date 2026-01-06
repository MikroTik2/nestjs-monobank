export class MonobankError extends Error {
	public constructor(
		public code: string,
		public description: string,
		public data?: any
	) {
		super(description)
		this.name = "MonobankError"
	}
}