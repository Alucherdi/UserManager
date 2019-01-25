var MongoClient = require("mongodb").MongoClient
var props       = require("../properties")

class UserModel {
	constructor() {
		this.connect = () => MongoClient.connect(props.db.uri, { useNewUrlParser: true })
	}

	async getAll() {
		const client = await this.connect();
		var db = client.db(props.db.name);
		var col = db.collection(props.db.collections.users);
		var res = col.find({});

		client.close();
		
		return res;
	}

	async insert(params) {
		const client = await this.connect();
		var db = client.db(props.db.name);
		var col = db.collection(props.db.collections.users);
		var res = col.insertOne(params);

		client.close();
		
		return res;
	}
}

module.exports = UserModel