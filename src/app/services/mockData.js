'use strict';

angular.module('app').factory('mockData', mockData);

function mockData () {

	function randomInt () {
		return Math.floor((Math.random() * 1000) + 1);
	}

	return {
		"opportunities" : [
		    {
		        "id" : "1",
		        "title" : "Poverty Toolkit Volunteer",
		        "abstract" : "Do you love organizing things? Want to give back to a non-profit that is fighting poverty in NC? Please help us put together participant packets for our poverty simulation toolkit. Dress comfortably and come to our office to help us prepare for our powerful poverty simulation training.",
		        "volunteersNeeded" : 30,
		        "nonprofit" : {
		        	"id" : 1,
		            "name" : "North Carolina Community Action Association",
		            "logoURL" : "http://unsplash.it/100/?random=1"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 1,
		        		"name" : "Poverty"
		        	},
		        	{
		        		"id" : 2,
		        		"name" : "Community"
		        	}
		        ]
		    },
		    {
		        "id" : "2",
		        "title" : "Annual Spring Cleanup-New Hope Overlook",
		        "abstract" : "We've selected the New Hope Overlook Access to Jordan Lake State Recreation Area for a trash cleanup following major flooding in December. The trash follows the wonderful Red Trail, a distance of several miles from Camping Area A to B.",
		        "volunteersNeeded" : 22,
		        "nonprofit" : {
		        	"id" : 2,
		            "name" : "Clean Jordan Lake",
		            "logoURL" : "http://unsplash.it/100/?random=2"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 3,
		        		"name" : "Environment"
		        	}
		        ]		 
		    },
		    {
		        "id" : "3",
		        "title" : "New Hope Creek Cleanup in Durham's Creek Week",
		        "abstract" : "This is part of the City of Durham's Annual Creek Week, a time to discover and clean up Durham's waterways. Participating organizations share a vision for Durham residents to enjoy, feel connected to, and protect local waterways. We will remove trash along the banks of New Hope Creek.",
		        "volunteersNeeded" : 5,
		        "nonprofit" : {
		        	"id" : 2,
		            "name" : "Clean Jordan Lake",
		            "logoURL" : "http://unsplash.it/100/?random=2"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		       	"dateTimeDurations" : [
					{
						"openEnded" : "no",
						"startDate" : "2016-04-01",
						"endDate" : "2016-04-01",
						"startTime" : {
							"olsonTZ" : "America/New_York",
							"time" : "12:00:00"
						},
						"endTime" : {
							"olsonTZ" : "America/New_York",
							"time" : "15:00:00"
						}
					}
				],
		        "causes" : [
		        	{
		        		"id" : 3,
		        		"name" : "Environment"
		        	}
		        ]	
		    },
		    {
		        "id" : "4",
		        "title" : "Design/Production Consultant",
		        "abstract" : "Provid e guid ance and consultation for designing and producing multi-media curricular materials in a timely and cost-effective manner.",
		        "volunteersNeeded" : 10,
		        "nonprofit" : {
		        	"id" : 3,
		            "name" : "BUMP: The Triangle",
		            "logoURL" : "http://unsplash.it/100/?random=3"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 4,
		        		"name" : "Arts & Culture"
		        	},
		        	{
		        		"id" : 5,
		        		"name" : "Children & Youth"
		        	},
		        	{
		        		"id" : 3,
		        		"name" : "Community"
		        	},
		        	{
		        		"id" : 6,
		        		"name" : "Education"
		        	},
		        	{
		        		"id" : 7,
		        		"name" : "Music & Film"
		        	}
		        ]	
		    },
		    {
		        "id" : "5",
		        "title" : "After-School Program Volunteer",
		        "abstract" : "We are looking for enthusiastic program volunteers to assist the instructor at our after-school programs. No musical skills are required.",
		        "volunteersNeeded" : 30,
		        "nonprofit" : {
		        	"id" : 3,
		            "name" : "BUMP: The Triangle",
		            "logoURL" : "http://unsplash.it/100/?random=3"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 6,
		        		"name" : "Education"
		        	}
		        ]	
		    },
		    {
		        "id" : "6",
		        "title" : "Volunteer Administrative Support",
		        "abstract" : "Assist with receptionist duties at the office. We need assistance Monday through Wednesday and Friday between the hours on 10am and 4pm. Mostly in shifts of 3-4 hours.",
		        "volunteersNeeded" : 22,
		        "nonprofit" : {
		        	"id" : 4,
		            "name" : "USCRI Raleigh",
		            "logoURL" : "http://unsplash.it/100/?random=4"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 2,
		        		"name" : "Community"
		        	},
		        	{
		        		"id" : 8,
		        		"name" : "Immigrants & Refugees"
		        	}
		        ]	
		    },
		    {
		        "id" : "7",
		        "title" : "Food Pantry Donation Pick up",
		        "abstract" : "Would you be interested in picking up food donations to keep the shelves of our food pantry filled?",
		        "volunteersNeeded" : 5,
		        "nonprofit" : {
		        	"id" : 5,
		            "name" : "Urban Ministries of Wake County",
		            "logoURL" : "http://unsplash.it/100/?random=5"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 3,
		        		"name" : "Health & Medicine"
		        	},
		        	{
		        		"id" : 2,
		        		"name" : "Poverty"
		        	}
		        ]	
		    },
		    {
		        "id" : "8",
		        "title" : "3rd Wednesday of each month Driver",
		        "abstract" : "North Raleigh Ministry picks up food from grocery stores each week. We are in need of a driver for the 3rd Wednesday of each month.",
		        "volunteersNeeded" : 10,
		        "nonprofit" : {
		        	"id" : 6,
		            "name" : "North Raleigh Ministries",
		            "logoURL" : "http://unsplash.it/100/?random=6"
		        },
		        "image" : {
		            "url" : "http://unsplash.it/600/400/?random=" + randomInt()
		        },
		        "causes" : [
		        	{
		        		"id" : 2,
		        		"name" : "Community"
		        	}
		        ]	
		    }
		]
	}

}