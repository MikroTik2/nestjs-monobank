import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
       return {
              name: 'NestJS Monobank',
              short_name: 'NestJS Monobank',
              categories: [
                     'фінанси',
                     'банкінг',
                     'платежі',
                     'продуктивність',
                     'бізнес',
                     'інструменти',
                     'технології'
              ],
              lang: 'uk-UA',
              description: 'Інтеграція з Monobank API на основі NestJS: створення рахунків, обробка платежів, вебхуки та інші фінансові функції.',
              start_url: '/',
              display: 'standalone',
              background_color: '#FFFFFF',
              theme_color: '#2563EB',
              orientation: 'portrait'
       }
}