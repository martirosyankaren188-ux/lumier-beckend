import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const TOKEN = "PUT_YOUR_NEW_TOKEN_HERE"; // ⚠️ փոխիր
const CHAT_ID = "PUT_YOUR_CHAT_ID_HERE";

app.post("/order", async (req, res) => {
  const { name, phone, address, cart } = req.body;

  let text = "✨ NEW LUMIERÉ ORDER\n\n";

  if(cart && cart.length > 0){
    cart.forEach(item => {
      text += • ${item.name} - ${item.price} AMD\n;
    });
  }

  text += \n👤 Name: ${name};
  text += \n📞 Phone: ${phone};
  text += \n📍 Address: ${address};

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

app.listen(3000, () => {
  console.log("🚀 Server running");
});