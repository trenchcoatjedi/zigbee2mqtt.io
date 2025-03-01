"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96811],{94132:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>n});var a=o(6254);const l={},d=(0,o(52753).A)(l,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"multiterm-zc0101",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#multiterm-zc0101"},[(0,a.Lk)("span",null,"MultiTerm ZC0101")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZC0101")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=MultiTerm"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("MultiTerm")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"ZeeFan fan coil unit controller")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"fan (state, mode), silent_mode, heating_cooling, electric_valve")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZC0101.png",alt:"MultiTerm ZC0101"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="fan-control-fan" tabindex="-1"><a class="header-anchor" href="#fan-control-fan"><span>Fan Control (fan)</span></a></h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>, <code>on</code>.</p><h3 id="silent-mode-enum" tabindex="-1"><a class="header-anchor" href="#silent-mode-enum"><span>Silent mode (enum)</span></a></h3><p>Value can be found in the published state on the <code>silent_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;silent_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;silent_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>inactive</code>, <code>active</code>.</p><h3 id="heating-cooling-enum" tabindex="-1"><a class="header-anchor" href="#heating-cooling-enum"><span>Heating/Cooling (enum)</span></a></h3><p>Value can be found in the published state on the <code>heating_cooling</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heating_cooling&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_cooling&quot;: NEW_VALUE}</code>. The possible values are: <code>heating</code>, <code>cooling</code>.</p><h3 id="electric-valve-enum" tabindex="-1"><a class="header-anchor" href="#electric-valve-enum"><span>Electric Valve (enum)</span></a></h3><p>Value can be found in the published state on the <code>electric_valve</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;electric_valve&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;electric_valve&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>.</p>',9))])}]]),n=JSON.parse('{"path":"/devices/ZC0101.html","title":"MultiTerm ZC0101 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"MultiTerm ZC0101 control via MQTT","description":"Integrate your MultiTerm ZC0101 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:39:25.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Fan Control (fan)","slug":"fan-control-fan","link":"#fan-control-fan","children":[]},{"level":3,"title":"Silent mode (enum)","slug":"silent-mode-enum","link":"#silent-mode-enum","children":[]},{"level":3,"title":"Heating/Cooling (enum)","slug":"heating-cooling-enum","link":"#heating-cooling-enum","children":[]},{"level":3,"title":"Electric Valve (enum)","slug":"electric-valve-enum","link":"#electric-valve-enum","children":[]}]}],"git":{"updatedTime":1740861400000},"filePathRelative":"devices/ZC0101.md"}')}}]);