const $ = require('jquery');

/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');



/**
 * require style imports
 */
const {getMovies} = require('./api.js');


getMovies().then((movies) => {
    console.log('Here are all the movies:');
    movies.forEach((movie) => {
        console.log(`id#${movie.id} - ${movie.title} - rating: ${movie.rating}`);
        $('#insertProducts').html(createMovieString(movies));
        Promise.resolve().then(r => 'success');
    })
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


window.onload = function () {
    alert('Loading!....');
};





let createMovieString = (moviesObj) => {
    let htmlString = '';

    moviesObj.forEach((movie) => {
        htmlString += `<tr>
                      <td scope="row"> ${movie.title} </td>
                      <td> ${movie.rating}/5</td>
                      </tr>`;
    });
    return htmlString;
};

$('#add').click(function (event) {
  const newMovieTitle = $('#newMovie').val();
  const newMovieRating = $('#selectRating').val();

  $.ajax("/api/movies", {
    type: "POST",
    data: {
      title: newMovieTitle,
      rating: newMovieRating
    }
  })  });




// $('#add').click(function () {
//   $('#insertProducts').empty();
//   let movies = $.get('../db.json')
//       .done(function (movie) {
//         for(let i=0; i<movie.length; i++){
//           $('#insertProducts').append(createMovieString(i));
//         }
//       })
// });






// getMovies().then((movies) => {
//   console.log('Here are all the movies:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//     $('#products').append
//             ('<tr><td>' + `id#${id}` + '</td></tr>')
  // });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });

// -------------------------------------------------------------------------------

    //
    // (function() {
    //   "use strict";
    //   $(document).ready(function () {
    //
    //     function tableLoad (){
    //         $.ajax('../db.json')
    //             .done(function (movies) {
    //                 for (let i=0; i<movies.length; i++) {
    //                     $('#insertMovies').append
    //                     (
    //                         "<tr><td>" + movies[i].title +
    //                         "</td><td>" + movies[i].rating +
    //                         "</td><td>" + movies[i].id +
    //                         "</td></tr>"
    //                     )
    //                 } //for loop close //
    //             }) //.done function close//
    //     } // tableLoad function close //
    //
    //       tableLoad()
    //       $('#refresh').click(function (){
    //           $('#insertMovies').empty();
    //           tableLoad()
    //       }) // refresh close //
    //
    //   });  // document ready close //
    //
    // })(); // iffe close //

