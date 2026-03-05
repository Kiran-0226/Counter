# Counter Web App

A simple **Counter Web Application** built using **HTML, CSS, and JavaScript**.
This project allows users to increment, decrement, and reset a counter using interactive buttons.

---

## 🚀 Features

* ➕ Increment the counter
* ➖ Decrement the counter
* 🔄 Reset the counter to zero
* 🎨 Clean and simple UI
* 📱 Responsive centered layout
* ⚡ Fast and lightweight (no frameworks)

---

## 📂 Project Structure

```
counter-project
│
├── index.html     # Main HTML structure
├── style.css      # Styling for the counter UI
├── script.js      # Counter logic using JavaScript
└── README.md      # Project documentation
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the webpage
* **CSS3** – Styling and layout
* **JavaScript (Vanilla JS)** – Counter functionality

---

## 📋 How It Works

The application uses **JavaScript event listeners** to detect button clicks.

* **Increment Button (+)** increases the counter value.
* **Decrement Button (-)** decreases the counter value (only if greater than 0).
* **Reset Button** sets the counter value back to 0.

Example logic:

```javascript
let count = 0;

increment.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});
```

---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/Kiran-0226/Counter.git
```

2. Open the project folder.

3. Open **index.html** in your browser.

---

## 📸 Preview

The application displays:

* A **Counter heading**
* The **current count value**
* **Three buttons**:

  * Decrement (-)
  * Reset
  * Increment (+)

---

## 💡 Future Improvements

* Add **keyboard shortcuts**
* Add **dark/light mode toggle**
* Store counter value using **Local Storage**
* Add **animations to buttons**

---

## 📜 License

This project is open-source and free to use.

---

⭐ If you like this project, consider giving it a star on GitHub!
