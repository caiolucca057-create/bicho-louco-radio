const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("."));

app.get("/api/status", (req, res) => {
    res.json({
        online: true,
        radio: "Bicho Louco do Mato Rádio"
    });
});

app.listen(PORT, () => {
    console.log(`📻 Rádio rodando na porta ${PORT}`);
});