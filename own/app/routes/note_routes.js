var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, db) {
    app.get('/fahad', (req, res) => {
        res.send('fahed handled')
    })
    app.get('/notes', (req, res) => {
        db.collection('notes').find().toArray((err, notes) => {
            if(err){
                res.send({'error': 'An error has occurred'})
            }
            else{
                res.send(JSON.stringify(notes))
            }
        })
    })

    app.get('/notes/:id', (req, res) => {

        const id = req.params.id;
        console.log('am comming', id)
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        });
    });

    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });
};