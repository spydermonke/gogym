import pymongo
import json

# Replace the connection string with your MongoDB server details
connection_string = "mongodb+srv://sunny2001pratham:Obf10AJiTmgj2aTD@cluster0.ybeahu7.mongodb.net/gogym?retryWrites=true&w=majority"
database_name = "gogym"
collection_name = "days"
json_file_path = "/home/sunny/Downloads/foodCategory.json"

# Connect to MongoDB server
client = pymongo.MongoClient(connection_string)
database = client[database_name]
collection = database[collection_name]

# Load JSON data from the file
with open(json_file_path, "r") as file:
    data = json.load(file)

# Insert the data into MongoDB
collection.insert_many(data)

print("Data inserted successfully.")
