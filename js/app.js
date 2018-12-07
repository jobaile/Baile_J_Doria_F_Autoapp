(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            welcomemessage : "Explore the Bugatti Veyron",
            
            partdata : [], //this gets the array
            singledata : [],

            parttitle : "",
            partdesc : "",

            showDetails : false
        },


        created : function(){
            //this witll fetch the data during page load
            this.fetchCarData(null);
        },

        methods : {
            login() {
                //stub
                console.log('login functionality');
            },

            fetchSingle(e) {
                //debugger;
                this.fetchCarData(e.currentTarget.dataset.part);

            },

            loadPart(e) {
                //debugger;
                e.preventDefault(); // block a page reload (anchor tag default behaviour

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.partdata.filter(tbl_details => tbl_details.details_id === dataKey);

                this.parttitle = currentData[0].details_part;
                this.partdesc = currentData[0].detail_desc;

                this.showDetails = true;

                setTimeout(function(){ window.scrollTo(0, 1200)}, 500)
            },

            fetchCarData(part) {
                //this is a ternary statement (shorthand for if/else). left of the : is true, right is false
                let url = part ? `./includes/index.php?part=${part}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (part) {
                        // this fetches one work
                        this.singledata = data; //this is gonna go to the data
                    } else {
                        // this will push all the portfolio content
                        this.partdata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();