# Validador Cups

Un módulo simple para validar un código
[CUPS](https://es.wikipedia.org/wiki/C%C3%B3digo_Unificado_de_Punto_de_Suministro)

## Ejemplo

**JavaScript**

```javascript
const { cups } = require("validador-cups");

const isValid = cups.validate("ES002100000123456789AB"); // false
```

**TypeScript**

```typescript
import { cups } from "validador-cups";

const isValid = cups.validate("ES002100000123456789AB"); // false
```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para obtener más detalles
