import { AxiosInstance } from 'axios'

export function attachMonobankInterceptors(http: AxiosInstance) {
     http.interceptors.request.use(config => {
		console.log(
			`[Monobank Request] → ${config.method?.toUpperCase()} ${config.url}`
		)
		return config
	})

	http.interceptors.response.use(
		res => res,
		async error => {
			const status = error?.response?.status

			if (status >= 500) {
				console.log('[Monobank] Retrying request after server error...')
				return await http.request(error.config)
			}

			return Promise.reject(error)
		}
	)
}