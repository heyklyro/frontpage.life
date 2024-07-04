const { MongoClient } = require('mongodb');

// Use the environment variable for the MongoDB connection string
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event, context) => {
  console.log('Received event:', event);

  try {
    // Parse the incoming request body to get the email
    const { email } = JSON.parse(event.body);
    console.log('Parsed email:', email);

    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');

    // Specify the database and collection
    const database = client.db('waitlistdb');  // Database name
    const collection = database.collection('emails');  // Collection name
    
    // Insert the email into the collection
    const result = await collection.insertOne({ email });
    console.log('Insert result:', result);

    // Return a success message
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully added to the waitlist!' }),
    };
  } catch (error) {
    // Log and return an error message if something goes wrong
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add to the waitlist.', error: error.message }),
    };
  } finally {
    // Close the connection to MongoDB
    await client.close();
    console.log('Closed MongoDB connection');
  }
};
