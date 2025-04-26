---
title: Отримати фіскальні чеки
description: Як отримати список фіскальних чеків за рахунком
---

У цьому розділі ми розглянемо, як отримати фіскальні чеки для конкретного рахунку за допомогою методу getFiscalReceipts із сервісу MonobankService.

<Steps />

### Виклик методу для отримання фіскальних чеків

Для отримання фіскальних чеків необхідно передати invoiceId у метод getFiscalReceipts.

```typescript
import { Injectable } from '@nestjs/common';
import { MonobankService } from 'nestjs-monobank';

@Injectable()
export class ReceiptService {
     constructor(private readonly monobankService: MonobankService) {}

     async getFiscalReceipts(invoiceId: string) {
          const checks = await this.monobankService.getFiscalReceipts(invoiceId);
          return checks;
     }
}
```

### Обробка відповіді від API

Метод повертає об'єкт Checks, який містить масив фіскальних чеків.

```json
{
     "checks": [ // Масив фіскальних чеків
          {
               "id": "a2fd4aef-cdb8-4e25-9b36-b6d4672c554d", // Унікальний ідентифікатор чеку
               "type": "sale", // Тип операції (наприклад, 'sale' - продаж)
               "status": "done", // Статус чеку (наприклад, 'done' - успішно завершено)
               "statusDescription": "", // Опис статусу (може бути порожнім)
               "taxUrl": "https://cabinet.tax.gov.ua/cashregs/check", // Посилання на перевірку чеку на сайті податкової
               "file": "CJFVBERi0xLj4QKJaqrrK0KMSAw123I4G9ia3go38PAovQ43JlYXRvciAoQXBhY2hl5IEZPUCBWZXJzaW9uIfDIuMykKL...", // Закодований файл чеку (формат Base64)
               "fiscalizationSource": "monopay" // Джерело фіскалізації (наприклад, 'monopay')
          }
     ]
}

```

Ці дані можна використовувати для відображення інформації про фіскальні чеки або для завантаження PDF-файлів чеків на стороні клієнта.