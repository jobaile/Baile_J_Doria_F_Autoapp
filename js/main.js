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
            fetchSingle(e) {
                //debugger;
                //console.log("from fetchSingle");
                this.fetchCarData(e.currentTarget.dataset.part);

            },

            loadPart(e) {
                //debugger;
                //console.log("from loadPart");
                e.preventDefault(); // block a page reload (anchor tag default behaviour

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.partdata.filter(tbl_details => tbl_details.details_id === dataKey);

                this.parttitle = currentData[0].details_part;
                this.partdesc = currentData[0].detail_desc;

                this.showDetails = true;

                setTimeout(function(){ window.scrollTo(0, 1200)}, 500)
            },

            fetchCarData(part) {
                //console.log("from fetchCarData");
                let url = part ? `./includes/index.php?part=${part}` : './includes/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (part) {
                        // this fetches one part
                        this.singledata = data; //this is gonna go to the data
                    } else {
                        // this will push all the content
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