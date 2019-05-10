    
let x=document.getElementById('ProfileDisplay');
let y=document.getElementById('Addprofile');
let z=document.getElementById('UpdateProfile');
let giftlistdiv=document.getElementById('Giftlist');
let Categories=document.getElementById('Categoriesa')
let Discountpg=document.getElementById("Discount");
let logindiv=document.getElementById("logindiv");
let addGift=document.getElementById("AddGift");
var db = new PouchDB('empiree_db');
console.log("the device is not ready")
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    alert ("Device is ready!!");
    console.log("the database is created")
    db = new PouchDB("contact_db");
    alert ("DB created!!");
}
db.allDocs({include_docs: true}, 
    function(err, docs) {   
            if (err) {
                return console.log(err);
            } else {
                var num_records=docs.total_rows;
                var display_records="";
                for(var i = 0; i < num_records; i++){
                display_records=display_records + docs.rows[i].doc.Giftname + "<br/> $" + docs.rows[i].doc.priceofitem + "<br/>" + docs.rows[i].doc.GiftOccasion + docs.rows[i].doc.location + "<br/>" + docs.rows[i].doc.purchasestatus +"<hr/>"; 
                } 
                document.getElementById("Giftlist").innerHTML = display_records;
            }
    }
);

function addgift(name) {
        var gift=document.getElementById("gifttxt").value;
        if(name!=null){
            gift=name;
        }
            var price=document.getElementById("priceamt").value;
                var occasion=document.getElementById("occasiontxt").value;
                var location=document.getElementById("locationtxt").value;
                var status=false;
        var contact = {
         _id: new Date().toISOString(),Giftname: gift,priceofitem: price,GiftOccasion: occasion,location:location,purchasestatus:status  
        };  
           db.put(contact, function callback(err, result) {
               if (!err) {console.log('Successfully saved a contact!');
                   alert ("Record added!!");

                }
           }   
           );
showgiftlist();
}
function Register(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var credentials={
        _id:new Date().toISOString(),Username:username,Password:password };
    db.put(credentials,function callback(err, result) {
        if (!err){
            console.log('Succefully logged in!');
    alert('You have succesfully logged in');
 }
    }
    );
}
function login(){
    console.log("it ran");
     db.get('2019-05-10T14:28:40.085Z',function callback(err,result) {         
      if(!err){
      console.log(result);
       let username=result.Username;
       let actualpassword=result.Password;
      let actnam=  document.getElementById("usernametxt").value;
    let password= document.getElementById("passwordtxt").value;
    console.log(actnam,actualpassword)
    if(username==actnam){
      
    
        if(password==actualpassword){
          console.log("you have entered the correct password");
          ProfileDisplay();

        }else{
            alert("you have entered the wrong password")
        }
    }else{
        alert("This user does not exist")
    }
        } 
      else{
          console.log(err);
      }

     })   
}

