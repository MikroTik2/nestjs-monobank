---
title: Скасування оплати
description: Кроки для скасування оплати
---

У цьому розділі розглянемо, як повністю скасувати платіж у Monobank. Це корисно, якщо платіж більше не актуальний, наприклад, клієнт передумав оплачувати замовлення або сталася помилка.

<Steps />

### Виклик методу для скасування платежу

Використовуйте метод `cancel` з `monobankService`. Цей метод надішле запит до API Monobank на скасування платежу за його ідентифікатором.

```typescript
import { Injectable } from '@nestjs/common';
import { MonobankService } from 'nestjs-monobank';

@Injectable()
export class PaymentService {
  	constructor(private readonly monobankService: MonobankService) {}

  	async cancelPayment() {
    		const invoiceId = 'khsf8723hsdf8923hf'

    		await this.monobankService.cancel(invoiceId)
  	}
}
```

### Обробка відповіді від API

Після успішного запиту Monobank поверне порожню відповідь з HTTP-статусом 200 OK, що означає, що платіж було скасовано.

<Callout title="⚠️ Важливо знати:">
  <ul class="ml-6 list-disc [&amp;>li]:mt-2">
      <li>Скасування платежу є остаточним: після цього ідентифікатор буде недійсним, а сам платіж більше не можна буде виконати або змінити.</li>
      <li>Платіж можна скасувати лише у статусі (тобто якщо він ще не був здійснений).</li>
  </ul>
</Callout>
