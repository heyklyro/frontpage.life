const { MongoClient } = require('mongodb');

// Use the environment variable for the MongoDB connection string
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.handler = async (event, context) => {
  try {
    // Parse the incoming request body to get the email
    const { email } = JSON.parse(event.body);
    
    // Connect to MongoDB
    await client.connect();
    
    // Specify the database and collection
    const database = client.db('waitlistdb');  // Database name
    const collection = database.collection('emails');  // Collection name
    
    // Insert the email into the collection
    await collection.insertOne({ email });
    
    // Return a success message
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully added to the waitlist!' }),
    };
  } catch (error) {
    // Return an error message if something goes wrong
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to add to the waitlist.' }),
    };
  } finally {
    // Close the connection to MongoDB
    await client.close();
  }
};