function showgiftlist() {
    db.allDocs({include_docs: true}, 
        function(err, docs) {   
                if (err) {
                    return console.log(err);
                } else {
                    var num_records=docs.total_rows;
                    var display_records="";
                    for(var i = 0; i < num_records; i++){
                    display_records=display_records + docs.rows[i].doc.Giftname + "<br/> $" + docs.rows[i].doc.priceofitem + "<br/>" + docs.rows[i].doc.GiftOccasion + docs.rows[i].doc.location + "<br/>" + docs.rows[i].doc.purchasestatus +"<hr/>"; 
                    } 
                    document.getElementById("Giftlist").innerHTML = display_records;
                }
        }
    );
}
function addgiftname(gifta){
    document.getElementById("gifttxt").value=gifta;
}
function insertcategories(categories){
    document.getElementById("boys").innerHTML = " ";
    document.getElementById("girls").innerHTML = " ";
    document.getElementById("teens").innerHTML = " ";
    document.getElementById("women").innerHTML = " ";
    document.getElementById("men").innerHTML = " ";
    document.getElementById("beauty").innerHTML = " ";
    document.getElementById("pet").innerHTML = " ";
    document.getElementById("clothing").innerHTML = " ";
    document.getElementById("toys").innerHTML = " ";
    document.getElementById("eletronics").innerHTML = " ";
    document.getElementById("baby").innerHTML = " ";
    
 

  if(categories == 'boys'){
   var i=0;
    while(i< Boys.length){
        document.getElementById("boys").style.display = "block";
        document.getElementById("girls").style.display = "none";
        document.getElementById("teens").style.display = "none";
        document.getElementById("women").style.display = "none";
        document.getElementById("men").style.display = "none";
        document.getElementById("beauty").style.display = "none";
        document.getElementById("pet").style.display = "none";
        document.getElementById("clothing").style.display = "none";
        document.getElementById("toys").style.display = "none";
        document.getElementById("eletronics").style.display = "none";
        document.getElementById("baby").style.display = "none";
        
      

        document.getElementById("boys").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Boys[i]+"`)'><img src=" + Boysref[i] +" height='200px' width='200px'>"+Boys[i] +"</div>"+"<br/>" ;
        
        i++
    }
   }

   if(categories == 'girls'){
    var i=0;
     while(i< Girls.length){
        document.getElementById("boys").style.display = "none";
        document.getElementById("girls").style.display = "block";
        document.getElementById("teens").style.display = "none";
        document.getElementById("women").style.display = "none";
        document.getElementById("men").style.display = "none";
        document.getElementById("beauty").style.display = "none";
        document.getElementById("pet").style.display = "none";
        document.getElementById("clothing").style.display = "none";
        document.getElementById("toys").style.display = "none";
        document.getElementById("eletronics").style.display = "none";
        document.getElementById("baby").style.display = "none";

         document.getElementById("girls").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Girls[i]+"`)'><img src=" + Girlsref[i] +" height='200px' width='200px'>"+Girls[i] +"</div>"+"<br/>" ;
         
         
         i++
     }
    }
    if(categories == 'teens'){
        var i=0;
         while(i< Teens.length){
             document.getElementById("boys").style.display = "none";
             document.getElementById("girls").style.display = "none";
             document.getElementById("teens").style.display = "block";
             document.getElementById("women").style.display = "none";
             document.getElementById("men").style.display = "none";
             document.getElementById("beauty").style.display = "none";
             document.getElementById("pet").style.display = "none";
             document.getElementById("clothing").style.display = "none";
             document.getElementById("toys").style.display = "none";
             document.getElementById("eletronics").style.display = "none";
             document.getElementById("baby").style.display = "none";

             document.getElementById("teens").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Teens[i]+"`)'><img src=" + Teensref[i] +" height='200px' width='200px'>"+Teens[i] +"</div>"+"<br/>" ;
             
             i++
         }
        }
        if(categories == 'women'){
            var i=0;
             while(i< Women.length){
                 document.getElementById("boys").style.display = "none";
                 document.getElementById("girls").style.display = "none";
                 document.getElementById("teens").style.display = "none";
                 document.getElementById("women").style.display = "block";
                 document.getElementById("men").style.display = "none";
                 document.getElementById("beauty").style.display = "none";
                 document.getElementById("pet").style.display = "none";
                 document.getElementById("clothing").style.display = "none";
                 document.getElementById("toys").style.display = "none";
                 document.getElementById("eletronics").style.display = "none";
                 document.getElementById("baby").style.display = "none";

                 document.getElementById("women").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Women[i]+"`)'><img src=" + Womenref[i] +" height='200px' width='200px'>"+Women[i] +"</div>"+"<br/>" ;
                 i++
             }
            }
            if(categories == 'men'){
                var i=0;
                 while(i< Men.length){
                     document.getElementById("boys").style.display = "none";
                     document.getElementById("girls").style.display = "none";
                     document.getElementById("teens").style.display = "none";
                     document.getElementById("women").style.display = "none";
                     document.getElementById("men").style.display = "block";
                     document.getElementById("beauty").style.display = "none";
                     document.getElementById("pet").style.display = "none";
                     document.getElementById("clothing").style.display = "none";
                     document.getElementById("toys").style.display = "none";
                     document.getElementById("eletronics").style.display = "none";
                     document.getElementById("baby").style.display = "none";

                     document.getElementById("men").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Men[i]+"`)'><img src=" + Menref[i] +" height='200px' width='200px'>"+Men[i] +"</div>"+"<br/>" ;
                     i++
                 }
                }
                if(categories == 'beauty'){
                    var i=0;
                     while(i< Beauty.length){
                         document.getElementById("boys").style.display = "none";
                         document.getElementById("girls").style.display = "none";
                         document.getElementById("teens").style.display = "none";
                         document.getElementById("women").style.display = "none";
                         document.getElementById("men").style.display = "none";
                         document.getElementById("beauty").style.display = "block";
                         document.getElementById("pet").style.display = "none";
                         document.getElementById("clothing").style.display = "none";
                         document.getElementById("toys").style.display = "none";
                         document.getElementById("eletronics").style.display = "none";
                         document.getElementById("baby").style.display = "none";

                         document.getElementById("beauty").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Beauty[i]+"`)'><img src=" + Beautyref[i] +" height='200px' width='200px'>"+Beauty[i] +"</div>"+"<br/>" ;
                         i++
                     }
                    }
                
                if(categories == 'pet'){
                    var i=0;
                     while(i< Pet.length){
                         document.getElementById("boys").style.display = "none";
                         document.getElementById("girls").style.display = "none";
                         document.getElementById("teens").style.display = "none";
                         document.getElementById("women").style.display = "none";
                         document.getElementById("men").style.display = "none";
                         document.getElementById("beauty").style.display = "none";
                         document.getElementById("pet").style.display = "block";
                         document.getElementById("clothing").style.display = "none";
                         document.getElementById("toys").style.display = "none";
                         document.getElementById("eletronics").style.display = "none";
                         document.getElementById("baby").style.display = "none";

                         document.getElementById("pet").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Pet[i]+"`)'><img src=" + Petref[i] +" height='200px' width='200px'>"+Pet[i] +"</div>"+"<br/>" ;
                         i++
                     }
                    }
                    if(categories == 'clothing'){
                        var i=0;
                         while(i< Clothing.length){
                             document.getElementById("boys").style.display = "none";
                             document.getElementById("girls").style.display = "none";
                             document.getElementById("teens").style.display = "none";
                             document.getElementById("women").style.display = "none";
                             document.getElementById("men").style.display = "none";
                             document.getElementById("beauty").style.display = "none";
                             document.getElementById("pet").style.display = "none";
                             document.getElementById("clothing").style.display = "block";
                             document.getElementById("toys").style.display = "none";
                             document.getElementById("eletronics").style.display = "none";
                             document.getElementById("baby").style.display = "none";

                             document.getElementById("clothing").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Clothing[i]+"`)'><img src=" + Clothingref[i] +" height='200px' width='200px'>"+Clothing[i] +"</div>"+"<br/>" ;
                             i++
                         }
                        }
                        if(categories == 'toys'){
                            var i=0;
                             while(i< Toys.length){
                                 document.getElementById("boys").style.display = "none";
                                 document.getElementById("girls").style.display = "none";
                                 document.getElementById("teens").style.display = "none";
                                 document.getElementById("women").style.display = "none";
                                 document.getElementById("men").style.display = "none";
                                 document.getElementById("beauty").style.display = "none";
                                 document.getElementById("pet").style.display = "none";
                                 document.getElementById("clothing").style.display = "none";
                                 document.getElementById("toys").style.display = "block";
                                 document.getElementById("eletronics").style.display = "none";
                                 document.getElementById("baby").style.display = "none";

                                 document.getElementById("toys").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Toys[i]+"`)'><img src=" + Toysref[i] +" height='200px' width='200px'>"+Toys[i] +"</div>"+"<br/>" ;
                                 i++
                             }
                            }
                            if(categories == 'eletronics'){
                                var i=0;
                                 while(i< Eletronics.length){
                                     document.getElementById("boys").style.display = "none";
                                     document.getElementById("girls").style.display = "none";
                                     document.getElementById("teens").style.display = "none";
                                     document.getElementById("women").style.display = "none";
                                     document.getElementById("men").style.display = "none";
                                     document.getElementById("beauty").style.display = "none";
                                     document.getElementById("pet").style.display = "none";
                                     document.getElementById("clothing").style.display = "none";
                                     document.getElementById("toys").style.display = "none";
                                     document.getElementById("eletronics").style.display = "block";
                                     document.getElementById("baby").style.display = "none";

                                     document.getElementById("eletronics").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Eletronics[i]+"`)'><img src=" + Eletronicsref[i] +" height='200px' width='200px'>"+Eletronics[i] +"</div>"+"<br/>" ;
                                     i++
                                 }
                                }
            if(categories == 'baby'){
                var i=0;
                    while(i< Baby.length){
                        document.getElementById("baby").innerHTML += "<img src=" + Babyref[i] +" height='200px' width='200px'>"+ Baby[i] +"<br/>" ;
                        document.getElementById("boys").style.display = "none";
                        document.getElementById("girls").style.display = "none";
                        document.getElementById("teens").style.display = "none";
                        document.getElementById("women").style.display = "none";
                        document.getElementById("men").style.display = "none";
                        document.getElementById("beauty").style.display = "none";
                        document.getElementById("pet").style.display = "none";
                        document.getElementById("clothing").style.display = "none";
                        document.getElementById("toys").style.display = "none";
                        document.getElementById("eletronics").style.display = "none";
                        document.getElementById("baby").style.display = "block";

                        document.getElementById("baby").innerHTML += "<div onclick='showaddgift(); addgiftname(`"+Baby[i]+"`)'><img src=" + Babyref[i] +" height='200px' width='200px'>"+Baby[i] +"</div>"+"<br/>" ;
                        i++
                    }
                }

        
                        
    

   
}
    


