# 📘 Lesson: Submitting Form Data in React (Beginner Friendly)

# 🧠 1. How Forms Work (Basic Idea)

In plain HTML:

- The browser controls the form
- When you click **submit**, the page reloads

In React:

- **React controls the form**
- We store input values in **state**
- We decide what happens when the form is submitted

---

# 🔑 2. Controlled Inputs (Core Concept)

## 💡 What is a Controlled Input?

A controlled input is when:

- The input value is stored in React state
- React becomes the **source of truth**

---

## ✅ Example

```jsx
import { useState } from "react";

const Example = () => {
  const [name, setName] = useState("");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};
```

---

## 🔍 Breakdown

| Part             | Meaning                       |
| ---------------- | ----------------------------- |
| `value={name}`   | Input shows value from state  |
| `onChange`       | Updates state when user types |
| `e.target.value` | Gets what user typed          |

👉 **Result:** React is fully controlling the input

---

# 🔄 3. Handling Multiple Inputs (Smart Way)

Instead of creating separate state for each input, we use **one object**

---

## ✅ Example

```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
});
```

---

## 🧠 Dynamic Update Pattern

```jsx
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
```

---

## 🔍 What is happening here?

| Code              | Meaning                 |
| ----------------- | ----------------------- |
| `...formData`     | Keeps existing data     |
| `[e.target.name]` | Targets the input field |
| `e.target.value`  | New value entered       |

---

## ✅ Inputs Using This Pattern

```jsx
<input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
/>

<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
```

👉 One function updates **all inputs**

---

# 🚀 4. Submitting the Form

## ❌ Default Behavior (HTML)

- Page reloads
- Data is lost

---

## ✅ React Way

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // stop reload
  console.log(formData);
};
```

---

## 🔍 Why `preventDefault()`?

It tells the browser:

👉 “Don’t reload the page — I will handle this.”

---

# 🧪 5. Full Working Example

```jsx
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
```

---

# 🧠 Summary (Very Important)

| Concept            | Meaning                         |
| ------------------ | ------------------------------- |
| Controlled Inputs  | React manages input values      |
| State (`useState`) | Stores form data                |
| `onChange`         | Updates state when typing       |
| Dynamic update     | One function handles all inputs |
| `preventDefault()` | Stops page reload               |

---

# 🎯 Student Exercise

👉 Build a simple form with:

- Name
- Email
- Password

Then:

- Store values in state
- Log them to the console on submit

---

# 🚀 Next Step

After this lesson, you should learn:

- Form validation (required fields, email format)
- Sending data to a backend (API)
- Showing success/error messages

---

💡 **Key Takeaway:**

> In React, forms are not controlled by the browser — they are controlled by your code.
