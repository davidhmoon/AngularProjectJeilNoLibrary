--hotel.data.service; grab api data from database; import HTTPClient in order to use API (need to import in app module as well; import forms module as well to use forms).  Note, API is a JSON service that can only hold 30 objects. For 50 objects, please host local server using my JSON database, and replace url with local host.


--app.component.html
  --nbsp to put space; ngModel to bind the variables to the values of the input boxes. 
  --Used [(ngModel)]="search" (ngModelChange)="onChange($event)"
  But (ngModel) = “search” can replace first half; redundant to be sure.
  --ngFor to loop over filtered hotels array and render.
  --ngOnModelChange pairs with ngModel; event listeners; when text entered into input, fires callback functions onChange and onChangePage, passing value of input box.
  --{{message}} displays message variable string.


--app.component.ts; 
	--lines 10-15 initialize variables
	--import HotelDataService, use in constructor.
	--17-22 set hotels to array of objects from json database using method from service.
	
  
--onChange. Sets search to value of search input box.
	--sets filtered hotel to return value of filtered function (will cover return value later).
	--sets conditional rendering: if filtered_hotel array length is less than 1, then return the error message (if not filtered hotel exist), mimic 404 error result api call.
	--fires its message when inputting into search box.
	
  
--onChangePage. Converts value of page input box fired by onChangePage into number and sets to page variable.
    --sets filtered hotel to return value of filtered function (will cover return value later).
    ----sets conditional rendering: if filtered_hotels array length is less than 1, then return the error message. 
    --fires its message when page numbers is being modified.
	
  
--getFiltered. Sets page size hard coded to 3; can adjust for different page sizes.
    --sets results as equal to hotel array (total database) filtered to an array of objects for which the search result lower case is included in the name     property lower case. (search is set by input in the input box).
    --start and end help slice results as defined above to display the Page Size number of elements (hard coded here to 3). 
    --(page number of 1 would be start end 0-3 ending not inclusive; page number 2 would be 3-6; etc).
    --return the sliced 3 filtered elements (again adjustable based on page number) 


Overall
--Filteredresults is an array that is looped over in li. getFiltered sets filteredresults, and getFiltered is called every time onChange or onChangepage is fired by input in search or page box. Therefore, what is displayed changes every time some result is inputted into search or page box.  


--appModule TS
	--imported forms module and httpclient module to use forms and api call.


--all other files and code default angular files.
