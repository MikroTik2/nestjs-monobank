---
title: Отримати токени карток
description: Як отримати список токенів карток для гаманця
---

У цьому розділі ми розглянемо, як отримати список токенізованих карток для заданого гаманця. Ми покажемо, як викликати метод getCardTokens з MonobankService та обробити відповідь.

<Steps />

### Виклик методу для отримання карткових токенів

Для отримання списку токенів потрібно передати walletId у метод getCardTokens.

```typescript
import { Injectable } from '@nestjs/common';
import { MonobankService } from 'nestjs-monobank';

@Injectable()
export class WalletService {
     constructor(private readonly monobankService: MonobankService) {}

     async getCardTokens(walletId: string) {
          const tokens = await this.monobankService.getCardTokens(walletId);
          return tokens;
     }
}
```

### Обробка відповіді від API

Метод повертає об'єкт, який містить масив токенізованих карток у полі wallet.

```json
{
     "wallet": [ // масив токенізованих карток
          {
               "cardToken": "67XZtXdR4NpKU3", // унікальний токен картки
               "maskedPan": "424242******4242", // маскований номер картки
               "country": "804" // код країни випуску картки (804 = Україна)
          }
     ]
}
```

Ці дані можна використовувати для виконання оплат через токенізовані картки або для відображення інформації про збережені картки у профілі користувача.
