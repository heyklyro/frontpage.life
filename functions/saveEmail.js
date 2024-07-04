const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/waitlist?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event, context) => {
  try {
    const { email } = JSON.parse(event.body);
    await client.connect();
    const database = client.db('waitlist');
    const collection = database.collection('emails');
    await collection.insertOne({ email });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully added to the waitlist!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add to the waitlist.' }),
    };
  } finally {
    await client.close();
  }
};
