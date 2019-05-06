    
let x=document.getElementById('ProfileDisplay');
let y=document.getElementById('Addprofile');
let z=document.getElementById('UpdateProfile');
let giftlist   =document.getElementById('Giftlist');



var db = new PouchDB('empiree_db');
console.log("the device is not ready")
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert ("Device is ready!!");
    console.log("the database is created")
    db = new PouchDB("contact_db");
    alert ("DB created!!");
}
function addContact() {
        var full_name=document.getElementById("full_name").value;
            var phone_num=document.getElementById("phone_num").value;
                var business=document.getElementById("business").value;
        var contact = {
         _id: new Date().toISOString(),Giftname: gift,priceofitem: price,GiftOccasion: occasion,location:location,purchasestatus:status  
        };  
           db.put(contact, function callback(err, result) {
               if (!err) {console.log('Successfully saved a contact!');
                   alert ("Record added!!");

                }
           }   
           );
showTodos();
}

function showTodos() {
    db.allDocs({include_docs: true}, 
        function(err, docs) {   
                if (err) {
                    return console.log(err);
                } else {
                    var num_records=docs.total_rows;
                    var display_records="";
                    for(var i = 0; i < num_records; i++){
                    display_records=display_records + docs.rows[i].doc.name + "<br/>" + docs.rows[i].doc.phone + "<br/>" + docs.rows[i].doc.business_contact + "<hr/>"; 
                    } 
                    document.getElementById("contact_list").innerHTML = display_records;
                }
        }
    );
}


// boys{
// "cars","trucks",
// }
// boysreferenc{
//     "image/car.peg"
// }

function ProfileDisplay(){
    giftlist.style.display="block";
    x.style.display="none";
    y.style.display="none";
    z.style.display="none";
}

function Addprofile(){
   giftlist.style.display="none";
    x.style.display="block";
    z.style.display="none";
    y.style.display="none";




}

function UpdateProfile(){
    giftlist.style.display="none";
    y.style.display="block";
    z.style.display="none";
    x.style.display="none";


}

function Giftlist(){
z.style.display="none";
giftlist.style.display="block";
y.style.display="none";
x.style.display="none";

}