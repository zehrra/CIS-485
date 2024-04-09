use weatherData

db.createCollection("mayors")
db.createCollection("cities")

db.mayors.insertOne({
    "firstname": "John",
    "lastname": "Doe",
    "birthdate": "1970-01-01",
    "political_party": "Independent",
    "terms_served": [
    {
    "start_year": 1998,
    "end_year": 2002,
    "city": "CityA"
    }
    ]
   })

   var mayorId = db.mayors.findOne({"firstname": "John", "lastname": "Doe"})._id

db.cities.insertOne({
    "name": "CityA",
    "years": [
    {
    "year": 1999,
    "population": 100000,
    "income_distribution": {
    "percent_poor": 20,
    "percent_middle": 50,
    "percent_wealthy": 30
    },
    "weather": {
    "total_precipitation": 500,
    "temperature": {
    "annual_high": 30,
    "annual_low": -5
    }
    },
    "mayor": mayorId
    }

    ]
})

db.mayors.find()

db.mayors.find({},firstname: 1, _id: 0);

db.cities.find({"years.mayor": 1})

{
    $project: {
    _id: 0, // Exclude the _id field
    name: 1, // Include the city name
    annualWeatherData: "$years.weather" // Project only the weather data from each year
    }
    }
   ])

   db.mayors.updateOne(
    { "_id": ObjectId("660a332ae2224a8e3a5af787") },
    { $set: { "lastname": "Anastasio" } }
   );
   
   db.mayors.deleteOne({ "_id": ObjectId("660a332ae2224a8e3a5af787") });

mongoimport --db <database_name> --collection mayors --file /path/to/mayors.json --jsonArray
mongoimport --db <database_name> --collection cities --file /path/to/cities.json --jsonArray