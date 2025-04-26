---
title: Статус рахунку
description: Кроки для отримання статусу рахунку
---

У цьому розділі ми розглянемо, як отримати поточний статус рахунку за його унікальним ідентифікатором.

<Steps />

### Виклик методу для отримання статусу рахунку

Щоб дізнатися статус рахунку, потрібно скористатися методом getInvoiceStatus, передавши в нього ідентифікатор рахунку.

```typescript
import { Injectable } from '@nestjs/common';
import { MonobankService } from 'nestjs-monobank';

@Injectable()
export class InvoiceService {
  	constructor(private readonly monobankService: MonobankService) {}

  	async checkInvoiceStatus() {
    		const invoiceId = 'khsf8723hsdf8923hf'; // унікальний ID рахунку

    		const status = await this.monobankService.getInvoiceStatus(invoiceId);
    		return status;
  	}
}
```

### Обробка відповіді від API

Метод getInvoiceStatus повертає об’єкт з інформацією про рахунок, включаючи його поточний статус. Приклад відповіді:

```json
{
    "invoiceId": "p2_9ZgpZVsl3",
    "status": null,
    "failureReason": "Неправильний CVV код",
    "errCode": "59",
    "amount": 4200,
    "ccy": 980,
    "finalAmount": 4200,
    "createdDate": null,
    "modifiedDate": null,
    "reference": "84d0070ee4e44667b31371d8f8813947",
    "destination": "Покупка щастя",
    "cancelList": [
        {
            "status": null,
            "amount": 4200,
            "ccy": 980,
            "createdDate": null,
            "modifiedDate": null,
            "approvalCode": "662476",
            "rrn": "060189181768",
            "extRef": "635ace02599849e981b2cd7a65f417fe"
        }
    ],
    "paymentInfo": {
        "maskedPan": "444403******1902",
        "approvalCode": "662476",
        "rrn": "060189181768",
        "tranId": "13194036",
        "terminal": "MI001088",
        "bank": "Універсал Банк",
        "paymentSystem": "visa",
        "paymentMethod": null,
        "fee": null,
        "country": "804",
        "agentFee": null
    },
    "walletData": {
        "cardToken": "67XZtXdR4NpKU3",
        "walletId": "c1376a611e17b059aeaf96b73258da9c",
        "status": null
    },
    "tipsInfo": {
        "employeeId": null,
        "amount": 4200
    }
}
```

#### Можливі статуси рахунку

<ul class="my-6 ml-6 list-disc [&amp;>li]:mt-2">
    <li>created — рахунок створено, очікує на оплату.</li>
    <li>processing — платіж в обробці.</li>
    <li>hold — Сума була заблокована на картці платника.</li>
    <li>success — рахунок успішно оплачено.</li>
    <li>failure — оплата не вдалася.</li>
    <li>reversed — Платіж був повернений після успішного списання.</li>
    <li>expired — Термін дії рахунку завершився.</li>
</ul>

<Callout title="⚠️ Важливо знати:">
Вебхуки можуть приходити не по порядку. Щоб отримати актуальний статус — орієнтуйтесь на поле modifiedDate.
</Callout>

### Приклад обробки статусів рахунку

#### 1. Очікування оплати (created)

Цей статус означає, що рахунок створено, але ще не оплачений. Користувач ще не перейшов за посиланням або не ввів дані платіжної картки.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "created",
    "amount": 4200,
    "ccy": 980,
    "destination": "Оплата консультації",
    "modifiedDate": 1713954000000
}
```

#### 2. Обробка платежу (processing)

Означає, що платіж обробляється. Це проміжний стан, коли система ще не завершила перевірку чи зарахування коштів.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "processing",
    "amount": 4200,
    "modifiedDate": 1713954020000
}
```

#### 3. Блокування суми (hold)

Сума була зарезервована на рахунку платника, але ще не списана. Найчастіше використовується при попередньому погодженні оплати.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "hold",
    "amount": 4200,
    "modifiedDate": 1713954050000
}
```

#### 4. Успішна оплата (success)

Платіж пройшов успішно, кошти списані та зараховані.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "success",
    "finalAmount": 4200,
    "paymentInfo": {
        "maskedPan": "444403******1902",
        "bank": "Універсал Банк"
    },
    "modifiedDate": 1713954070000
}
```

#### 5. Помилка при оплаті (failure)

Платіж не вдалось провести. Можлива причина вказана у полі failureReason.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "failure",
    "failureReason": "Недостатньо коштів",
    "errCode": "51",
    "modifiedDate": 1713954100000
}
```

#### 6. Оплата повернена (reversed)

Кошти були повернуті після успішної оплати. Наприклад, клієнт оформив повернення.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "reversed",
    "cancelList": [
        {
            "amount": 4200,
            "rrn": "060189181768"
        }
    ],
    "modifiedDate": 1713954150000
}
```

#### 7. Рахунок протерміновано (expired)

Клієнт не здійснив оплату вчасно, тому рахунок більше неактивний.

```json
{
    "invoiceId": "inv_1abc23",
    "status": "expired",
    "modifiedDate": 1713954200000
}
```
