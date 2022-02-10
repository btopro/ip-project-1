import{s as t,r as i,$ as s}from"./aa05e036.js";class e extends t{static get tag(){return"user-ip"}constructor(){super(),this.ip=null,this.location=null,this.cityYouAreIn=null,this.countryYouAreIn=null,this.ipLookUp="https://ip-fast.com/api/ip/?format=json&location=True"}static get properties(){return{ip:{type:String,reflect:!0},location:{type:String,reflect:!0},cityYouAreIn:{type:String,reflect:!0},countryYouAreIn:{type:String,reflect:!0}}}updated(t){t.forEach(((t,i)=>{if("ip"===i&&this[i]){const t=new CustomEvent("ip-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:this.ip}});this.dispatchEvent(t)}}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),null===this.ip&&this.updateUserIP()}async updateUserIP(){return fetch(this.ipLookUp).then((t=>!!t.ok&&t.json())).then((t=>(this.ip=t.ip,this.cityYouAreIn=t.city,this.countryYouAreIn=t.country,this.city=t.city,this.country=t.country,this.location=`${t.city}, ${t.country}`,t)))}static get styles(){return[i`:host{display:block}ul{margin:0 8px;list-style-type:square;font-size:20px}li{margin:0;padding:0}.ipaddress{font-style:var(--user-ip-ipaddress-font-style,italic)}`]}render(){return s` <ul> <li><strong class="ipaddress">IP address: </strong> ${this.ip}</li> <li><strong class="countryYouAreIn">Country you are in: </strong> ${this.countryYouAreIn}</li> <li><strong class="cityYouAreIn">City you are in: </strong> ${this.cityYouAreIn}</li> <li><strong class="location">Location you are in: </strong> ${this.location}</li> <li></li> </ul>`}}customElements.define(e.tag,e);export{e as U};
