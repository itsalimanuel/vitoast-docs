# Vitoast - Vue Toast Package

Vitoast is a simple and customizable toast package for Vue.js, designed to provide user-friendly notifications. It supports various options such as title, message, type (success, warning, info, error), and duration.

## Features

- Customizable: Vitoast allows you to customize the appearance and behavior of your toasts according to your application's needs.
- Easy Integration: It seamlessly integrates into Vue.js applications, making it straightforward to use.
- Multiple Types: Supports different types of toasts including success, warning, info, and error to convey different levels of messages.
- Duration Control: You can specify the duration for which the toast should be displayed, providing flexibility in managing notifications.

**Usage**

```js{4}
toast({
  title: 'Success',
  position: "top-right",
  message: 'Operation completed successfully!',
  type: 'success',
  duration: 3000,
});
```
