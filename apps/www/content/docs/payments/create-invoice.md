---
title: Створити рахунок
description: Кроки для створення рахунку
---

У цьому розділі ми розглянемо, як створити рахунок . Ми покажемо, як підготувати дані для рахунку, викликати API Monobank для його створення та обробити відповідь від сервісу.

<Steps />

### Підготовка даних для створення рахунку

Для створення рахунку вам необхідно підготувати об'єкт InvoiceCreateRequest, який містить усю необхідну інформацію про рахунок. Найважливіші поля включають суму рахунку.

```typescript
import { type InvoiceCreateRequest } from 'nestjs-monobank';

const invoiceData: InvoiceCreateRequest = {
     amount: 1000,
     ccy: 980, // UAH
     merchantPaymInfo: {
          reference: "84d0070ee4e44667b31371d8f8813947",
          destination: "Покупка щастя",
          basketOrder: [
               {
                    name: "Товар",
                    qty: 2,
                    sum: 500,
                    icon: "https://example.com/images/product1.jpg",
                    unit: "уп."
               }
          ]
     },
     redirectUrl: "https://example.com/order-result",
     webHookUrl: "https://example.com/mono-webhook",
     validity: 3600 * 24 * 7,
     paymentType: "debit"
};
```

### Виклик методу для створення рахунку

Тепер, коли у вас є дані для рахунку, ви можете використати метод createInvoice із сервісу MonobankService для надсилання даних на сервер Monobank та отримання інформації про створений рахунок.

```typescript
import { Injectable } from '@nestjs/common';
import { type InvoiceCreateRequest, MonobankService } from 'nestjs-monobank';

@Injectable()
export class InvoiceService {
  	constructor(private readonly monobankService: MonobankService) {}

 	async createInvoice() {
          const invoiceData: InvoiceCreateRequest = {
               amount: 1000,
               ccy: 980, // UAH
               merchantPaymInfo: {
                    reference: "84d0070ee4e44667b31371d8f8813947",
                    destination: "Покупка щастя",
                    basketOrder: [
                         {
                              name: "Товар",
                              qty: 2,
                              sum: 500,
                              icon: "https://example.com/images/product1.jpg",
                              unit: "уп."
                         }
                    ]
               },
               redirectUrl: "https://example.com/order-result",
               webHookUrl: "https://example.com/mono-webhook",
               validity: 3600 * 24 * 7,
               paymentType: "debit"
          };

		const newInvoice = await this.monobankService.createInvoice(invoiceData);

		return newInvoice;
  	}
}
```

### Обробка відповіді від API

У відповіді від API повертаються invoiceId (ідентифікатор рахунку) та pageUrl (посилання на сторінку оплати).

```json
{
     "invoiceId": "p2_9ZgpZVsl3", // унікальний ідентифікатор рахунку (invoice).
     "pageUrl": "https://pay.mbnk.biz/p2_9ZgpZVsl3" // посилання на сторінку для оплати цього рахунку.
}
```

Ці дані можна зберегти або використати для подальшої обробки (наприклад, відображення посилання користувачу чи відстеження статусу платежу).
