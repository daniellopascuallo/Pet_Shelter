const express = require('express'),
    cors = require('cors'),
    app = express(),
    port = 8000,
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/config.database");
require("./server/routes/route.pets")(app);