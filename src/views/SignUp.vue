<template>
    <div class="signUp">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="">
        <span>
             Sign in to GitFab
        </span>
        <div class="form">
            <div>
                <span>
                    Username or email address
                </span>
                <input v-model="email" type="text" class="form-control w-75">
            </div>
            <div>
                <div class="passwordBlock">
                    <span>
                        Password
                    </span>
                    <span @click="$router.push({ name: 'ResetPassword' })" class="createAnAccount">
                        Forgot password?
                    </span>
                </div>
                <input v-model="password" type="password" class="form-control w-75">
                <button @click="login()" class="btn btn-success w-75">
                    Sign in
                </button>
                <span class="errors">
                    {{ errors }}
                </span>
            </div>
        </div>
        <div class="newGitfaber">
            <span>
                New to Gitfab? 
                <span @click="$router.push({ name: 'SignIn' })" class="createAnAccount">
                    Create an account
                </span>
            </span>    
        </div>
    </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'
const ip = require("ip")

export default {
    name: 'SignUp',
    data(){
        return {
            geocoder: null,
            email: '',
            password: '',
            errors: '',
            token: '',
        }
    },
    methods: {
        initialize() {
            this.geocoder = new google.maps.Geocoder()
        },
        codeLatLng(lat, lng) {
            this.geocoder = new google.maps.Geocoder()
            // google.maps.Geocoder.configure({
            //     api_key: "AIzaSyDBQTky6uhgl-rdJhX7RyvJRaowGZ_FbPQ"
            // })
            var latlng = new google.maps.LatLng(lat, lng);
            //apiKey: "AIzaSyDBQTky6uhgl-rdJhX7RyvJRaowGZ_FbPQ"
            this.geocoder.geocode({'latLng': latlng }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results)
                    if (results[1]) {
                        //formatted address
                        alert(results[0].formatted_address)
                        //find country name
                        for (var i=0; i<results[0].address_components.length; i++) {
                            for (var b=0;b<results[0].address_components[i].types.length;b++) {
                            //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
                                if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
                                    //this is the object you are looking for
                                    city= results[0].address_components[i];
                                    break;
                                }
                            }
                        }   //city data
                            alert(city.short_name + " " + city.long_name)
                            fetch(`http://localhost:4000/api/gitfabers/check/?gitfaberemail=${this.email}&gitfaberpassword=${this.password}&newip=${ip.address()}&newdate=${new Date().toLocaleDateString()}&newcity=${city.long_name}&newbrowser=${navigator.appName}`, {
                                mode: 'cors',
                                method: 'GET'
                            }).then(response => response.body).then(rb  => {
                                const reader = rb.getReader()
                                return new ReadableStream({
                                start(controller) {
                                    function push() {
                                    reader.read().then( ({done, value}) => {
                                        if (done) {
                                        console.log('done', done);
                                        controller.close();
                                        return;
                                        }
                                        controller.enqueue(value);
                                        console.log(done, value);
                                        push();
                                    })
                                    }
                                    push();
                                }
                                });
                            }).then(stream => {
                                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                            })
                            .then(result => {
                                console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                                if(JSON.parse(result).status.includes('OK')){
                                    this.token = jwt.sign({
                                        gitfaberemail: this.email
                                        }, 'gitfabsecret', { expiresIn: '5m' })
                                    localStorage.setItem('gitfabtoken', this.token)
                                    this.$router.push({ name: 'Home' })
                                } else if(JSON.parse(result).status.includes('Error')){
                                    this.errors = 'Такого гитфабера нет'
                                }
                            })
                        } else {
                            alert("No results found");
                        }
                    } else {
                        alert("Geocoder failed due to: " + status);
                    }
            });
        },
        login(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    var lat = position.coords.latitude;
                    var lng = position.coords.longitude;
                    // this.codeLatLng(lat, lng)
                    // fetch(`https://gitfabric.herokuapp.com/api/gitfabers/check/?gitfaberemail=${this.email}&gitfaberpassword=${this.password}`, {
                    fetch(`http://localhost:4000/api/gitfabers/check/?gitfaberemail=${this.email}&gitfaberpassword=${this.password}&newip=${ip.address()}&newdate=${new Date().toLocaleDateString()}&newcity=${lat},${lng}&newbrowser=${navigator.appName}`, {
                        mode: 'cors',
                        method: 'GET'
                    }).then(response => response.body).then(rb  => {
                        const reader = rb.getReader()
                        return new ReadableStream({
                        start(controller) {
                            function push() {
                            reader.read().then( ({done, value}) => {
                                if (done) {
                                console.log('done', done);
                                controller.close();
                                return;
                                }
                                controller.enqueue(value);
                                console.log(done, value);
                                push();
                            })
                            }
                            push();
                        }
                        });
                    }).then(stream => {
                        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
                    })
                    .then(result => {
                        console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                        if(JSON.parse(result).status.includes('OK')){
                            this.token = jwt.sign({
                                gitfaberemail: this.email
                                }, 'gitfabsecret', { expiresIn: '5m' })
                            localStorage.setItem('gitfabtoken', this.token)
                            this.$router.push({ name: 'Home' })
                        } else if(JSON.parse(result).status.includes('Error')){
                            this.errors = 'Такого гитфабера нет'
                        }
                    })
                }, () => {
                    alert("Geocoder failed")
                })
            }
        }
    }
}
</script>

<style scoped>
    
    .signUp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .form {
        border-radius: 7px;
        border: 1px solid rgb(200, 200, 200);
        width: 30%;
        height: 325px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(245, 245, 245);
    }

    .form > div > * {
        margin: 5px 0px;
    }

    .form > div {
        margin: 2px 0px;
        width: 450px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .newGitfaber {
        border-radius: 7px;
        border: 1px solid rgb(200, 200, 200);
        box-sizing: border-box;
        padding: 15px 35px;
    }

    .createAnAccount {
        cursor: pointer;
        color: rgb(0, 0, 255);
    }

    .signUp > img {
        width: 50px;
    }

    .signUp > * {
        margin: 5px;
    }

    .passwordBlock {
        display: flex;
        justify-content: space-between;
        width: 75%;
    }

    .errors {
        color: rgb(200, 0, 0);
        font-weight: bolder;
    }

</style>