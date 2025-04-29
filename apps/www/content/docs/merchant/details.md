---
title: Дані мерчанта
description: Отримання інформації про вашого мерчанта з Monobank
---

У цьому розділі розглянемо, як отримати базову інформацію про ваш обліковий запис мерчанта у Monobank за допомогою методу getMerchant.

<Steps />

### Виклик методу для отримання мерчанта

Метод getMerchant виконує запит до Monobank Merchant API та повертає основні дані про вашого мерчанта:

```typescript
import { Injectable } from '@nestjs/common';
import { MonobankService } from 'nestjs-monobank';

@Injectable()
export class MerchantService {
     constructor(private readonly monobankService: MonobankService) {}

     async getMerchant() {
          const merchant = await this.monobankService.getMerchant();
          return merchant;
     }
}
```

### Обробка відповіді від API

Метод повертає об'єкт типу MerchantInfo, що містить базову інформацію про вашого мерчанта у Monobank.

```json
{
    "merchantId": "123456", // унікальний ідентифікатор мерчанта
    "merchantName": "ТОВ Тест Компані", // назва компанії, зареєстрованої в Monobank
    "edrpou": "12345678" // код ЄДРПОУ вашої компанії
}
```

Ці дані можна використати для відображення інформації про ваш обліковий запис Monobank або для валідації токена при інтеграції.
