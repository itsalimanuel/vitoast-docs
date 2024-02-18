# Usage



Before using Vitoast, ensure you have Tailwind CSS and its peer dependencies installed. Start by installing Tailwind CSS and its required packages:

```sh
npm install tailwindcss postcss autoprefixer --save-dev
```

When using Vitoast with Tailwind CSS, ensure that your Tailwind CSS classes are applied correctly to the toast components. You can configure Tailwind CSS to include Vitoast's files in its content array. Modify your tailwind.config.js file to include Vitoast's files:

```js
module.exports = {
  // Other Tailwind CSS configurations
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/vitoast/**/*.{js,ts,jsx,tsx,vue}",
  ],
  // Other Tailwind CSS configurations
};
```

Importing in your Vue component

```js
import Vue from 'vue';
import toast from 'vitoast';

Vue.use(toast);
```

**Displaying a Toast**

```js
this.$toast.show({
  title: "Success",
  position: "top-right",
  message: "Operation completed successfully!",
  type: "success",
  duration: 3000, // Duration in milliseconds
});
```

**OR**

```js
toast({
  title: "Success",
  position: "top-right",
  message: "Operation completed successfully!",
  type: "success",
  duration: 3000,
});
```

