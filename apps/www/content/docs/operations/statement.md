---
title: Виписка
description: Кроки до отримання виписки за період
---

У цьому розділі ми розглянемо, як отримати виписку з рахунку за допомогою модуля nestjs-monobank, використовуючи метод items.

<Steps />

### Виклик методу для отримання виписки

Щоб отримати список транзакцій за певний період, скористайтеся методом items, передавши у нього часові мітки початку та (опціонально) кінця періоду у форматі Unix.

```typescript
import { Injectable } from '@nestjs/common'
import { MonobankService } from 'nestjs-monobank';

@Injectable()
export class StatementService {
     constructor(private readonly monobankService: MonobankService) {}

     async getStatement() {
          const accountId = 'ZuHWzqkKGVo=';
          const from = '1680000000';
          const to = '1681000000';

          const statement = await this.monobankService.items(accountId, from, to);
          return statement;
     }
}
```

### Обробка відповіді від API

Метод повертає об’єкт типу Statement, який містить масив транзакцій у полі items.

```json
[
     {
          "id": "ZuHWzqkKGVo=", // Унікальний id транзакції
          "time": 1554466347, // Час транзакції (Unix time у секундах)
          "description": "Покупка щастя", // Опис транзакції
          "mcc": 7997, // MCC-код за ISO 18245
          "originalMcc": 7997, // Оригінальний MCC-код
          "hold": null, // Чи була сума заблокована
          "amount": -95000, // Сума у валюті рахунку (у копійках)
          "operationAmount": -95000, // Сума у валюті транзакції (у копійках)
          "currencyCode": 980, // Код валюти рахунку (ISO 4217)
          "commissionRate": null, // Комісія у копійках
          "cashbackAmount": 19000, // Сума кешбеку у копійках
          "balance": 10050000, // Баланс рахунку після операції (у копійках)
          "comment": "За каву", // Коментар користувача (опціонально)
          "receiptId": "XXXX-XXXX-XXXX-XXXX", // ID квитанції для check.gov.ua (опціонально)
          "counterEdrpou": "3096889974", // ЄДРПОУ контрагента (лише для ФОП)
          "counterIban": "UA898999980000355639201001404", // IBAN контрагента (лише для ФОП)
          "counterName": "ТОВАРИСТВО З ОБМЕЖЕНОЮ ВІДПОВІДАЛЬНІСТЮ «ВОРОНА»" // Назва контрагента
     }
]
```

Отримані транзакції можна використовувати для побудови виписки за період, відображення історії операцій користувачу, розрахунку балансу чи аналітики витрат.