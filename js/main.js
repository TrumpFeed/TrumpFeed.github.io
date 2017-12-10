var FEEDURL = "https://trumpfeedreader.herokuapp.com/feed";
var TWITTERTWEETBASEURL = "https://twitter.com/realDonaldTrump/status/";

$.post(FEEDURL, function(feeds, status){
    for(var i=feeds.length-1; i>0 ; i--){
      createFeed(feeds[i]);
    }
});

function createFeed(feed) {
  if(feed.type == 'twitter'){
    feed.summary = '<a class="waves-effect waves-light btn-small" target="_blank" href="' + TWITTERTWEETBASEURL + feed.id +
    '">View it on Twitter</a>';
    feed.icontype = "public";
  }else{
    feed.icontype = "rss_feed";
    feed.summary = feed.summary.replace(/<(?:.|\n)*?>/gm, '');
    feed.summary += '<a class="waves-effect waves-light btn-small" target="_blank" href="' + feed.origlink +
      '">View it on CNN</a>';
  }
  feed.timeago = moment(feed.created_at).fromNow(true);

  var feedHTML = '<li>'+
    '<div class="collapsible-header"><i class="material-icons" title="' + feed.type +
    '">'+ feed.icontype +
    '</i>'+ feed.full_text +
    '<span class="badge">'+ feed.timeago +
    '</span></div>'+
    '<div class="collapsible-body"><span>'+ feed.summary +
    '<br><i>' + new Date(feed.created_at) +
    '</i></span></div>'+
  '</li>';

  $("#twitterFeedAccordion").append(feedHTML);
}