// boys{
// "cars","trucks",
// }
// boysreferenc{
//    "image/car.peg"
// }

function ProfileDisplay(){
    giftlistdiv.style.display="none"
    x.style.display="block";
    y.style.display="none";
    z.style.display="none";
    Categories.style.display="none";
    Discountpg.style.display="none";
    logindiv.style.display="none";
    addGift.style.display="none";
}

function Addprofile(){
    giftlistdiv.style.display="none"
    x.style.display="none";
    z.style.display="none";
    y.style.display="block";
    logindiv.style.display="none";
    Discountpg.style.display="none";

    addGift.style.display="none";
}

function UpdateProfile(){
    giftlistdiv.style.display="none"
    y.style.display="none";
    z.style.display="block";
    x.style.display="none";
    Categories.style.display="none";
    Discountpg.style.display="none";
    logindiv.style.display="none";
    addGift.style.display="none";
}
function autofill(suggest){
    var gift=document.getElementById(suggest).value;
    var price=document.getElementById("priceamt").value;
        var occasion=document.getElementById("occasiontxt").value;
        var location=document.getElementById("locationtxt").value;
        var status=false;
var contact = {
 _id: new Date().toISOString(),Giftname: gift,priceofitem: price,GiftOccasion: occasion,location:location,purchasestatus:status  
};  
   db.put(contact, function callback(err, result) {
       if (!err) {console.log('Successfully saved a contact!');
           alert ("Record added!!");

        }
   }   
   );
showgiftlist();


}
function Giftlist(){
z.style.display="none";
giftlistdiv.style.display="block";
y.style.display="none";
x.style.display="none";
Discountpg.style.display="none";
logindiv.style.display="none";
addGift.style.display="none";
}

