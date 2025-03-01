"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57661],{29579:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>s,data:()=>a});var i=o(6254);const n={},s=(0,o(52753).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"neo-nas-ps10b2",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#neo-nas-ps10b2"},[(0,i.Lk)("span",null,"NEO NAS-PS10B2")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"NAS-PS10B2")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=NEO"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("NEO")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Human presence sensor")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"presence, human_motion_state, dis_current, presence_time, motion_far_detection, motion_sensitivity_value, motionless_sensitivity, work_mode, output_switch, output_time, led_switch, lux_value")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-PS10B2.png",alt:"NEO NAS-PS10B2"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="human-motion-state-enum" tabindex="-1"><a class="header-anchor" href="#human-motion-state-enum"><span>Human motion state (enum)</span></a></h3><p>Human Motion State. Value can be found in the published state on the <code>human_motion_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>small</code>, <code>large</code>.</p><h3 id="current-distance-numeric" tabindex="-1"><a class="header-anchor" href="#current-distance-numeric"><span>Current distance (numeric)</span></a></h3><p>Current distance of detected motion. Value can be found in the published state on the <code>dis_current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="presence-time-numeric" tabindex="-1"><a class="header-anchor" href="#presence-time-numeric"><span>Presence time (numeric)</span></a></h3><p>Presence Time. Value can be found in the published state on the <code>presence_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_time&quot;: NEW_VALUE}</code>. The minimal value is <code>3</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="motion-far-detection-numeric" tabindex="-1"><a class="header-anchor" href="#motion-far-detection-numeric"><span>Motion far detection (numeric)</span></a></h3><p>Motion Range Detection. Value can be found in the published state on the <code>motion_far_detection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_far_detection&quot;: NEW_VALUE}</code>. The minimal value is <code>150</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="motion-sensitivity-value-numeric" tabindex="-1"><a class="header-anchor" href="#motion-sensitivity-value-numeric"><span>Motion sensitivity value (numeric)</span></a></h3><p>Motion Detection Sensitivity. Value can be found in the published state on the <code>motion_sensitivity_value</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensitivity_value&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>.</p><h3 id="motionless-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#motionless-sensitivity-numeric"><span>Motionless sensitivity (numeric)</span></a></h3><p>Motionless Detection Sensitivity. Value can be found in the published state on the <code>motionless_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motionless_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>7</code>.</p><h3 id="work-mode-enum" tabindex="-1"><a class="header-anchor" href="#work-mode-enum"><span>Work mode (enum)</span></a></h3><p>Work Mode. Value can be found in the published state on the <code>work_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;work_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>manual</code>, <code>auto</code>.</p><h3 id="output-switch-binary" tabindex="-1"><a class="header-anchor" href="#output-switch-binary"><span>Output switch (binary)</span></a></h3><p>Output Switch. Value can be found in the published state on the <code>output_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;output_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> output switch is ON, if <code>OFF</code> OFF.</p><h3 id="output-time-numeric" tabindex="-1"><a class="header-anchor" href="#output-time-numeric"><span>Output time (numeric)</span></a></h3><p>Output Times. Value can be found in the published state on the <code>output_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;output_time&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>1800</code>. The unit of this value is <code>s</code>.</p><h3 id="led-switch-binary" tabindex="-1"><a class="header-anchor" href="#led-switch-binary"><span>Led switch (binary)</span></a></h3><p>Led Switch. Value can be found in the published state on the <code>led_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led switch is ON, if <code>OFF</code> OFF.</p><h3 id="lux-value-enum" tabindex="-1"><a class="header-anchor" href="#lux-value-enum"><span>Lux value (enum)</span></a></h3><p>Lux Value. Value can be found in the published state on the <code>lux_value</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lux_value&quot;: NEW_VALUE}</code>. The possible values are: <code>10 lux</code>, <code>20 lux</code>, <code>50 lux</code>, <code>24h</code>.</p>',25))])}]]),a=JSON.parse('{"path":"/devices/NAS-PS10B2.html","title":"NEO NAS-PS10B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"NEO NAS-PS10B2 control via MQTT","description":"Integrate your NEO NAS-PS10B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-11-30T20:27:20.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Human motion state (enum)","slug":"human-motion-state-enum","link":"#human-motion-state-enum","children":[]},{"level":3,"title":"Current distance (numeric)","slug":"current-distance-numeric","link":"#current-distance-numeric","children":[]},{"level":3,"title":"Presence time (numeric)","slug":"presence-time-numeric","link":"#presence-time-numeric","children":[]},{"level":3,"title":"Motion far detection (numeric)","slug":"motion-far-detection-numeric","link":"#motion-far-detection-numeric","children":[]},{"level":3,"title":"Motion sensitivity value (numeric)","slug":"motion-sensitivity-value-numeric","link":"#motion-sensitivity-value-numeric","children":[]},{"level":3,"title":"Motionless sensitivity (numeric)","slug":"motionless-sensitivity-numeric","link":"#motionless-sensitivity-numeric","children":[]},{"level":3,"title":"Work mode (enum)","slug":"work-mode-enum","link":"#work-mode-enum","children":[]},{"level":3,"title":"Output switch (binary)","slug":"output-switch-binary","link":"#output-switch-binary","children":[]},{"level":3,"title":"Output time (numeric)","slug":"output-time-numeric","link":"#output-time-numeric","children":[]},{"level":3,"title":"Led switch (binary)","slug":"led-switch-binary","link":"#led-switch-binary","children":[]},{"level":3,"title":"Lux value (enum)","slug":"lux-value-enum","link":"#lux-value-enum","children":[]}]}],"git":{"updatedTime":1740861400000},"filePathRelative":"devices/NAS-PS10B2.md"}')}}]);