---
title: Створення платежу
description: Як створити платіж, використовуючи картковий токен
---

У цьому розділі ми розглянемо, як створити платіж за допомогою модуля nestjs-monobank та методу createWithCardToken.

<Steps />

### Виклик методу для створення платежу

Метод createWithCardToken дозволяє створити платіж, використовуючи дані токенізованої картки.

```typescript
import { Injectable } from '@nestjs/common';
import { type CardTokenRequest, MonobankService } from 'nestjs-monobank';

@Injectable()
export class PaymentService {
     constructor(private readonly monobankService: MonobankService) {}

     async createPayment() {
          const paymentData: CardTokenRequest = {
               invoiceId: 'p2_9ZgpZVsl3',
               cardToken: '67XZtXdR4NpKU3',
               cvc: '123'
          };

          const payment = await this.monobankService.createWithCardToken(paymentData);
          return payment.status;
     }
}
```

### Обробка відповіді від API

Метод повертає об'єкт типу CardToken, що містить статус транзакції та супутню інформацію.

```json
{
     "invoiceId": "2210012MPLYwJjVUzchj", // Ідентифікатор рахунку (інвойсу)
     "tdsUrl": "https://example.com/tds/url", // URL для проходження 3DS-підтвердження (опціонально)
     "status": "success", // Статус транзакції (наприклад, 'success' або 'failure')
     "failureReason": "Неправильний CVV код", // Причина невдачі транзакції (заповнюється тільки при помилці)
     "amount": 4200, // Сума транзакції у копійках (наприклад, 4200 = 42.00 грн)
     "ccy": 980, // Код валюти згідно ISO 4217 (наприклад, 980 = гривня)
     "createdDate": null, // Дата створення токену картки (може бути null, якщо ще не встановлено)
     "modifiedDate": null // Дата останньої модифікації токену картки (може бути null)
}
```

Отримані дані можна використовувати для відображення статусу платежу користувачу, перенаправлення на сторінку 3DS-підтвердження (якщо потрібно), обробки помилок або оновлення статусу замовлення у вашій системі.