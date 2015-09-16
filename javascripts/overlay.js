function geojson_popup(event_name) {
  // takes path to geojson file, which can be found for a given event by found
  var path = overlay_res['events/'+ event_name + "/"].geojson
  $.getJSON(path, function(data){
    var object_layer = L.geoJson(data).addTo(map);
    var selector = "[data='" + event_name + "']";
    $(selector)[0].gjobject = object_layer;
  })//, function(data, event_name){
  //});
}

popup_text = function(uid){
  var popup = $('#popup-data')
  $.ajax({
    type: 'GET',
    url: 'events/'+ uid +'/',
    timeout: 5000,
    success: function(data) {

      var eventdata = overlay_res['events/'+uid+'/'];

      // Clean up event html
      var content_start = data.indexOf('<p>');
      var content_finish = data.lastIndexOf('</p>') + "</p>".length;

      var res = eventdata.resources;
      var moreinfo = "";

      // Fetch Event cover and display
      if(eventdata.cover != "") {
        $(".cover").attr('src', eventdata.cover);
        $(".cover").addClass("event-" + uid);
        $(".cover").show();
      } else {
        $(".cover").hide();
      }

      // Build header
      $("#popup-year").text(eventdata.year);
      $("#popup-title").text(eventdata.title);



      if(res.length > 0){
        moreinfo = "<p><a class='has-gallery event-"+ uid + "' href='#" + uid + "'>Image gallery</a></p>"
      }
      var contents = data.substring(content_start, content_finish) + moreinfo;

      // Shrink down if it's too big
      $("#popup-text").html(contents);
      if ($("#popup").height() > 300) {
        $("#popup").height(300);
        $("#popup, .popup-controls-more").hover(
          function() {
            $("#popup").height("auto");
            $('.popup-controls-more').hide();
          }, function() {
            $("#popup").height(300);
            $('.popup-controls-more').show();
          });
      }
      $("#popup").fadeIn();
      var more_info_link = $(".event-"+uid);
      more_info_link.magnificPopup({
        items:res,
        gallery: {
          enabled: true
        },
        type: 'image'
      });
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {}
  });
  return popup;
}

overlay_res = {
  
  "events/1992-community-planning-workshop/":{
    title: "Community Planning Workshop",
    year: "1992",
    resources: [
    
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-community-planning-workshop/Ch.3_Report_on_Community_Planning_Weekend.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1992-community-planning-workshop/cover.jpg'
    
  },
  
  "events/1985-second-hulme-conference/":{
    title: "Second Hulme Conference",
    year: "1985",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1985-second-hulme-conference/second_hulme_conference.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
      
      
    ],
    geojson:
    
      'events/1985-second-hulme-conference/file.geojson',
    
    cover:
    
      'events/1985-second-hulme-conference/cover.png'
    
  },
  
  "events/1988-housing-defects-in-manchester/":{
    title: "Housing Defects In Manchester",
    year: "1988",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1988-housing-defects-in-manchester/Housing_Defects_in_Manchester.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1988-housing-defects-in-manchester/cover.png'
    
  },
  
  "events/1990-pig/":{
    title: "P.I.G. (Public Information Gazette)",
    year: "1990",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1990-pig/1993_04_-_P.I.G._issue_20.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1990-pig/1992_08_-_PIG_issue_13.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1990-pig/1990_03_-_PIG_issue_2.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
    ],
    geojson:
    
      'events/1990-pig/file.geojson',
    
    cover:
    
      'events/1990-pig/cover.jpg'
    
  },
  
  "events/1984-the-hulme-project/":{
    title: "The Hulme Project",
    year: "1984",
    resources: [
    
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1984-the-hulme-project/Hulme_Workshops.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
    ],
    geojson:
    
      'events/1984-the-hulme-project/file.geojson',
    
    cover:
    
      ''
    
  },
  
  "events/1990-homocult/":{
    title: "Homocult",
    year: "1990",
    resources: [
    
    
      
      
      
      
        
      
      {
      src: "events/1990-homocult/3.jpg",
      type: "image"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1990-homocult/homocult_history.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
      
      {
      src: "events/1990-homocult/2.jpg",
      type: "image"
      },
    
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1990-homocult/cover.jpg'
    
  },
  
  "events/1985-hulme-tenants-alliance/":{
    title: "Hulme Tenant's Alliance",
    year: "1985",
    resources: [
    
    
      
      
      
      
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1985-hulme-tenants-alliance/hulme_tenants_alliance_establishment.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
    ],
    geojson:
    
      'events/1985-hulme-tenants-alliance/file.geojson',
    
    cover:
    
      'events/1985-hulme-tenants-alliance/cover.jpg'
    
  },
  
  "events/1997-homes-work-for-change/":{
    title: "Homes & Work For Change",
    year: "1997",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Signs_of_Life.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Scheme_information.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
      
      {
      src: "events/1997-homes-work-for-change/20150728105816_00002.jpg",
      type: "image"
      },
    
      
      
      
      
        
      
      {
      src: "events/1997-homes-work-for-change/20150728105816_00006.jpg",
      type: "image"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Site_plan.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Information_leaflet.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Infopack.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Homes_for_Change_presentation_leaflet.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Project_diagram.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-homes-work-for-change/Homes_for_Change_newsletter_26_08_1999.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
    ],
    geojson:
    
      'events/1997-homes-work-for-change/file.geojson',
    
    cover:
    
      'events/1997-homes-work-for-change/cover.png'
    
  },
  
  "events/1985-from-hulme-all-blessings-flow/":{
    title: "From Hulme All Blessings Flow",
    year: "1985",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1985-from-hulme-all-blessings-flow/From_Hulme_All_Blessings_Flow.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1985-from-hulme-all-blessings-flow/cover.png'
    
  },
  
  "events/1983-old-pubs-of-hulme/":{
    title: "The Old Pubs of Hulme",
    year: "1983",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1983-old-pubs-of-hulme/The_Old_Pubs_of_Hulme.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1983-old-pubs-of-hulme/cover.png'
    
  },
  
  "events/1994-hulme-guide-to-development/":{
    title: "Hulme Guide To Development",
    year: "1994",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1994-hulme-guide-to-development/Guide_to_Development_-_Hulme_Manchester.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1994-hulme-guide-to-development/cover.png'
    
  },
  
  "events/1880-fancy-dress-ball-raid/":{
    title: "Fancy Dress Ball Raid",
    year: "1880",
    resources: [
    
    
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/06 Ordnance Survey Map showing layout of Hulme Place.jpg",
      type: "image"
      },
    
      
      
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/01 Jerome Caminada.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/08 Ordnance Survey Map showing layout of Hulme Place.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/07 York Place, Hulme, 1922.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/04 Ordnance Survey Map showing location of Hulme Place.jpg",
      type: "image"
      },
    
      
      
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/02 Detective Chief Constable Charles Malcolm Wood.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1880-fancy-dress-ball-raid/05 Violet St, nos 2-14, Hulme, 1914.jpg",
      type: "image"
      },
    
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1880-fancy-dress-ball-raid/cover.jpg'
    
  },
  
  "events/1990-hulme-park/":{
    title: "Hulme Park",
    year: "1991",
    resources: [
    
    
    ],
    geojson:
    
      '',
    
    cover:
    
      ''
    
  },
  
  "events/1906-pryme-street-baths-and-wash-house/":{
    title: "Pryme Street Baths and Wash House",
    year: "1906",
    resources: [
    
    
      
      
        
      
      {
      src: "events/1906-pryme-street-baths-and-wash-house/IMG_0832.jpg",
      type: "image"
      },
    
      
      
      
      
      
      
        
      
      {
      src: "events/1906-pryme-street-baths-and-wash-house/IMG_0825.jpg",
      type: "image"
      },
    
      
      
    ],
    geojson:
    
      'events/1906-pryme-street-baths-and-wash-house/file.geojson',
    
    cover:
    
      'events/1906-pryme-street-baths-and-wash-house/cover.jpg'
    
  },
  
  "events/1991-views-from-the-crescents/":{
    title: "Views from the Crescents",
    year: "1991",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1991-views-from-the-crescents/views_from_the_crescents.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
      
      {
      src: "events/1991-views-from-the-crescents/index.png",
      type: "image"
      },
    
    ],
    geojson:
    
      'events/1991-views-from-the-crescents/file.geojson',
    
    cover:
    
      ''
    
  },
  
  "events/1992-hulme-city-challenge/":{
    title: "Hulme City Challenge",
    year: "1992",
    resources: [
    
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-hulme-city-challenge/City_Challenge_a_response_from_the_Hulme_Community.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
      
      {
      src: "events/1992-hulme-city-challenge/1990_Hulme_City_Challenge_Plan.jpg",
      type: "image"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-hulme-city-challenge/Tenants_Representatives_s_Year_Two_Review.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-hulme-city-challenge/City_Challenge_Hulme_Action_Plan.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-hulme-city-challenge/Hulme_-_Reasons_to_be_cheerful.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-hulme-city-challenge/Hulme_Housing.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1992-hulme-city-challenge/cover.png'
    
  },
  
  "events/1997-hulme-high-street/":{
    title: "Hulme High Street",
    year: "1997",
    resources: [
    
    
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-hulme-high-street/Hulme_-_Reasons_to_be_cheerful_in_Manchester_Evening_News_25_march_1997.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-hulme-high-street/A_Shopping_Strategy_for_Hulme.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
      
      {
      src: "events/1997-hulme-high-street/Newsletter_of_Hulme_Regeneration_LTD_June_1994-1.png",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1997-hulme-high-street/A_Shopping_Strategy_for_Hulme.png",
      type: "image"
      },
    
      
      
      
      
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1997-hulme-high-street/Newsletter_of_Hulme_Regeneration_LTD_June_1994.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
    ],
    geojson:
    
      'events/1997-hulme-high-street/file.geojson',
    
    cover:
    
      'events/1997-hulme-high-street/cover.jpg'
    
  },
  
  "events/1860-leaf-street-baths-and-wash-house/":{
    title: "Leaf Street Baths and Wash House",
    year: "1860",
    resources: [
    
    
      
      
      
      
        
      
      {
      src: "events/1860-leaf-street-baths-and-wash-house/leaf-st-baths-and-wash-house-female-pool.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1860-leaf-street-baths-and-wash-house/leaf-st-baths-wash-house.jpg",
      type: "image"
      },
    
      
      
      
      
        
      
      {
      src: "events/1860-leaf-street-baths-and-wash-house/leaf-st-baths-males-first-class-pool.jpg",
      type: "image"
      },
    
      
      
    ],
    geojson:
    
      'events/1860-leaf-street-baths-and-wash-house/file.geojson',
    
    cover:
    
      'events/1860-leaf-street-baths-and-wash-house/cover.jpg'
    
  },
  
  "events/1992-gaia-92-bloom-arts/":{
    title: "Gaia 92 and bLoOm Arts",
    year: "1992",
    resources: [
    
    
      
      
      
      
        
      
      {
      src: "events/1992-gaia-92-bloom-arts/20150812173519_00046.jpg",
      type: "image"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-gaia-92-bloom-arts/Gaia_-_The_Book.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
        
        
      
      {
      src: "<div class='embeddedpdf'><embed src='events/1992-gaia-92-bloom-arts/Information_Leaflet.pdf' type='application/pdf'></div>",
      type: "inline"
      },
    
      
      
      
      
        
      
      {
      src: "events/1992-gaia-92-bloom-arts/20150812173519_00019.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1992-gaia-92-bloom-arts/20150812173519_00032.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1992-gaia-92-bloom-arts/20150812173519_00089.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1992-gaia-92-bloom-arts/20150812173519_00053.jpg",
      type: "image"
      },
    
      
      
        
      
      {
      src: "events/1992-gaia-92-bloom-arts/Information_Leaflet.png",
      type: "image"
      },
    
    ],
    geojson:
    
      '',
    
    cover:
    
      'events/1992-gaia-92-bloom-arts/cover.jpg'
    
  },
}
;
