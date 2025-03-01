"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27781],{97807:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>r,data:()=>n});var o=a(6254);const s={},r=(0,a(52753).A)(s,[["render",function(e,t){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Fv)('<h1 id="copying-the-ieee-address-of-an-adapter" tabindex="-1"><a class="header-anchor" href="#copying-the-ieee-address-of-an-adapter"><span>Copying the ieee address of an adapter</span></a></h1><p>When migrating from one stick to another it is important that the new stick uses the same ieee address as the old stick. Some devices lookup the coordinator by its ieee address, this fails when the ieee address of the coordinator changes. There are various tools which can do this.</p><p>First you have to determine the ieee address of your old stick, there are 2 ways to do this:</p><ol><li>Open the frontend, go to &quot;Settings&quot; -&gt; &quot;About&quot; -&gt; &quot;Coordinator IEEE Address&quot;</li><li>Open the <code>data/database.db</code>; on the first line you will find the coordinator ieee address:</li></ol><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;Coordinator&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;ieeeAddr&quot;</span><span class="token operator">:</span><span class="token string">&quot;0x00124b000e89686d&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;nwkAddr&quot;</span><span class="token operator">:</span><span class="token number">0</span>...</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Note that the <em>primary</em> ieee address will remain the same and these instructions only change the <em>secondary</em> ieee address. The tools below generally only show the primary ieee address, so it can appear that the changes aren&#39;t taking effect. Setting the secondary ieee address via the instructions below is sufficient to avoid the problem mentioned above.</p><h2 id="zigstar-multi-tool" tabindex="-1"><a class="header-anchor" href="#zigstar-multi-tool"><span>ZigStar Multi Tool</span></a></h2><p>Supports: CC2652, CC1352, CC2538</p><ol><li><a href="https://github.com/xyzroe/ZigStarGW-MT/releases" target="_blank" rel="noopener noreferrer">Download</a> and run the tool</li><li>Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode</li><li>Click refresh icon and select your adapter</li><li>Fill in the old coordinators ieee address under &quot;IEEE&quot; (first <code>0x</code> can be skipped)</li><li>Check &quot;Write IEEE&quot; and click &quot;Write IEEE&quot;</li><li>Reflash the firmware on your stick (this is important, otherwise the coordinator will not use the new ieee address)</li></ol><h2 id="cc2538-bsl" tabindex="-1"><a class="header-anchor" href="#cc2538-bsl"><span>cc2538-bsl</span></a></h2><p>Supports: CC2652, CC1352, CC2538</p><ol><li><a href="https://github.com/JelmerT/cc2538-bsl" target="_blank" rel="noopener noreferrer">Download</a> the tool</li><li>Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode (if necessary, some adapters have an autobootloader, e.g. <a href="https://slae.sh/projects/cc2652/#flash-it" target="_blank" rel="noopener noreferrer">this one</a>)</li><li>Run <code>./cc2538-bsl.py -evw --ieee-address 00:12:4b:aa:bb:cc:dd:ee -p /dev/tty.usbserial-10 ./fw.hex</code>, replace: <ul><li><code>00:12:4b:aa:bb:cc:dd:ee</code> with your coordinator ieee address (first <code>0x</code> can be skipped)</li><li><code>/dev/tty.usbserial-10</code> with the path to your adapter (for Sonoff Zigbee USB Dongle Plus <code>--bootloader-sonoff-usb</code> is needed as well)</li><li><code>./fw.hex</code> with the path to your adapters firmware.</li></ul></li></ol><h2 id="flash-programmer-2" tabindex="-1"><a class="header-anchor" href="#flash-programmer-2"><span>FLASH-PROGRAMMER-2</span></a></h2><p>Supports: CC2652, CC1352, CC2538</p><ol><li><a href="https://www.ti.com/tool/FLASH-PROGRAMMER" target="_blank" rel="noopener noreferrer">Download</a> the tool</li><li>Plug in your adapter and put it in BSL mode, consult your adapters manual on how to put it in BSL mode</li><li>Select your adapter, go to &quot;MAC address&quot;</li><li>Fill the old coordinator ieee address into &quot;Secondary Address&quot; -&gt; &quot;IEEE 802.15.4 MAC address&quot; (first <code>0x</code> can be skipped)</li><li>Press &quot;Write&quot;</li><li>Reflash the firmware on your stick - in the right corner under Secondary MAC check &quot;Retain secondary IEEE&quot; (this is important, otherwise the coordinator will not use the new ieee address)</li></ol>',15)]))}]]),n=JSON.parse('{"path":"/guide/adapters/flashing/copy_ieeaddr.html","title":"Copying the ieee address of an adapter","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"ZigStar Multi Tool","slug":"zigstar-multi-tool","link":"#zigstar-multi-tool","children":[]},{"level":2,"title":"cc2538-bsl","slug":"cc2538-bsl","link":"#cc2538-bsl","children":[]},{"level":2,"title":"FLASH-PROGRAMMER-2","slug":"flash-programmer-2","link":"#flash-programmer-2","children":[]}],"git":{"updatedTime":1740861400000},"filePathRelative":"guide/adapters/flashing/copy_ieeaddr.md"}')}}]);