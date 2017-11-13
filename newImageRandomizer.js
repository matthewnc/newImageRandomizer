//I want to rework the code for the randomizer on my website so that it can work with any number of images in the target image folder.
//I figured the best way to do this would be a program which populates an empty array with the filenames of the images I'm using, and then choose random indices to pop out and use from there.
//If you want me to word it as a question, I guess it would be, "How do I use javascript to copy the names of files in a given location into an array?"
//I've done some research, and it seems the best way to do this is to use the jQuery.get function, which as far as I can tell, pulls information from a specific directory.

//I found some code on stack overflow which is as follows:

$.get('/usethese/random/', function(data) {  //that would be the relative directory of my image library, I shouldn't have to explicitly state the whole URL correct?

    var $linkElements = $('a');
    var FilesArray = $(data).find($linkElements); //I don't really know what any of this means...
    FilesArray.shift(); //This removes the first element, which is the parent directory link.

    //doing this 3 times and splicing the image from the array after removes the chance of duplicates
    var length = FilesArray.length;
    var value = math.round(math.random(0, length + 1));
    document.getElementById("randomImage1").src = FilesArray[value];
    FilesArray.splice(value, 1);

    var length = FilesArray.length;
    var value = math.round(math.random(0, length + 1));
	document.getElementById("randomImage2").src = FilesArray[value];
    FilesArray.splice(value, 1);

    var length = FilesArray.length;
    var value = math.round(math.random(0, length + 1));
	document.getElementById("randomImage3").src = FilesArray[value];
    FilesArray.splice(value, 1);
    
});