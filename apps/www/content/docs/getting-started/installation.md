---
title: Встановлення та налаштування
description: Кроки зі встановлення та налаштування
---

У цьому розділі ми розберемо, як встановити і налаштувати модуль nestjs-monobank, а також наведемо кілька прикладів, як підключити його до вашого додатка на NestJS.

<Steps />

### Встановлення пакета

Для початку встановіть необхідні пакети. Використовуйте команду npm або yarn, щоб додати nestjs-monobank до вашого проєкту.

```bash
npm install nestjs-monobank
```

Пакет nestjs-monobank містить усі необхідні залежності для роботи з Monobank у вашому додатку на NestJS.

### Налаштування змінних оточення

Для коректної роботи модуля вам необхідно задати кілька змінних оточення.

```env
MONOBANK_API_KEY=your_api_key
```

#### Де взяти ці дані?

API Key ви отримаєте у вашому кабінеті Monobank для бізнесу після підключення послуги Merchant API.

Переконайтесь, що цей ключ зберігається в таємниці та ніколи не публікується у відкритому доступі або у вашому репозиторії.

Без коректно вказаного MONOBANK_API_KEY модуль не зможе підключитись до сервісу Monobank.

### Підключення модуля

Після встановлення пакета і налаштування змінних оточення, необхідно під'єднати модуль nestjs-monobank до вашого застосунку.

#### Синхронна конфігурація

Для базової синхронної конфігурації використовуйте метод forRoot() для ініціалізації модуля з вашими налаштуваннями.

```typescript
import { Module } from '@nestjs/common'
import { MonobankModule } from 'nestjs-monobank'

@Module({
    imports: [
        MonobankModule.forRoot({
            apiKey: 'MONOBANK_API_KEY'
        })
    ]
})
export class AppModule {}
```

У цьому прикладі MonobankModule.forRoot() приймає об'єкт із налаштуваннями, який ви передаєте в конфігурацію модуля.

#### Асинхронна конфігурація

Якщо вам потрібно завантажувати параметри конфігурації з інших джерел або використовувати асинхронні операції для отримання значень, можна застосувати метод forRootAsync(). Цей підхід підходить для роботи з динамічно отримуваними значеннями конфігурації.

```typescript
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MonobankModule } from 'nestjs-monobank'

@Module({
    imports: [
        ConfigModule.forRoot(),
        MonobankModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                apiKey: configService.getOrThrow('MONOBANK_API_KEY')
            }),
            inject: [ConfigService]
        })
    ]
})
export class AppModule {}
```

У цьому прикладі useFactory дозволяє асинхронно отримати значення конфігурації з ConfigService. Це корисно, якщо ваші параметри конфігурації можуть змінюватися або завантажуються із зовнішнього джерела.

#### Винесена конфігурація

Для зручнішої роботи з конфігурацією можна винести налаштування в окремий файл. Наприклад, створіть файл monobank.config.ts:

```typescript
// src/config/monobank.config.ts
import { ConfigService } from '@nestjs/config'
import type { MonobankOptions } from 'nestjs-monobank'

export function getMonobankConfig(
    configService: ConfigService
): MonobankOptions {
    return {
        apiKey: configService.getOrThrow('MONOBANK_API_KEY')
    }
}
```

Потім підключіть його в AppModule:

```typescript
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MonobankModule } from 'nestjs-monobank'
import { getMonobankConfig } from './config/monobank.config'

@Module({
    imports: [
      ConfigModule.forRoot(),
      MonobankModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: getMonobankConfig,
          inject: [ConfigService]
      })
    ]
})
export class AppModule {}
```

У цьому разі конфігурація зберігатиметься в окремому файлі, що покращує структуру і дає змогу легше керувати параметрами оточення.