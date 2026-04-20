const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const TOKEN = "ՔՈ ՆՈՐ TOKEN";
const CHAT_ID = "ՔՈ CHAT_ID";

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.post("/order", async (req, res) => {
  const { name, phone, address, cart } = req.body;

  let text = "✨ NEW ORDER\n\n";

  if (cart && cart.length > 0) {
    cart.forEach(item => {
      text += • ${item.name} - ${item.price} AMD\n;
    });
  }

  text += \n👤 ${name};
  text += \n📞 ${phone};
  text += \n📍 ${address};

  try {
    await fetch(https://api.telegram.org/bot${TOKEN}/sendMessage, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running 🚀");
});