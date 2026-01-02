export enum RefundStatusEnum {
	/**
	 * Заява на скасування знаходиться в обробці.
	 */
	PROCESSING = 'processing',

	/**
	 * Заяву на скасування виконано успішно.
	 */
	SUCCESS = 'success',

	/**
	 * Неуспішне скасування операції.
	 */
	FAILURE = 'failure',
}
