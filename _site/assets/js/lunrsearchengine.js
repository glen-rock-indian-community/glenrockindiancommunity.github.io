
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Celebrating Diwali                              :               Welcome to Diwali 2022, now that we are back to the old normal, it’s time we celebrate things like the old normal. :                                                                       12 Sep 2022                &lt;/span&gt;                                                                                                                        All Stories:                                                                                                     Glen Rock Holi 2018 - Happy Earth Day              :       https://www. facebook. com/media/set/?set=a. 1677931428926720&amp;type=3:                               04 May 2018        &lt;/span&gt;                                                                                                                             Bollywood Night              :       Glen Rock Indian Community presented their first Bollywood night at the High School Cafeteria. Kids from all grades participated. Ashwin taught some dances and folks help me with some wordings. . . . . :                               02 Aug 2017        &lt;/span&gt;                                                                                                                             Diwali 2015              :       We successfully conducted our second Diwali festival at Glen Rock! The kids put together an awesome Ramayan show. Check the pictures out below. :                               20 Nov 2015        &lt;/span&gt;                                    "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/pre-diwali-2022/",
    "title": "Celebrating Diwali",
    "body": "2022/09/12 - Welcome to Diwali 2022, now that we are back to the old normal, it’s time we celebrate things like the old normal. Glen Rock is back to celebrating Diwali in style again, with Drinks, DJ, Dance, Dinner and a lot more! Dress up in your fanciest traditional garb and join us "
    }, {
    "id": 6,
    "url": "http://localhost:4000/holi-2018/",
    "title": "Glen Rock Holi 2018 - Happy Earth Day",
    "body": "2018/05/04 - https://www. facebook. com/media/set/?set=a. 1677931428926720&amp;type=3 "
    }, {
    "id": 7,
    "url": "http://localhost:4000/bollywood-night/",
    "title": "Bollywood Night",
    "body": "2017/08/02 - Glen Rock Indian Community presented their first Bollywood night at the High School Cafeteria. Kids from all grades participated. Ashwin taught some dances and folks help me with some wordings. . "
    }, {
    "id": 8,
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