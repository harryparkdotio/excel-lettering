# excel-lettering

excel style column lettering

```bash
$ yarn add excel-lettering
```

```ts
import { toColumnLetter, toColumnNumber } from 'excel-lettering';

toColumnLetter(0); // 'A'
toColumnLetter(1); // 'B'
toColumnLetter(26); // 'AA'
toColumnLetter(52); // 'BA'
toColumnLetter(18277); // 'ZZZ'
toColumnLetter(19009); // 'ABCD'

toColumnNumber('A'); // 0
toColumnNumber('B'); // 1
toColumnNumber('AA'); // 26
toColumnNumber('BA'); // 52
toColumnNumber('ZZZ'); // 18277
toColumnNumber('ABCD'); // 19009
```