function Discount(){
    z.style.display="none";
    giftlistdiv.style.display="none"
    y.style.display="none";
    x.style.display="none";
    Discountpg.style.display="block";
    logindiv.style.display="none";
    addGift.style.display="none";
    
    }
function Categoriesa(){
Categories.style.display="block";
x.style.display="none";
y.style.display="none";
Discountpg.style.display="none";
z.style.display="none";
giftlistdiv.style.display="none"
logindiv.style.display="none";
addGift.style.display="none";
}
function showaddgift(){
    Categories.style.display="none";
    x.style.display="none";
    y.style.display="none";
    Discountpg.style.display="none";
    z.style.display="none";
    giftlistdiv.style.display="none"
    logindiv.style.display="none";
    addGift.style.display="block";
    }


  function calculate(){
    var price = document.getElementById("itemPrice").value;
    var fDiscount = document.getElementById("discountPercentage").value;
    discount = fDiscount / 100;


    var final_discount =0;
    final_discount = (price*discount);
    final_price = price - final_discount;
     
      document.getElementById("result").innerHTML  =  final_price ;
}













var Boys = [ "Skateboard","Bicycle","Razor Scooter","Drones","RC cars","Trainsets", "Tranformers","Max Steel","Lego","Polo Shirts",  "V-Neck","Crew-Neck","Leather Jackets","Denim Jackets","Hoodies","Baggies","Dress Pants","Dryfit", "Underwear"   ];
var Boysref = ["Amges/skateboard.jpeg","Amges/bicycle.jpg","Amges/scooter.jpeg","Amges/drones.jpg","Amges/rccar.jpeg","Amges/trainset.jpg","Amges/transformers.jpeg","Amges/maxsteel.jpg", "Amges/lego.jpg","Amges/poloshirt.jpg","Amges/v-neck.jpeg","Amges/Crew-Neck.jpeg","Amges/leatherjacket.jpeg","Amges/denimjacket.jpg","Amges/hoodie.jpeg","Amges/short.jpg","Amges/jeans.jpeg,Amges/joggers.jpeg","Amges/baggies.jpeg","Amges/dresspants.jpeg","Amges/dryfitpants.jpg","Amges/underwear.jpg" ];
var Girls = [  "Bicycle","Dollhouse", "Babydolls","Barbie","Stuffed Animals","Lipstick", "Eyeliner", "Foundation", "concealer", "Highlighter","Dress Shirts", "Polo Shirts", "t-Shirts", "V-Neck","Crew-Neck","Leather Jackets","Denim Jackets","Hoodies","Shorts","Jeans","Joggers",,"Blouse","Dress","Skirt"];
var Girlsref = [ "Amges/bicycle.jpg","Amges/dollhouse.jpeg","Amges/babydoll.jpeg","Amges/barbie.jpg","Amges/stuffedanimal.jpg", "Amges/lipstick.jpg","Amges/eyeliner.jpg","Amges/concealer.jpg","Amges/highlighter.jpeg", "Amges/babyonesie.jpg","Amges/dressshirt.jpeg","Amges/poloshirt.jpg","Amges/v-neck.jpeg","Amges/Crew-Neck.jpeg","Amges/leatherjacket.jpeg","Amges/denimjacket.jpg","Amges/hoodie.jpeg","Amges/ties.jpeg", "Amges/short.jpg","Amges/jeans.jpeg","Amges/joggers.jpeg","Amges/blouse.jpg","Amges/dress.jpeg","Amges/skirts.jpg"];
var Teens =[ "Xbox","PS4","Watches","Rings","Bracelets","Watches","Polo Shirts", "t-Shirts", "V-Neck","Crew-Neck","Leather Jackets","Denim Jackets","Hoodies","Shorts","Jeans","Joggers","Baggies","Dress Pants","Dryfit", "Underwear" ,"Blouse","Dress","Skirt"];
var Teensref =["Amges/xbox.jpeg", "Amges/ps4.jpg","Amges/ring.jpeg","Amges/bracelet.jpeg","Amges/watch.jpg","Amges/babyonesie.jpg","Amges/dressshirt.jpeg","Amges/poloshirt.jpg","Amges/v-neck.jpeg","Amges/Crew-Neck.jpeg","Amges/leatherjacket.jpeg","Amges/denimjacket.jpg","Amges/hoodie.jpeg","Amges/ties.jpeg", "Amges/short.jpg","Amges/jeans.jpeg","Amges/joggers.jpeg","Amges/baggies.jpeg","Amges/dresspants.jpeg","Amges/dryfitpants.jpg","Amges/blouse.jpg","Amges/dress.jpeg","Amges/skirts.jpg"];
var Women = ["Watches","Rings","Bracelets","Necklacs","Earrings","Perfume","handbag","Slippers","Boots","Running shoes","Flats","HighHeels", "Razers","Lipstick", "Eyeliner", "Foundation", "concealer", "Highlighter", "Dress Shirts", "Polo Shirts", "t-Shirts", "V-Neck","Crew-Neck","Leather Jackets","Denim Jackets","Hoodies","Shorts","Jeans","Joggers","Blouse","Dress","Skirt","Underwear"];
var Womenref = ["Amges/watch.jpg","Amges/ring.jpeg","Amges/bracelet.jpeg","Amges/necklace.png", "Amges/earrings.jpeg","Amges/handbag.jpeg","slippers.jpeg", "Amges/boots.jpeg","Amges/running.jpg","Amges/flats.jpeg","Amges/highheel.jpg" ,"Amges/perfume.jpeg",   "Amges/razor.jpeg","Amges/lipstick.jpg","Amges/eyeliner.jpg","Amges/concealer.jpg","Amges/highlighter.jpeg", "Amges/dressshirt.jpeg","Amges/poloshirt.jpg","Amges/v-neck.jpeg","Amges/Crew-Neck.jpeg","Amges/leatherjacket.jpeg","Amges/denimjacket.jpg","Amges/hoodie.jpeg","Amges/ties.jpeg", "Amges/short.jpg","Amges/jeans.jpeg","Amges/joggers.jpeg","Amges/blouse.jpg","Amges/dress.jpeg","Amges/skirts.jpg","Amges/underwear.jpg"   ];
var Men = [ "Xbox","PS4","Watches","Cologne","Razers","Polo Shirts", "V-Neck","Crew-Neck","Leather Jackets","Denim Jackets","Hoodies","Ties","Shorts","Jeans","Joggers","Baggies","Dress Pants","Dryfit", "Underwear"  ];
var Menref = ["Amges/xbox.jpeg", "Amges/ps4.jpg","Amges/watch.jpg","Amges/cologne.jpeg","Amges/razor.jpeg","Amges/poloshirt.jpg","Amges/v-neck.jpeg","Amges/Crew-Neck.jpeg","Amges/leatherjacket.jpeg","Amges/denimjacket.jpg","Amges/hoodie.jpeg","Amges/ties.jpeg", "Amges/short.jpg","Amges/jeans.jpeg","Amges/joggers.jpeg","Amges/baggies.jpeg","Amges/dresspants.jpeg","Amges/dryfitpants.jpg","Amges/underwear.jpg" ];
var Beauty = ["Lipstick", "Eyeliner", "concealer", "Highlighter", "Mascara", "Contour", "Shampoo", "conditioner", "Mirror","Product","Fancy Comb","Brushes"      ];
var Beautyref = [ "Amges/lipstick.jpg","Amges/eyeliner.jpg","Amges/concealer.jpg","Amges/highlighter.jpeg","Amges/masacara.jpeg","Amges/countour.jpg", "Amges/shampoo.jpg","Amges/conditioner.jpg","Amges/mirror.jpeg","Amges/product.jpeg","Amges/fancycomb.jpeg","Amges/brushes.jpeg"];
var Pet = ["Dog food", "Cat Food", "Bird food", "Fish food", "Dog House", "Fish Bowl", "Bird Cage", "Collar", " food bowl"];
var Petref = ["Amges/dogfood.jpg","Amges/catfood.jpg","Amges/birdfood.jpeg","Amges/fishfood.jpeg","Amges/doghouse.jpg","Amges/fishbowl.jpeg","Amges/birdcage.jpeg","Amges/collar.jpg","Amges/foodbowl.jpg"];
var Toys= ["Dollhouse", "Babydolls","Barbie","Stuffed Animals","Skateboard","Bicycle","Razor Scooter","Drones","RC cars","Trainsets", "Tranformers","Max Steel","Lego","Building Blocks", "Rattles", "Stacking Rings","Rubber Ducky","Stuffed Giraffe","Xylophone"];
var Toysref= ["Amges/dollhouse.jpeg","Amges/babydoll.jpeg","Amges/barbie.jpg","Amges/stuffedanimal.jpg","Amges/skateboard.jpeg","Amges/bicycle.jpg","Amges/scooter.jpeg","Amges/drones.jpg,Amges/rccar.jpeg","Amges/trainset.jpg","Amges/transformers.jpeg","Amges/maxsteel.jpg", "Amges/lego.jpg","Amges/buildingblocks.jpeg","Amges/Rattles.jpeg","Amges/stackingrings.jpeg","Amges/rubberducky.jpeg","Amges/stuffedGiraffe.jpeg","Amges/xylophone.jpeg"];
var Clothing= ["Baby Onesie","Dress Shirts", "Polo Shirts",  "V-Neck","Crew-Neck","Leather Jackets","Denim Jackets","Hoodies","Ties","Shorts","Jeans","Joggers","Baggies","Dress Pants","Dryfit","Blouse","Dress","Skirt", "Underwear"   ];
var Clothingref= ["Amges/babyonesie.jpg","Amges/dressshirt.jpeg","Amges/poloshirt.jpg","Amges/v-neck.jpeg","Amges/Crew-Neck.jpeg","Amges/leatherjacket.jpeg","Amges/denimjacket.jpg","Amges/hoodie.jpeg","Amges/ties.jpeg", "Amges/short.jpg","Amges/jeans.jpeg","Amges/joggers.jpeg","Amges/baggies.jpeg","Amges/dresspants.jpeg","Amges/dryfitpants.jpg","Amges/blouse.jpg","Amges/dress.jpeg","Amges/skirts.jpg","Amges/underwear.jpg"];
var Eletronics= ["Smartphone", "Drones", "Xbox","PS4","Cameras","Controllers","Laptop","Keyboard","Mouse","CPU","GPU","MotherBoard","Power Supply","Hard Drive","Solid State Drive","Monitors","RAM","Headphone","Speaker","Accessories",];
var Eletronicsref= ["Amges/smartphone.jpg","Amges/drones.jpg","Amges/xbox.jpeg","Amges/ps4.jpg","Amges/camera.jpeg","Amges/controller.jpeg","Amges/laptop.jpg","Amges/keyboard.jpg","Amges/mouse.jpg","Amges/cpu.jpg","Amges/motherboar.jpg","Amges/powersupply.jpg","Amges/harddrive.jpg","Amges/solidstatedrive.jpg","Amges/monitor.jpg","Amges/ram.jpg","Amges/headphones.jpg","Amges/speaker.jpeg","Amges/accessories.jpg"];
var Baby = ["Building Blocks", "Rattles", "Stacking Rings","Rubber Ducky","Stuffed Giraffe","Xylophone","Car Seats","Diaper","Bibs","wipes","Baby Onesie"];
var Babyref = ["Amges/stackingrings.jpeg","Amges/buildingblocks.jpeg","Amges/accessories.jpg","Amges/babyonesie.jpg","Amges/bibs.jpeg","Amges/carseat.jpeg","Amges/diaper.jpeg","Amges/Rattles.jpeg","Amges/rubberducky.jpeg","stuffedGiraffe.jpeg","Amges/wipes.jpeg","Amges/xylophone.jpeg"];



