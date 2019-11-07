# fonk-is-url-validator

[![CircleCI](https://badgen.net/github/status/Lemoncode/fonk-is-url-validator/master?icon=circleci&label=circleci)](https://circleci.com/gh/Lemoncode/fonk-is-url-validator/tree/master)
[![NPM Version](https://badgen.net/npm/v/@lemoncode/fonk-is-url-validator?icon=npm&label=npm)](https://www.npmjs.com/package/@lemoncode/fonk-is-url-validator)
[![bundle-size](https://badgen.net/bundlephobia/min/@lemoncode/fonk-is-url-validator)](https://bundlephobia.com/result?p=@lemoncode/fonk-is-url-validator)

This is a [fonk](https://github.com/Lemoncode/fonk) microlibrary that brings validation capabilities to:

- Validate if a field of a form is a valid url

How to install it:

```bash
npm install @lemoncode/fonk-is-url-validator --save
```

How to add it to an existing form validation schema:

We have the following form model:

```javascript
const myFormValues = {
  product: 'shoes',
  url: 'https://shoefactory.com/product-17',
};
```

We can add an isUrl validation to the myFormValues

```javascript
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
  field: {
    url: [isUrl.validator],
  },
};
```

You can customize the error message displayed in two ways:

- Globally, replace the default error message in all validationSchemas (e.g. porting to spanish):

```javascript
import { isUrl } from '@lemoncode/fonk-is-url-validator';

isUrl.setErrorMessage('El campo debe de ser numérico');
```

- Locally just override the error message for this validationSchema:

```javascript
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
  field: {
    url: [
      {
        validator: isUrl.validator,
        message: 'Error message only updated for the validation schema',
      },
    ],
  },
};
```

Please, refer to [fonk](https://github.com/Lemoncode/fonk) to know more.

## License

[MIT](./LICENSE)

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
