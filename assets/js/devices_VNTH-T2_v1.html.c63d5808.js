"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96571],{63465:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>c});var d=o(6254);const a={},i=(0,o(52753).A)(a,[["render",function(e,t){const o=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[t[10]||(t[10]=(0,d.Lk)("h1",{id:"tech-vnth-t2-v1",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#tech-vnth-t2-v1"},[(0,d.Lk)("span",null,"TECH VNTH-T2_v1")])],-1)),(0,d.Lk)("table",null,[t[6]||(t[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[t[2]||(t[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"VNTH-T2_v1")],-1)),(0,d.Lk)("tr",null,[t[1]||(t[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(o,{to:"/supported-devices/#v=TECH"},{default:(0,d.k6)((()=>t[0]||(t[0]=[(0,d.eW)("TECH")]))),_:1})])]),t[3]||(t[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Smart radiator valve")],-1)),t[4]||(t[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"child_lock, switch (state), window_open, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration, preset, running_state), temperature_sensitivity, comfort_temperature, eco_temperature, holiday_temperature, min_temperature_limit, frost_protection, valve_alarm, schedule_monday, schedule_tuesday, schedule_wednesday, schedule_thursday, schedule_friday, schedule_saturday, schedule_sunday")],-1)),t[5]||(t[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/VNTH-T2_v1.png",alt:"TECH VNTH-T2_v1"})])],-1))])]),t[11]||(t[11]=(0,d.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,d.Lk)("span",null,"OTA updates")])],-1)),(0,d.Lk)("p",null,[t[8]||(t[8]=(0,d.eW)("This device supports OTA updates, for more information see ")),(0,d.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,d.k6)((()=>t[7]||(t[7]=[(0,d.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,d.eW)("."))]),t[12]||(t[12]=(0,d.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch"><span>Window detection (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary"><span>Window open (binary)</span></a></h3><p>Indicates if window is open. Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>local_temperature_calibration</code>, <code>preset</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device, in the <code>heat</code> mode the TS0601 will remain continuously heating, i.e. it does not regulate to the desired temperature. If you want TRV to properly regulate the temperature you need to use mode <code>auto</code> instead setting the desired temperature.. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>auto</code>, <code>off</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>schedule</code>, <code>eco</code>, <code>comfort</code>, <code>antifrost</code>, <code>holiday</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>0.5</code>.</li></ul><h3 id="away-mode-switch" tabindex="-1"><a class="header-anchor" href="#away-mode-switch"><span>Away mode (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="temperature-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-sensitivity-numeric"><span>Temperature sensitivity (numeric)</span></a></h3><p>Temperature sensivity. Value can be found in the published state on the <code>temperature_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric"><span>Comfort temperature (numeric)</span></a></h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="holiday-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#holiday-temperature-numeric"><span>Holiday temperature (numeric)</span></a></h3><p>Holiday temperature. Value can be found in the published state on the <code>holiday_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-limit-numeric"><span>Min temperature limit (numeric)</span></a></h3><p>Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the temperature drops below this.. Value can be found in the published state on the <code>min_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>Indicates if the frost protection mode is enabled. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="valve-alarm-binary" tabindex="-1"><a class="header-anchor" href="#valve-alarm-binary"><span>Valve alarm (binary)</span></a></h3><p>Value can be found in the published state on the <code>valve_alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> valve alarm is ON, if <code>false</code> OFF.</p><h3 id="schedule-monday-text" tabindex="-1"><a class="header-anchor" href="#schedule-monday-text"><span>Schedule monday (text)</span></a></h3><p>Schedule for monday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_monday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_monday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-tuesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-tuesday-text"><span>Schedule tuesday (text)</span></a></h3><p>Schedule for tuesday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_tuesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_tuesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-wednesday-text" tabindex="-1"><a class="header-anchor" href="#schedule-wednesday-text"><span>Schedule wednesday (text)</span></a></h3><p>Schedule for wednesday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_wednesday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_wednesday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-thursday-text" tabindex="-1"><a class="header-anchor" href="#schedule-thursday-text"><span>Schedule thursday (text)</span></a></h3><p>Schedule for thursday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_thursday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_thursday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-friday-text" tabindex="-1"><a class="header-anchor" href="#schedule-friday-text"><span>Schedule friday (text)</span></a></h3><p>Schedule for friday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_friday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_friday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-saturday-text" tabindex="-1"><a class="header-anchor" href="#schedule-saturday-text"><span>Schedule saturday (text)</span></a></h3><p>Schedule for saturday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_saturday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_saturday&quot;: NEW_VALUE}</code>.</p><h3 id="schedule-sunday-text" tabindex="-1"><a class="header-anchor" href="#schedule-sunday-text"><span>Schedule sunday (text)</span></a></h3><p>Schedule for sunday, example: &quot;HH:MM/C HH:MM/C HH:MM/C HH:MM/C&quot;. Value can be found in the published state on the <code>schedule_sunday</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_sunday&quot;: NEW_VALUE}</code>.</p>',40))])}]]),c=JSON.parse('{"path":"/devices/VNTH-T2_v1.html","title":"TECH VNTH-T2_v1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TECH VNTH-T2_v1 control via MQTT","description":"Integrate your TECH VNTH-T2_v1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-18T15:00:49.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Window detection (switch)","slug":"window-detection-switch","link":"#window-detection-switch","children":[]},{"level":3,"title":"Window open (binary)","slug":"window-open-binary","link":"#window-open-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Away mode (switch)","slug":"away-mode-switch","link":"#away-mode-switch","children":[]},{"level":3,"title":"Temperature sensitivity (numeric)","slug":"temperature-sensitivity-numeric","link":"#temperature-sensitivity-numeric","children":[]},{"level":3,"title":"Comfort temperature (numeric)","slug":"comfort-temperature-numeric","link":"#comfort-temperature-numeric","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Holiday temperature (numeric)","slug":"holiday-temperature-numeric","link":"#holiday-temperature-numeric","children":[]},{"level":3,"title":"Min temperature limit (numeric)","slug":"min-temperature-limit-numeric","link":"#min-temperature-limit-numeric","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Valve alarm (binary)","slug":"valve-alarm-binary","link":"#valve-alarm-binary","children":[]},{"level":3,"title":"Schedule monday (text)","slug":"schedule-monday-text","link":"#schedule-monday-text","children":[]},{"level":3,"title":"Schedule tuesday (text)","slug":"schedule-tuesday-text","link":"#schedule-tuesday-text","children":[]},{"level":3,"title":"Schedule wednesday (text)","slug":"schedule-wednesday-text","link":"#schedule-wednesday-text","children":[]},{"level":3,"title":"Schedule thursday (text)","slug":"schedule-thursday-text","link":"#schedule-thursday-text","children":[]},{"level":3,"title":"Schedule friday (text)","slug":"schedule-friday-text","link":"#schedule-friday-text","children":[]},{"level":3,"title":"Schedule saturday (text)","slug":"schedule-saturday-text","link":"#schedule-saturday-text","children":[]},{"level":3,"title":"Schedule sunday (text)","slug":"schedule-sunday-text","link":"#schedule-sunday-text","children":[]}]}],"git":{"updatedTime":1740861400000},"filePathRelative":"devices/VNTH-T2_v1.md"}')}}]);