# NestJS Monobank

Цей модуль дозволяє інтегрувати API Monobank у NestJS-проєкт для роботи з рахунками: створення, перевірка статусу та скасування інвойсів.

## Встановлення

Щоб встановити бібліотеку, виконайте команду:

```bash
npm install nestjs-monobank
```

## Підключення в модулі

Щоб підключити бібліотеку у вашому проєкті, необхідно використати один із двох методів:

-   forRoot — синхронна конфігурація.

-   forRootAsync — асинхронна конфігурація.

**1. Синхронне підключення (forRoot)**
Використовуйте цей метод, якщо у вас вже є попередньо налаштовані значення для apiKey.

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

**2. Асинхронне підключення (forRootAsync)**
Використовуйте цей метод, якщо ви хочете завантажувати параметри конфігурації асинхронно, наприклад, з бази даних або змінних середовища.

```typescript
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MonobankModule } from 'nestjs-monobank'

@Module({
	imports: [
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

## Методи

**1. Створення рахунку**
Створює новий рахунок. Цей метод відправляє запит на створення нового рахунку з даними з invoiceData і повертає інформацію про створений рахунок.

Параметри:

-   invoiceData (InvoiceCreateRequest): Дані для створення платежу. Приклад структури даних див. нижче.

```typescript
const invoiceData: InvoiceCreateRequest = {
  amount: 1000,
  ccy: 980, // UAH
  merchantPaymInfo: {
    reference: "84d0070ee4e44667b31371d8f8813947",
    destination: "Покупка щастя"
  },
  redirectUrl: "https://example.com/success"
};

const invoiceResponse = await this.monobankService.createInvoice(invoiceData)

return invoiceResponse
```

**2. Статус рахунку**
Цей метод надсилає запит на отримання інформації про статус існуючого рахунку.

Параметри:

-   invoiceId (string): Унікальний ідентифікатор рахунку.

```typescript
const invoiceId = "khsf8723hsdf8923hf";
const status = await monobankService.getInvoiceStatus(invoiceId);

return status
```

**3. Скасування оплати**
Скасовує інвойс за його ідентифікатором. Може містити додаткові дані для фіскалізації, якщо це необхідно. Повертає результат скасування.

Параметри:

-   cancelData (InvoiceCancelRequest): Об'єкт з деталями скасування.

```typescript
const cancelData: InvoiceCancelRequest = {
	invoiceId: 'p2_9ZgpZVsl3"',
	extRef: '635ace02599849e981b2cd7a65f417fe',
	amount: 5000,
	items: [
		{
			name: 'Табуретка',
			qty: 2,
			sum: 2100,
			code: 'product-code',
			barcode: '1234567890',
			"header": "Хідер",
			"footer": "Футер",
			tax: [],
			uktzed: 'uktzed-code'
		}
	]
}

const cancelResponse = await this.monobankService.cancelPayment(cancelData)

return cancelResponse
```