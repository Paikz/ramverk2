/**
 * Connect to the database and search using a criteria.
 */
"use strict";

// MongoDB
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/mumin";

//Setup to read file
const fs = require("fs");
const path = require("path");
const setupJson = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));

var db = {
  async setup() {
      const db  = await mongo.connect(dsn);
      const col = await db.collection("crowd");

      await col.deleteMany();
      await col.insertMany(setupJson);

      await db.close();
  },

  async read(criteria, projection, limit) {
        const db  = await mongo.connect(dsn);
        const col = await db.collection("crowd");
        const res = await col.find(criteria, projection).limit(limit).toArray();

        await db.close();

        return res;
  },

  async create(id, object) {
        await console.log("we are here");
        const db = await mongo.connect(dsn);
        const col = await db.collection("crowd");
        const res = await col.updateOne(id, {$set: object}, {upsert: true});

        await db.close();

        await console.log(res);

        return res;
    },

    async delete(query)  {
        const db  = await mongo.connect(dsn);
        const col = await db.collection("crowd");
        const res = await col.deleteOne(query);

        await db.close();

        return res;
    }
}

module.exports = db;
