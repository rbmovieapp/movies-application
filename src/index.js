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
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});
-------------------------------------------------------------------------------


<table id="products">
    <thead>
    <tr>
    <th>Title</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Categories</th>
    </tr>
    </thead>
    <tbody id="insertProducts"></tbody>
    </table>
    <button id = "btn">Refresh</button>


    (function() {
      "use strict";
      $(document).ready(function () {

      });


      // TODO: Take the data from inventory.json and append it to the products table
      var  inventory = $.get("src/db.json")
          .done(function (items) {
            for (var i = 0; i < items.length; i++) {
              $('#insertProducts').append(tableData(i));

            }

            function tableData(i) {
              return (
                  '<tr><td>' + items [i].title +
                  '</td><td>' + items [i].quantity +
                  '</td><td>' + items [i].price +
                  '</td><td>' + items[i].categories +
                  '</td></tr>')
            }


            $("#btn").click(function () {
              $('#insertProducts').empty();
              var  inventory = $.get("data/inventory.json")
                  .done(function (items) {
                    for (var i = 0; i < items.length; i++) {
                      $('#insertProducts').append(tableData(i));

                    }

                    function tableData(i) {
                      return (
                          '<tr><td>' + items [i].title +
                          '</td><td>' + items [i].quantity +
                          '</td><td>' + items [i].price +
                          '</td><td>' + items[i].categories +
                          '</td></tr>')
                    }

                  })
            })

          });


    })();

