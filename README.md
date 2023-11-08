# Validador Cups

Esta función de utilidad valida un código CUPS (Código Unificado de Punto de Suministro) para garantizar su corrección. Los códigos CUPS se utilizan comúnmente en España para identificar puntos de suministro de energía.
[más información](https://www.endesa.com/es/blog/blog-de-endesa/luz/cups-donde-encontrar)

## Ejemplo

```javascript
import validateCups from 'cups-validator';

const isValid = validateCups('ES002100000123456789AB');
if (isValid) {
  console.log('The CUPS code is valid.');
} else {
  console.error('Invalid CUPS code.');
}
```

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para obtener más detalles