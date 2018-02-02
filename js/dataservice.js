
appmodule.factory("dataService", function($http, $q) {
    var _notices=[
		{'title':'Teachers symposium in mps', 'desc':'Mysore public school conducted a symposium for school teachers from mysore.'},
		{'title':'Public examinations for class 10', 'desc':'Details of the exam locations and hall ticket will be given to students who are up for the exams - All the best to all of you.'},
		{'title':'Annual day celebrations', 'desc':'The annual day is was celebated for this year in the school premisis.'},
		];
	var _galleries=[
			{
				'title':'Graduation Day - 2016-17',
				'path':'./images/gallery/GradDay16-17/',
				'thumbpath':'./images/gallery/GradDay16-17/thumbnails/',
				'images':[]
			},
			{
				'title':'Annual day 2016',
				'path':'./images/gallery/AnnualDay16/',
				'thumbpath':'./images/gallery/AnnualDay16/thumbnails/',
				'images':[]
			},
			{
				'title':'Athletics meet 2016',
				'path':'./images/gallery/AthleticMeet16/',
				'thumbpath':'./images/gallery/AthleticMeet16/thumbnails/',
				'images':[]
			}
		];
	var _makeimages = function(gallery){
		$.each(_galleries, function(i,v){
			var stub='';
			if(v.title.indexOf('Annual')>-1){
				stub = 'MPS16-AD_';
				if(v.title == gallery){
					for(var i=1;i<=15;i++){
						var img = {
							'thumb'	:v.thumbpath+stub+i.toString()+'_tn.jpg',
							'pic':v.path+stub+i.toString()+'.jpg'
						};
						v.images.push(img);
					}
				}
			}
			else if(v.title.indexOf('Graduation')>-1){
				stub = 'GRA-';
				if(v.title == gallery){
					for(var i=1;i<=15;i++){
						var img = {
							'thumb'	:v.thumbpath+stub+i.toString()+'_tn.jpg',
							'pic':v.path+stub+i.toString()+'.jpg'
						};
						v.images.push(img);
					}
				}
			}
			else if(v.title.indexOf('Athletics')>-1){
				stub='Sports';
				if(v.title == gallery){
					for(var i=1;i<=15;i++){
						var img = {
							'thumb'	:v.thumbpath+stub+i.toString()+'_tn.jpg',
							'pic':v.path+stub+i.toString()+'.jpg'
						};
						v.images.push(img);
					}
				}
			}

		});
	}
	var _calendar = [
		{	
			'month':'January 2018',
			'days':[
				{'date':'1','day':'Sunday','event':'Event 1'},
				{'date':'2','day':'Monday','event':'Event 2'},
				{'date':'3','day':'Tuesday','event':'Event 3'},
			]
		},
		{
			'month':'February 2018',
			'days':[
					{'date':'1','day':'Wednesday','event':'Event1'},
					{'date':'2','day':'Thursday','event':'Event 2'},
					{'date':'3','day':'Friday','event':'Event 3'},
				]
		}
	];
	var months = ["January", "February", "March", "April", "May", "June", "July",
         "August", "September", "October", "November", "December"];
	var d = new Date();

	var namedMonth = months[d.getMonth()];
	
	var _getAllNotices = function () {
		return _notices;
    }
    var _getTopGalleries = function(){
    	return _galleries;
    }
    var _getCalendar = function(){
    	return _calendar;
    }
	var _getGalleryData = function(){
		var gallery = _galleries;
		$.each(gallery,function(i,v){
			_makeimages(v.title);
		});
		return gallery;
	}
	var _getCalendarForMonth = function(){
		var c='';
		var calendar = _calendar;
		$.each(calendar,function(i,v){
			if(v.month.indexOf(namedMonth)>-1){
				c = v.days;
			}
		});
		return c;
	}
	var _getCurrentMonth = function(){
		return namedMonth;
	}
    return {
        getAllNotices: _getAllNotices,
        getTopGalleries: _getTopGalleries,
		getCalendar:_getCalendar,
		getGalleries:_getGalleryData,
		getCalendarForMonth:_getCalendarForMonth,
		getCurrentMonth:_getCurrentMonth
    };
});