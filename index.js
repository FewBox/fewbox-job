import fs from 'fs';

fs.readFile('appsettings.json', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(data).fewbox);
});