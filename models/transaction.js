/* models/transaction.js
 * The schema for a transaction. A transaction has a buyer and a listing, 
 * a status (with regards to transaction already completed, etc), a start 
 * time, a time for the buyer and seller to meet, a location for that 
 * meetup, and an array of strings which holds the conversation between
 * buyer and seller
 */

var mongoose = require('mongoose');
var Listing = require('../models/listing.js');

var transSchema = mongoose.Schema({
	buyer     : { type : String },
	listing   : { type : mongoose.Schema.Types.ObjectId, ref: 'Listing'},
	status    : { type : String }, //possible values: "ongoing", "completed", "failed"
	startTime : { type : Date   },
	transTime : { type : Date   }, //prospective meetup time
	transLoc  : { type : String }, //prospective meetup location
	seller    : { type : String }, //had to add this to make rendering the profile page easier

	transConv : [{
		mContent: { type : String },
		mSender:  { type : String },
		mTime:    { type : Date   }, 
		mType:    { type : String }  //options: "userM", "errorM", "meetupM"
	}]
});

module.exports = mongoose.model('Transaction', transSchema);

