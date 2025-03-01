"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84712],{50793:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>c});var a=o(6254);const i={},d=(0,o(52753).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"aqara-zncjmb14lm",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#aqara-zncjmb14lm"},[(0,a.Lk)("span",null,"Aqara ZNCJMB14LM")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZNCJMB14LM")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Aqara"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart touch panel S1")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), standby_enabled, theme, beep_volume, lcd_brightness, language, screen_saver_style, standby_time, font_size, lcd_auto_brightness_enabled, homepage, screen_saver_enabled, standby_lcd_brightness, available_switches, switch_1_text_icon, switch_2_text_icon, switch_3_text_icon")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZNCJMB14LM.png",alt:"Aqara ZNCJMB14LM"})])],-1))])]),t[12]||(t[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>On initial boot, the device will display a message &quot;Waiting for accessing the network&quot; permit join and the device will be added.</p><p>If the device is already part of a network, swipe down from the top of the screen to access the Settings panel (password may be required), navigate to &quot;Advanced&quot;, navigate to &quot;Access New Gateway&quot; and confirm with &quot;Ok&quot;. Once confirmed, proceed as per initial boot.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',5)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint"><span>Switch (left endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint"><span>Switch (center endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint"><span>Switch (right endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="standby-enabled-binary" tabindex="-1"><a class="header-anchor" href="#standby-enabled-binary"><span>Standby enabled (binary)</span></a></h3><p>Enable standby. Value can be found in the published state on the <code>standby_enabled</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;standby_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> standby enabled is ON, if <code>false</code> OFF.</p><h3 id="theme-enum" tabindex="-1"><a class="header-anchor" href="#theme-enum"><span>Theme (enum)</span></a></h3><p>Display theme. Value can be found in the published state on the <code>theme</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;theme&quot;: NEW_VALUE}</code>. The possible values are: <code>classic</code>, <code>concise</code>.</p><h3 id="beep-volume-enum" tabindex="-1"><a class="header-anchor" href="#beep-volume-enum"><span>Beep volume (enum)</span></a></h3><p>Beep volume. Value can be found in the published state on the <code>beep_volume</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;beep_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>mute</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="lcd-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#lcd-brightness-numeric"><span>Lcd brightness (numeric)</span></a></h3><p>LCD brightness (will not persist if auto-brightness is enabled). Value can be found in the published state on the <code>lcd_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lcd_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="language-enum" tabindex="-1"><a class="header-anchor" href="#language-enum"><span>Language (enum)</span></a></h3><p>Interface language. Value can be found in the published state on the <code>language</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;language&quot;: NEW_VALUE}</code>. The possible values are: <code>chinese</code>, <code>english</code>.</p><h3 id="screen-saver-style-enum" tabindex="-1"><a class="header-anchor" href="#screen-saver-style-enum"><span>Screen saver style (enum)</span></a></h3><p>Screen saver style. Value can be found in the published state on the <code>screen_saver_style</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;screen_saver_style&quot;: NEW_VALUE}</code>. The possible values are: <code>classic</code>, <code>analog clock</code>.</p><h3 id="standby-time-numeric" tabindex="-1"><a class="header-anchor" href="#standby-time-numeric"><span>Standby time (numeric)</span></a></h3><p>Display standby time. Value can be found in the published state on the <code>standby_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;standby_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65534</code>. The unit of this value is <code>s</code>.</p><h3 id="font-size-enum" tabindex="-1"><a class="header-anchor" href="#font-size-enum"><span>Font size (enum)</span></a></h3><p>Display font size. Value can be found in the published state on the <code>font_size</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;font_size&quot;: NEW_VALUE}</code>. The possible values are: <code>small</code>, <code>medium</code>, <code>large</code>.</p><h3 id="lcd-auto-brightness-enabled-binary" tabindex="-1"><a class="header-anchor" href="#lcd-auto-brightness-enabled-binary"><span>Lcd auto brightness enabled (binary)</span></a></h3><p>Enable LCD auto brightness. Value can be found in the published state on the <code>lcd_auto_brightness_enabled</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lcd_auto_brightness_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> lcd auto brightness enabled is ON, if <code>false</code> OFF.</p><h3 id="homepage-enum" tabindex="-1"><a class="header-anchor" href="#homepage-enum"><span>Homepage (enum)</span></a></h3><p>Default display homepage. Value can be found in the published state on the <code>homepage</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;homepage&quot;: NEW_VALUE}</code>. The possible values are: <code>scene</code>, <code>feel</code>, <code>thermostat</code>, <code>switch</code>.</p><h3 id="screen-saver-enabled-binary" tabindex="-1"><a class="header-anchor" href="#screen-saver-enabled-binary"><span>Screen saver enabled (binary)</span></a></h3><p>Enable screen saver. Value can be found in the published state on the <code>screen_saver_enabled</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;screen_saver_enabled&quot;: NEW_VALUE}</code>. If value equals <code>true</code> screen saver enabled is ON, if <code>false</code> OFF.</p><h3 id="standby-lcd-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#standby-lcd-brightness-numeric"><span>Standby lcd brightness (numeric)</span></a></h3><p>Standby LCD brightness. Value can be found in the published state on the <code>standby_lcd_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;standby_lcd_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="available-switches-enum" tabindex="-1"><a class="header-anchor" href="#available-switches-enum"><span>Available switches (enum)</span></a></h3><p>Control which switches are available in the switches screen (none disables switches screen). Value can be found in the published state on the <code>available_switches</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;available_switches&quot;: NEW_VALUE}</code>. The possible values are: <code>none</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>1 and 2</code>, <code>1 and 3</code>, <code>2 and 3</code>, <code>all</code>.</p><h3 id="switch-1-text-icon-composite" tabindex="-1"><a class="header-anchor" href="#switch-1-text-icon-composite"><span>Switch 1 text icon (composite)</span></a></h3><p>Switch 1 text and icon. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_1_text_icon&quot;: {&quot;switch_1_icon&quot;: VALUE, &quot;switch_1_text&quot;: VALUE}}</code></p><ul><li><code>switch_1_icon</code> (enum): Icon allowed values: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code></li><li><code>switch_1_text</code> (text): Text</li></ul><h3 id="switch-2-text-icon-composite" tabindex="-1"><a class="header-anchor" href="#switch-2-text-icon-composite"><span>Switch 2 text icon (composite)</span></a></h3><p>Switch 2 text and icon. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_2_text_icon&quot;: {&quot;switch_2_icon&quot;: VALUE, &quot;switch_2_text&quot;: VALUE}}</code></p><ul><li><code>switch_2_icon</code> (enum): Icon allowed values: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code></li><li><code>switch_2_text</code> (text): Text</li></ul><h3 id="switch-3-text-icon-composite" tabindex="-1"><a class="header-anchor" href="#switch-3-text-icon-composite"><span>Switch 3 text icon (composite)</span></a></h3><p>Switch 3 text and icon. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_3_text_icon&quot;: {&quot;switch_3_icon&quot;: VALUE, &quot;switch_3_text&quot;: VALUE}}</code></p><ul><li><code>switch_3_icon</code> (enum): Icon allowed values: <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>, <code>10</code>, <code>11</code></li><li><code>switch_3_text</code> (text): Text</li></ul>',49))])}]]),c=JSON.parse('{"path":"/devices/ZNCJMB14LM.html","title":"Aqara ZNCJMB14LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara ZNCJMB14LM control via MQTT","description":"Integrate your Aqara ZNCJMB14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-11T20:10:12.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (left endpoint)","slug":"switch-left-endpoint","link":"#switch-left-endpoint","children":[]},{"level":3,"title":"Switch (center endpoint)","slug":"switch-center-endpoint","link":"#switch-center-endpoint","children":[]},{"level":3,"title":"Switch (right endpoint)","slug":"switch-right-endpoint","link":"#switch-right-endpoint","children":[]},{"level":3,"title":"Standby enabled (binary)","slug":"standby-enabled-binary","link":"#standby-enabled-binary","children":[]},{"level":3,"title":"Theme (enum)","slug":"theme-enum","link":"#theme-enum","children":[]},{"level":3,"title":"Beep volume (enum)","slug":"beep-volume-enum","link":"#beep-volume-enum","children":[]},{"level":3,"title":"Lcd brightness (numeric)","slug":"lcd-brightness-numeric","link":"#lcd-brightness-numeric","children":[]},{"level":3,"title":"Language (enum)","slug":"language-enum","link":"#language-enum","children":[]},{"level":3,"title":"Screen saver style (enum)","slug":"screen-saver-style-enum","link":"#screen-saver-style-enum","children":[]},{"level":3,"title":"Standby time (numeric)","slug":"standby-time-numeric","link":"#standby-time-numeric","children":[]},{"level":3,"title":"Font size (enum)","slug":"font-size-enum","link":"#font-size-enum","children":[]},{"level":3,"title":"Lcd auto brightness enabled (binary)","slug":"lcd-auto-brightness-enabled-binary","link":"#lcd-auto-brightness-enabled-binary","children":[]},{"level":3,"title":"Homepage (enum)","slug":"homepage-enum","link":"#homepage-enum","children":[]},{"level":3,"title":"Screen saver enabled (binary)","slug":"screen-saver-enabled-binary","link":"#screen-saver-enabled-binary","children":[]},{"level":3,"title":"Standby lcd brightness (numeric)","slug":"standby-lcd-brightness-numeric","link":"#standby-lcd-brightness-numeric","children":[]},{"level":3,"title":"Available switches (enum)","slug":"available-switches-enum","link":"#available-switches-enum","children":[]},{"level":3,"title":"Switch 1 text icon (composite)","slug":"switch-1-text-icon-composite","link":"#switch-1-text-icon-composite","children":[]},{"level":3,"title":"Switch 2 text icon (composite)","slug":"switch-2-text-icon-composite","link":"#switch-2-text-icon-composite","children":[]},{"level":3,"title":"Switch 3 text icon (composite)","slug":"switch-3-text-icon-composite","link":"#switch-3-text-icon-composite","children":[]}]}],"git":{"updatedTime":1740861400000},"filePathRelative":"devices/ZNCJMB14LM.md"}')}}]);