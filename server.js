const express = require('express');
const xml2js = require('xml2js');
const app = express();
const fs = require('fs');
var cors = require('cors')

app.use(cors())

app.get('/data', (req, res) => {
    fs.readFile('./export_full.xml', 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        // Convert the XML data to JSON
        xml2js.parseString(data, { explicitArray: false }, (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
        
            res.send(JSON.stringify(result.export_full.items.item, null, 4));
            // console.log(JSON.stringify(result.export_full.items.item.length))

        });
    });
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});

