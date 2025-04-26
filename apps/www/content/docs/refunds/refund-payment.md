---
title: Повернення коштів
description: Кроки для повернення коштів
---

У цьому розділі ми розглянемо, як ініціювати повернення коштів за вже створеним платежем у Monobank. Це корисно, якщо, наприклад, клієнт скасував замовлення або сталася помилка при оплаті.

<Steps />

### Виклик методу для повернення коштів

Використовуйте метод refund сервісу monobankService. Цей метод відправить запит до API Monobank і поверне оновлену інформацію про статус платежу.


```typescript
import { Injectable } from '@nestjs/common'
import { type RefundRequest, MonobankService } from 'nestjs-monobank'

@Injectable()
export class InvoiceService {
  	constructor(private readonly monobankService: MonobankService) {}

  	async cancelInvoice() {
    		const refundData: RefundRequest = {
       			invoiceId: 'p2_9ZgpZVsl3',
    		}

    		const refund = await this.monobankService.refund(refundData)

    		return refund
  	}
}
```

### Обробка відповіді від API

Після успішного скасування рахунку Monobank поверне об'єкт з інформацією про статус повернення. Приклад відповіді:

```json
{
    "status": null, // cтатус обробки заяви на скасування
    "createdDate": null, // дата та час створення заявки у форматі ISO 8601.
    "modifiedDate": null // дата та час останньої модифікації заявки.
}
```

#### Можливі статуси рахунку

<ul class="my-6 ml-6 list-disc [&amp;>li]:mt-2">
    <li>processing — заява на скасування знаходиться в обробці.</li>
    <li>success — заяву на скасування виконано успішно.</li>
    <li>failure — неуспішне скасування.</li>
</ul>

Отриманий статус можна використовувати для оновлення замовлення, інформування клієнта про результати повернення коштів або повторної спроби повернення у разі помилки.

