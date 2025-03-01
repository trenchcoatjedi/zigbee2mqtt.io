"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[41272],{37934:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>i});var s=a(6254);const t={},l=(0,a(52753).A)(t,[["render",function(e,n){const a=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[n[8]||(n[8]=(0,s.Lk)("h1",{id:"paulmann-500-67",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#paulmann-500-67"},[(0,s.Lk)("span",null,"Paulmann 500.67")])],-1)),(0,s.Lk)("table",null,[n[6]||(n[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[n[2]||(n[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"500.67")],-1)),(0,s.Lk)("tr",null,[n[1]||(n[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(a,{to:"/supported-devices/#v=Paulmann"},{default:(0,s.k6)((()=>n[0]||(n[0]=[(0,s.eW)("Paulmann")]))),_:1})])]),n[3]||(n[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"RGB remote control")],-1)),n[4]||(n[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"action")],-1)),n[5]||(n[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/500.67.png",alt:"Paulmann 500.67"})])],-1))])]),n[9]||(n[9]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ul><li>Press W-key for 3 seconds</li><li>Press Power On/Off Key for 5 seconds</li><li>Press Power On/Off again for 3 seconds Now the device should show up.</li></ul><h3 id="extended-hue" tabindex="-1"><a class="header-anchor" href="#extended-hue"><span>Extended hue</span></a></h3><p>The device gives extended hue values. Zigbee2MQTT calculates also the normal hue and provides both via MQTT.</p><ul><li>hue = extendedhue * 360 / 65536 % 360</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>n[7]||(n[7]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>brightness_stop</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>scene_*</code>.</p>',5))])}]]),i=JSON.parse('{"path":"/devices/500.67.html","title":"Paulmann 500.67 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Paulmann 500.67 control via MQTT","description":"Integrate your Paulmann 500.67 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-05-19T20:48:40.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Extended hue","slug":"extended-hue","link":"#extended-hue","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1740861400000},"filePathRelative":"devices/500.67.md"}')}}]);