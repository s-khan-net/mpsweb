
appmodule.factory("dataService", function($http, $q) {
    var _notices=[
		{'title':'MPS Wins best school award', 'desc':'desc 1'},
		{'title':'Result of painting competition-Swachhta Pakhwadas', 'desc':'desc 2'},
		{'title':'Annual day celebrations', 'desc':'desc 3'},
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
	var _galleryData = [
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
	]
	var _makeimages = function(gallery){
		$.each(_galleries, function(i,v){
			var stub='';
			if(v.title.indexOf('Annual')>-1)
				stub = 'MPS16-AD_';
			else if(v.title.indexOf('Graduation')>-1)
				stub = 'GRA-';
			else if(v.title.indexOf('Athletics')>-1)
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
		});
	}
	var _calendar = {
		'January':[
				{'date':'1','day':'Sunday','event':''},
				{'date':'2','day':'Monday','event':''},
				{'date':'3','day':'Tuesday','event':''},
			],
		'February':[
				{'date':'1','day':'Wednesday','event':''},
				{'date':'2','day':'Thursday','event':''},
				{'date':'3','day':'Friday','event':''},
			],
		};
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
    return {
        getAllNotices: _getAllNotices,
        getTopGalleries: _getTopGalleries,
		getCalendar:_getCalendar,
		getGalleries:_getGalleryData
    };
});