
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About the people",
    "body": "We are a couple of expats, who immigrated from India to US, and ended up in Glen Rock, NJ. Over the years we have kept the Indian culture alive by organizing festivals, cultural events, donation drives. This site serves as a timeline of our history in Glen Rock, documenting our memories around past events. If you would like to post an article about an event being hosted or would like to document past events, check the github page for more details.  "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Diwali - Registration                              :               Glen Rock is back to celebrating Diwali in style again, with Drinks, DJ, Dance, Dinner and a lot more!:                                                                       13 Sep 2022                &lt;/span&gt;                                                                                                                                                            All Stories:                                                                                                     Save the Date!              :       Glen Rock is back to celebrating Diwali in style again, with Drinks, DJ, Dance, Dinner and a lot more!:                               09 Sep 2022        &lt;/span&gt;                                                                                                                             Diwali Fest              :       With COVID-19 restrictions still in place, we have decided to host a Diwali Mela on open ground. :                               23 Oct 2021        &lt;/span&gt;                                                                                                                             Holi 2020 - Poster              :       Registrations open! Check Glen Rock Indian Community Facebook Page:                               12 Feb 2020        &lt;/span&gt;                                                                                                                             Holi 2019 - Poster              :       Registrations open! Check Glen Rock Indian Community Facebook Page:                               21 Apr 2019        &lt;/span&gt;                                                                                                                             Diwali - Poster              :       Registrations open! Check Glen Rock Indian Community Facebook Page:                               02 Nov 2018        &lt;/span&gt;                                                                                                                             Bollywood Night              :       Glen Rock Indian Community presented their first Bollywood night at the High School Cafeteria. Kids from all grades participated. Ashwin taught some dances. Kids from all GR schools participated and. . . :                               02 Aug 2017        &lt;/span&gt;                                       &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 6,
    "url": "http://localhost:4000/diwali-registration-2022/",
    "title": "Diwali - Registration",
    "body": "2022/09/13 - Glen Rock is back to celebrating Diwali in style again, with Drinks, DJ, Dance, Dinner and a lot more! Welcome to Diwali 2022, now that things are back to the old normal, it’s time we celebrate things the old normal way! Dress up in your fanciest traditional garb and join us for the ultimate Diwali Party of the YEAR! Sign up for Diwali 2022: Loading… "
    }, {
    "id": 7,
    "url": "http://localhost:4000/pre-diwali-2022/",
    "title": "Save the Date!",
    "body": "2022/09/09 - Glen Rock is back to celebrating Diwali in style again, with Drinks, DJ, Dance, Dinner and a lot more! Save the date, more details coming soon!! "
    }, {
    "id": 8,
    "url": "http://localhost:4000/diwali_mela-2021/",
    "title": "Diwali Fest",
    "body": "2021/10/23 - With COVID-19 restrictions still in place, we have decided to host a Diwali Mela on open ground. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/holi-2020/",
    "title": "Holi 2020 - Poster",
    "body": "2020/02/12 - Registrations open! Check Glen Rock Indian Community Facebook Page "
    }, {
    "id": 10,
    "url": "http://localhost:4000/holi-2019/",
    "title": "Holi 2019 - Poster",
    "body": "2019/04/21 - Registrations open! Check Glen Rock Indian Community Facebook Page "
    }, {
    "id": 11,
    "url": "http://localhost:4000/diwali-2018/",
    "title": "Diwali - Poster",
    "body": "2018/11/02 - Registrations open! Check Glen Rock Indian Community Facebook Page "
    }, {
    "id": 12,
    "url": "http://localhost:4000/bollywood-night/",
    "title": "Bollywood Night",
    "body": "2017/08/02 - Glen Rock Indian Community presented their first Bollywood night at the High School Cafeteria. Kids from all grades participated. Ashwin taught some dances. Kids from all GR schools participated and enjoyed the event. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/holi-2017/",
    "title": "Holi 2017 - Poster",
    "body": "2017/04/22 - Registrations open! Check Glen Rock Indian Community Facebook Page "
    }, {
    "id": 14,
    "url": "http://localhost:4000/diwali-2016/",
    "title": "Diwali 2016 - Poster",
    "body": "2016/10/22 - Registrations open! Check Glen Rock Indian Community Facebook Page "
    }, {
    "id": 15,
    "url": "http://localhost:4000/diwali_2015/",
    "title": "Diwali 2015",
    "body": "2015/11/20 - We successfully conducted our second Diwali festival at Glen Rock! The kids put together an awesome Ramayan show. Check the pictures out below. Special Thanks to Pushpesh Gupta! Our Awesome Ravan: "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});