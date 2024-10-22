import app from "./app.js";

const port = app.get("port") || 8000;

app.listen(port, () => {
    console.log(`Feathers app started at port ${port}`)
});