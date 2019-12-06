//Edit 'key' and 'columns' to connect your spreadsheet

//enter google sheets key here
var key =
  "13VVszk4b5-yoZHiCqmwjTDGF2wbfO5LZDE25H1S9s8M";

//"data" refers to the column name with no spaces and no capitals
//punctuation or numbers in your column name
//"title" is the column name you want to appear in the published table
var columns = [
  {"data": "lastName","title": "Surname"},
  {"data": "firstName","title": "Forename"},
  {"data": "image","title": "Picture"},
  {"data": "description","title": "Description"},
  {"data": "email","title": "Email Address"},
  {"data": "website", "title": "Website"},
  {"data": "title", "title":"Title"},
  {"data": "officeAdd", "title":"Office Address"},
  {"data": "streetAdd", "title":"Street Address"},
  {"data": "offPhone", "title":"Office Phone"},
  {"data": "deptOffice","title":"Department or Office"},
  {"data": "schUnit","title": "School or Unit"},
  {"data": "keywords", "title": "Keywords"},
  {"data": "statement"," title":"Statement"},
  {"data": "orgProj"," title":"Department or Office"}

];


$(document).ready(function() {

  function initializeTabletopObject() {
    Tabletop.init({
      key: key,
      callback: function(data, tabletop) {
        writeTable(data); //call up datatables function
      },
      simpleSheet: true,
      debug: false
    });
  }

  initializeTabletopObject();

  function writeTable(data) {
    //select main div and put a table there
    //use bootstrap css to customize table style: http://getbootstrap.com/css/#tables
    $('#graphic').html(
      '<table cellpadding="0" cellspacing="0" border="0" class="table table-responsive table-bordered table-hover" id="mySelection"></table>'
    );

    //initialize the DataTable object and put settings in
    $("#mySelection").DataTable({
      "autoWidth": true,
      "data": data,
      "columns": columns,
      "order": [
        [2, "desc"]
      ], //order on second column
      "pagingType": "simple" //no page numbers
        //uncomment these options to simplify your table
        //"paging": false,
        //"searching": false,
        //"info": false
    });
  }
});
//end of writeTable
